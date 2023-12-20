import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('businesses', (table) => {
        table.increments();
        table.string('name');
        table.string('email');
        table.string('password');
        table.integer('credit_score');
        table.timestamps();
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('businesses');
}

