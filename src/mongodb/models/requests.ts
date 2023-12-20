const mongoose = require('mongoose');

const schema = mongoose.Schema({
    owner: Number,
    created_at: Date,
    url: String,
    body: String,
    isDuplicate: Boolean
});

const Request = mongoose.model('Request', schema);
export default Request;