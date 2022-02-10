import express, { Application, Request, Response, NextFunction } from "express";
import { OK, StatusCodes } from 'http-status-codes';
import formRoute from "./routes/routes";



const app: Application = express();
const port = 5000;
app.use(express.json());
const cors = require('cors');
app.use(cors());

app.get('/status', (req: Request, resp: Response, next: NextFunction) => {
    resp.status(StatusCodes.OK).send();
});
app.use(formRoute);
app.use(express.urlencoded({ extended: true }))

app.listen(5000, () => {
    console.log('Aplicação escutando a porta 5000!!! \n http://localhost:5000/status');
})


