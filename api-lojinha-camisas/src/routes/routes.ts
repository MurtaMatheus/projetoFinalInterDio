import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import dbScripts from "../DB/dbQuerys";
import dbReturn from "../models/dbReturn.models";

const formRoute = Router();


formRoute.get('/card', async (req: Request, resp: Response, next: NextFunction) => {
    const consulta = await dbScripts.consultaDb();
    resp.status(StatusCodes.OK).send(consulta);
})


formRoute.post('/card', async (req: Request<{ dbReturn: string }>, resp: Response, next: NextFunction) => {
    const dados = req.body;
    const insert = await dbScripts.insertDb(dados);



    resp.status(StatusCodes.CREATED).json('OK');
})


export default formRoute;