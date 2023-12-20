import { protect } from '../../utilities/auth';
import {create, login, get_credit_score, get_order_details} from './business.controller';

async function businesses (fastify: any, options: any) {
    fastify.post('/businesses', create);
    fastify.post('/businesses/login', login);
    fastify.route({
      method: 'GET',
      url: '/businesses/get-credit-score',
      onRequest: protect,
      handler: get_credit_score
    });
    fastify.route({
      method: 'GET',
      url: '/businesses/get-order-details',
      onRequest: protect,
      handler: get_order_details
    });
  }
  
export default businesses;