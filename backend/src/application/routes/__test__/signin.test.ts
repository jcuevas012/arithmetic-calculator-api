// import supertest from 'supertest'
// import { app } from '../../server'

// describe(' POST /users/signin test cases', function () {
//     const agent = supertest.agent(app)

//     it('signin 400 bad request ', async () => {
//         await agent
//             .post('/api/users/signup')
//             .send({
//                 email: 'test@gmail.com',
//                 password: 'test1323',
//             })
//             .expect(201)

//         return agent
//             .post('/api/users/signin')
//             .send({
//                 email: 'test@gmail.com',
//                 password: '',
//             })
//             .expect(400)

//     })


//     it('signin 200 ', async () => {
//         await agent
//             .post('/api/users/signup')
//             .send({
//                 email: 'test@gmail.com',
//                 password: 'test1323',
//             })
//             .expect(201)

//         return agent
//             .post('/api/users/signin')
//             .send({
//                 email: 'test@gmail.com',
//                 password: 'test1323',
//             })
//             .expect(200)

//     })


// })

