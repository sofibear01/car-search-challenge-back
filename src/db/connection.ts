//Archivo de conección con la base de datos
import postgres from "postgres";

const connectionString = process.env.DATABASE_URL!;
//console.log(connectionString);  

export const client = postgres(connectionString);
