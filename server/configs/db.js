import {neon} from '@neondatabase/serverless'
import 'dotenv/config';


const sql = neon(`${process.env.DATABSE_URL}`);

export default sql;