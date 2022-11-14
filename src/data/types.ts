import { CITIES, AIRPORT_CODES, CARRIERS, WEEKDAY } from './constants';

export type FlightSearchParams = {
  oneWay: boolean;
  departureCity: CITIES | '';
  arrivalCity: CITIES | '';
  departureDate: Date | '';
  arrivalDate?: Date;
};

export type Airport = {
  IATA: AIRPORT_CODES;
  city: CITIES;
  name: string;
};

export type FlightData = {
  departureAirport: Airport;
  arrivalAirport: Airport;
  schedule: 'daily' | 'byDate' | 'weekDays';
  dates?: Date[];
  weekdays?: WEEKDAY[];
  flightNumber: string;
  departureTime: string;
  arrivelTime: string;
  duration: string;
  priceRUB: number;
  carrier: CARRIERS;
  laggageIncluded: boolean;
};

export type FlightsSet = {
  priceRUB: number;
  carrier: CARRIERS;
  laggageIncluded: boolean;
  departureAirport: Airport;
  arrivalAirport: Airport;
  availableTimes: {
    departureTime: string;
    arrivelTime: string;
    duration: string;
  }[];
};

export type SearchProps = {
  handler: (params: FlightSearchParams) => void;
  params: FlightSearchParams;
};
