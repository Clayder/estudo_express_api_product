import express, {NextFunction, Request, Response} from "express";
import "express-async-errors";
import {router} from "./routes";
import {BaseException} from "./exception/BaseException";
import {Db} from "./infra/db/Db";

const app = express();
const port = 3333;

app.use(express.json());
app.use(router);
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof BaseException) {
        return response.status(err.statusCode).json({
            error: err.message,
        });
    }

    return response.status(500).json({
        status: 'error',
        message: 'Internal server error.'
    });
});

app.listen(port, () => {
    Db.loadFakeData();
    console.log("Servidor rodando na porta 3333");
});