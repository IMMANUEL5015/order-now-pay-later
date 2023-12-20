import { protect } from '../../utilities/auth';
import {create, login} from './department.controller';

async function departments (fastify: any, options: any) {
    fastify.route({
        method: 'POST',
        url: '/departments',
        onRequest: protect,
        handler: create
      });

    fastify.post('/departments/login', login)
  }
  
export default departments;