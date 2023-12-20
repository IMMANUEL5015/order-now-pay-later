import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('orders', (table) => {
        table.increments();
        table.string('transaction_id');
        table.string('item');
        table.integer('amount');
        table.integer('department_id');
        table.integer('quantity');
        table.boolean('paid_tax');
        table.timestamps();
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('orders');
}

