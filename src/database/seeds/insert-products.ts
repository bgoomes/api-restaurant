import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("products").del();

    await knex("products").insert([
        { name: "Nhoque quatro queijos", price: 45 },
        { name: "Iscas de frango", price: 60 },
        { name: "Tilápia com alcaparras", price: 100 },
        { name: "Bolinho e mandioca", price: 75 },
        { name: "Escondidinho de carne de sol", price: 65 },
        { name: "Porcão de batatas fritas", price: 45 },
        { name: "Executivo de frango grelhado", price: 36 },
        { name: "Executivo de Tilápia grelhada", price: 39 },
        { name: "Caldo de palmito", price: 30 }, 
        { name: "Refrigerante 350 ml", price: 7.5 },
        { name: "Suco de laranja 440ml", price: 10 },
    ]);
};
