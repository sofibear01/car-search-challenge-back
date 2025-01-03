import { getAllPublications, insertPublication } from '../repositories/PublicacionRepository';
import { db } from '../db';

export const createPublicationService = async (idAgencia: number, nombreTitular: string, direccion: string, latitud: number, longitud: number) => {
  try {
    return await insertPublication(db, idAgencia, nombreTitular, direccion, latitud, longitud);
  } catch (error) {
    console.error('Error creating publication en el servicio:', error);
    throw new Error('Error creating publication en el servicio');
  }
};

export const getAllPublicationsService = async () => {
  try {
    return await getAllPublications(db);
  } catch (error) {
    console.error('Error fetching publications en el servicio:', error);
    throw new Error('Error fetching publications en el servicio');
  }
};


