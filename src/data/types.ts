import { CITIES, AIRPORT_CODES, CARRIERS, WEEKDAY } from './constants';

export type FlightSearchParams = {
  oneWay: boolean;
  departureCity: CITIES | string;
  arrivalCity: CITIES | string;
  departureDate: string;
  returnDate?: string;
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
  arrivalTime: string;
  duration: string;
  priceRUB: number;
  carrier: CARRIERS;
  laggageIncluded: boolean;
};

export type FlightsSet = {
  priceRUB: number;
  carrier: CARRIERS;
  luggageIncluded: boolean;
  departureAirport: Airport;
  arrivalAirport: Airport;
  availableTimes: {
    departureTime: string;
    arrivalTime: string;
    duration: string;
  }[];
};

export type SearchProps = {
  handleFormSearch: (params: FlightSearchParams) => void;
  params: FlightSearchParams;
};

export type InputTextProps = {
  className?: string;
  label: string;
  id: string;
  placeholder: string;
  required: boolean;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
