import { sequelize } from "../infrastructure/database/sequelize"
import { app } from "./server"

const port = process.env.APP_PORT

const start = async () => {
     app.listen(port, () => {
            console.log(`==== App running on port ${port} ====`)
     })
}


(() => {
    start()
})()

process.on('SIGTERM', async (signal) => {
    console.log(`Process ${process.pid} received a SIGTERM signal`)
    await sequelize.close()
    process.exit(0)
  })
  
  process.on('SIGINT', async (signal) => {
    console.log(`Process ${process.pid} has been interrupted`)
    await sequelize.close()
    process.exit(0)
  })


  process.on('uncaughtException', async (err) => {
    console.log(`Uncaught Exception: ${err.message}`)
    await sequelize.close()
    process.exit(1)
  })

  process.on('unhandledRejection', async (err, promise) => {
    console.log('Unhandled rejection at ', promise, `reason: ${err}`)
    await sequelize.close()
    process.exit(1)
  })