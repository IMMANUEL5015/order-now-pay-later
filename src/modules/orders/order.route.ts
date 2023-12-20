import { protect } from '../../utilities/auth';
import {create, update} from './order.controller';

async function orders (fastify: any, options: any) {
    fastify.route({
        method: 'POST',
        url: '/orders',
        onRequest: protect,
        handler: create
      });

    fastify.route({
      method: 'PATCH',
      url: '/orders/:reference',
      onRequest: protect,
      handler: update
    });
  }
  
export default orders;