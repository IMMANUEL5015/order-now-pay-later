import db from '../modules/db';
import Transaction from '../mongodb/models/transactions';
const axios = require('axios');

const ten_minutes = 100000;

const process_orders = async () => {
    const orders = await db.order.findMany({where: {paid_tax: false}});

    for (let order of orders) {
        try {
            const url = `https://taxes.free.beeceptor.com/log-tax`;
            const headers = { 'content-type': 'application/json'};
            const transaction = await Transaction.findOne({
                order_id: order.id
            });

            if (transaction && transaction.status === 'paid') {
                const resp = await axios({
                    data: {
                        order_id: transaction.reference,
                        platform_code: 'DUPLO',
                        order_amount: transaction.amount
                    }, 
                    url: url, method: 'POST', headers
                });
                
                await db.order.update({
                    where: {
                        id: order.id,
                    },
                    data: {
                        paid_tax: true,
                    },
                })
            }
        } catch (error: any) {
            console.log(error);
        }
    }
}

const pay_tax = () => {
    setInterval(process_orders, ten_minutes);
}
  
export default pay_tax;
