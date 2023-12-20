import mongoose from "mongoose";

const schema = new mongoose.Schema({
  amount: {type: Number, required: true}, 
  business_id: {type: Number, required: true},
  order_id: {type: Number},          
  reference: {type: String, required: true, unique: true}, 
  status: {type: String, required: true, enum: ['paid', 'unpaid'], default: 'unpaid'},                 
  created_at: {type: Date, default: Date.now},
  updated_at: Date,
});

const Transaction = mongoose.model('Transaction', schema);
export default Transaction;