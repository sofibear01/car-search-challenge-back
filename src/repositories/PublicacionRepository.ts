import { publicacion } from "../db/schemas/publicacion";
import { DbConnection } from "../db"; 

export const insertPublication = async (
  db: DbConnection,
  idAgencia: number,
  nombreTitular: string,
  direccion: string,
  latitud: number,
  longitud: number
) => {
  try {
    return await db.insert(publicacion).values({
      idAgencia,
      nombreTitular,
      direccion,
      latitud: latitud.toFixed(6),
      longitud: longitud.toFixed(6),
  });
  } catch (error) {
    console.error('Error inserting publication en el repositorio:', error);
    throw new Error('Error inserting publication en el repositorio');
  }
};

export const getAllPublications = async (db: DbConnection) => {
  try {
    return await db.select().from(publicacion);
  } catch (error) {
    console.error('Error fetching publications:', error);
    throw new Error('Error fetching publications');
  }
};

