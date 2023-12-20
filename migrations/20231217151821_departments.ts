import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('departments', (table) => {
        table.increments();
        table.string('name');
        table.string('email');
        table.string('password');
        table.integer('business_id');
        table.timestamps();
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('departments');
}

