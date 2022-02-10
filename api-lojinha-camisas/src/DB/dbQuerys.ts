import dbConnection from "./dbConnection";
import dbReturn from "../models/dbReturn.models";


class dbScripts {
    async consultaDb(): Promise<dbReturn[]> {
        const script = `SELECT username, msg, data  FROM msg_api;`;
        const { rows } = await dbConnection.query(script);

        return rows || [];
    }

    async insertDb(dbReturn: dbReturn): Promise<string> {
        const script = `INSERT INTO msg_api (username, msg, data) VALUES ( $1, $2, NOW()) RETURNING uuid;`;
        const values = [dbReturn.username, dbReturn.msg];
        const { rows } = await dbConnection.query<{ dbReturn: string }>(script, values);
        const [info] = rows;

        return info.dbReturn;


    }

}

export default new dbScripts();