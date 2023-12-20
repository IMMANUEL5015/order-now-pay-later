import Request from '../mongodb/models/requests'
import {request} from '../modules/orders/order.dto';

const prevent_replay_attack = async (request: any) => {
    await Request.create({
        owner: request.user.id,
        created_at: Date(),
        url: request.url,
        body: JSON.stringify(request.body)
    });

    //Requests made within a time difference of 5 seconds are considered duplicate
    let requests = await Request.find({
        url: request.url,
        owner: request.user.id,
        created_at: {$lte: Date.now(), $gte: Date.now() - 5000}
    });

    if (requests.length > 1) {
        const ids = requests.map((request: request) => request._id);
        await Request.updateMany({_id: ids}, {isDuplicate: true});
        
        throw new Error(
            'This appears to be a duplicate transaction. Please wait a moment and try again.'
        );
    }
}

export default prevent_replay_attack;