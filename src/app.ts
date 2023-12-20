import 'dotenv/config';
import fastify from 'fastify'
import mongoose from 'mongoose';
import businesses from './modules/businesses/business.route';

// Remember to change localhost to mongo
mongoose.connect(process.env.MONGO_URI!)
  .then(res => console.log('Connected to mongodb database.'))
  .catch(err => console.log(err.message))

const server = fastify();

server.register(businesses);

export default server;