import {create, login} from './business.controller';

async function businesses (fastify: any, options: any) {
    fastify.post('/businesses', create)
    fastify.post('/businesses/login', login)
  }
  
export default businesses;