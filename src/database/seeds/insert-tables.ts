import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
   
    await knex("tables").del();

    await knex("tables").insert([
        { number_table: 1 },
        { number_table: 2 },
        { number_table: 3 },
        { number_table: 4 },
        { number_table: 5 },
    ]);
};
