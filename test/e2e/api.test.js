import { 
    jest,
    expect,
    test,
    describe,
} from '@jest/globals'

import supertest from 'supertest'
import server from '../../src/server.js'

describe('API E2E Test Suite', () => {
    teste('GET / - should return an array', async () =>{
        const response = await supertest(server)
            .get('/')
        const data = JSON.parse(response.text)
        expect(data).toBeInstanceOf(Array)
        expect(data.length).toEqual(0)
        console.log('text', response.text)
    })
    
    test('POST / - should savve an item and return ok', async () =>{
        const response = await supertest(server)
            .post('/')
            .send({
                nome: 'carlosgil',
                age: 21
            })
        const expectedResponse = {ok: 1}
        const data = JSON.parse(response.text)
        expect(JSON.parse(response.text)).toStrictEqual(expectedResponse)
    })
    test.todo('DELETE / - should save an item and return ok')
})