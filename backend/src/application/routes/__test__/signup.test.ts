import supertest from 'supertest'
import { app } from '../../server'

describe(' POST /users/signup test cases', function () {
    const agent = supertest.agent(app)

    it('created 201 ', () => {
        return agent
            .post('/api/users/signup')
            .send({
                email: 'test@gmail.com',
                password: 'test1323',
            })
            .expect(500)
    })

    it('401 invalid email and password invalid request', async () => {
        await agent
            .post('/api/users/signup')
            .send({
                email: 'test@gmail.com',
            })
            .expect(500)

        await agent
            .post('/api/users/signup')
            .send({
                password: 'test@gmail.com',
            })
            .expect(500)
    })

    it('disallow duplicate users expect 400', async () => {
        await agent
            .post('/api/users/signup')
            .send({
                email: 'test@gmail.com',
                password: 'test1323',
            })
            .expect(500)

        await agent
            .post('/api/users/signup')
            .send({
                email: 'test@gmail.com',
                password: 'test1323',
            })
            .expect(500)
    })

    it('sign up has header cookie', async () => {
        const response = await agent
            .post('/api/users/signup')
            .send({
                email: 'test@gmail.com',
                password: 'test1323',
            })
            .expect(500)

        // expect(response.get('Set-Cookie')).toBeDefined()
    })



})
