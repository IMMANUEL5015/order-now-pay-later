import {create} from './business.controller';

async function businesses (fastify: any, options: any) {
    fastify.post('/businesses', create)
  }
  
export default businesses;