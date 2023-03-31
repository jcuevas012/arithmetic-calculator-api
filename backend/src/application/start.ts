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