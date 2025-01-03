// filepath: /c:/Proyectos/car-search-challenge-back/backend/src/db/index.ts
// Definición de la conexión a la base de datos y exportación de los modelos
import { drizzle } from "drizzle-orm/postgres-js";
import { client } from './connection';
import * as schema from "./schemas/schema";

// Crea y exporta la conexión a la base de datos del orm con su esquema de tablas
export const db = drizzle(client, { schema });

export * from "./schemas/schema";
// Tiene todas las cosas para hacer las consultas
export * from "drizzle-orm";

// Le agrego un tipo a db para que los repositorios puedan ser utilizados para conexiones simples o transacciones
export type DbConnection = typeof db;