import { Pool } from 'pg';


const connectionString = 'insert DB URL/ADDRESS here';
const dbConnection = new Pool({ connectionString })

export default dbConnection; 