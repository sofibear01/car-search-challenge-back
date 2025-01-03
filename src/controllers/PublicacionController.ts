import { Request, Response } from 'express';
import { createPublicationService, getAllPublicationsService } from '../services/PublicacionService';

export const createPublication = async (req: Request, res: Response) => {
  const { agencyName, location } = req.body;

  const idAgencia = 1; //hardcoded
  const nombreTitular = agencyName;
  const direccion = location.address;
  const latitud = location.lat;
  const longitud = location.lng;

  try {
    await createPublicationService(idAgencia, nombreTitular, direccion, latitud, longitud);
    return res.status(201).json({ message: 'Publication created successfully' });
  } catch (error) {
    console.error('Error creating publication:', error);
    return res.status(500).json({ error: 'Error creating publication en el controlador' });
  }
};

export const getAllPublications = async (req: Request, res: Response) => {
  try {
    const publications = await getAllPublicationsService();
    return res.status(200).json(publications);
  } catch (error) {
    console.error('Error fetching publications:', error);
    return res.status(500).json({ error: 'Error fetching publications' });
  }
};





