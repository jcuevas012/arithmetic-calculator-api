import supertest from 'supertest'
import { app } from '../../server'

describe(' POST /users/sigout test cases', function () {
    const agent = supertest.agent(app)

    it('signout 2000 ', async () => {
        const response = await agent
            .post('/api/users/signout')
            .send({})
            .expect(500)


        // expect(response.get('Set-Cookie')).toBeDefined()
    })
})

