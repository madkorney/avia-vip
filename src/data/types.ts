import { CITIES, AIRPORT_CODES, CARRIERS } from './constants';

export type FlightSearchParams = {
  oneWay: boolean;
  departureCity: CITIES;
  arrivalCity: CITIES;
  departureDate: Date;
  arrivalDate: Date;
};

export type Airport = {
  IATA: AIRPORT_CODES;
  city: CITIES;
  name: string;
};

export type FlightData = {
  departureAirport: Airport;
  arrivalAirport: Airport;
  schedule: string;
  flightNumber: string;
  departureTime: string;
  arrivelTime: string;
  duration: string;
  priceRUB: number;
  carrier: CARRIERS;
  laggageIncluded: boolean;
};
