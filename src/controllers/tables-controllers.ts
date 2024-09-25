import { Request, Response, NextFunction } from "express";
import { knex } from "@/database/knex";

class TablesController {
    async index(request: Request, response: Response, next: NextFunction) {
        try {
            const tables = await knex<TablesRepository>("tables").select().orderBy("number_table");
            return response.json(tables);
        } catch (error) {
            next(error);
        }
    }
}

export  { TablesController };