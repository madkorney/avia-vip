import { Airport } from './types';
import AIRPORT_LIST from './airports.json';

export const AIRPORTS_DATA = AIRPORT_LIST as { [IATA: string]: Airport };
