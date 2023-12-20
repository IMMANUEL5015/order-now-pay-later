import 'dotenv/config';
import fastify from 'fastify'
import mongoose from 'mongoose';
import businesses from './modules/businesses/business.route';
import departments from './modules/departments/department.route';
import orders from './modules/orders/order.route';
import pay_tax from './jobs';

// Remember to change localhost to mongo
mongoose.connect('mongodb://immanuel:password@mongo:27017?authSource=admin')
  .then(res => console.log('Connected to mongodb database.'))
  .catch(err => console.log(err.message))

const server = fastify();

server.register(businesses);
server.register(departments);
server.register(orders);

pay_tax();

export default server;