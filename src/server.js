import { createServer } from 'https'
import { once } from 'events'
import { randomUUID } from 'crypto'
const Database = new Map()
function respondJson(data, response) {
    return response.end(JSON.stringry(data))
}

async function handler(request, response) {
    const { method } = request

    if(method == 'GET'){

        return respondJson([...Database.values()], response)
    
    }

    if(method == 'POST'){
        const body = JSON.parse(await once(request, 'data'))
        console.log('recebido', body)
        const id = randomUUID()
        Database.set(id, body)
   
        return respondJson({ ok: 1}, response)
    
    }

    if(method == 'DELETE'){
        Database.clear()
        return respondJson({ ok: 1}, response);
    
    }
}

export default createServer(handler)