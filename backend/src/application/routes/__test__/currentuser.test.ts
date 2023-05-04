import supertest from 'supertest'
import { app } from '../../server'

export const signup = async (email: string, password: string): Promise<string[]> => {
    const agent = supertest.agent(app)

    const response = await agent
        .post('/api/users/signup')
        .send({
            email, password
        })

    return response.get('Set-Cookie') 
}


describe(' POST /users/current-user test cases', function () {
    const agent = supertest.agent(app)

    it('current user value ', async () => {
        const email = 'test@gmail.com'
        const password = 'test1323'
        const cookies = await signup(email, password)


        // const response = await agent
        //     .get('/api/users/current-user')
        //     .set('Cookie', cookies)
        //     .send({})

        // expect(response.body.currentUser.email).toEqual(email)

    })
})

