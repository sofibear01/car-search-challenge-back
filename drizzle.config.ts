//import { defineConfig } from "drizzle-kit";

// export default defineConfig({
//     schema: "./src/database/schema",
//     out: "./src/database/migrations",
//     dbCredentials: {
//         connectionString: process.env.DATABASE_URL!,
//     },
//     driver: 'pg',
// });



import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    schema: './src/db/schemas/schema.ts', // Ruta donde se generará el esquema
    out: './src/db/migrations',   // Carpeta para las migraciones
    dbCredentials: {
      url: process.env.DATABASE_URL!, // URL de conexión a tu base de datos
    },
    dialect: 'postgresql', // Añadir el dialecto de la base de datos
  });