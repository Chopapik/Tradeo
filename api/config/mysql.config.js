import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

let dbPool;

async function connectDB() {

    console.log(process.env.DB_HOST)

    try {
        dbPool = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: Number(process.env.DB_PORT) || 3306

        });
        await dbPool.getConnection();
        console.log("Database connected successfully");
    } catch (err) {
        console.error("Error connecting to the database:", err);
    }
}


export { dbPool, connectDB };
