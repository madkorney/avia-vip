import { FlightData, FlightsSet } from './types';
import FLIGHT_LIST from './flights.json';
import { CARRIERS } from 'data';
import { AIRPORTS_DATA } from './airports';

export const FLIGHTS_DATA = FLIGHT_LIST as FlightData[];

export const mockFlightOneWay: FlightsSet = {
  priceRUB: 4150,
  carrier: CARRIERS.S7,
  luggageIncluded: true,
  departureAirport: AIRPORTS_DATA.SVO,
  arrivalAirport: AIRPORTS_DATA.ROV,
  availableTimes: [
    { departureTime: '9:20', arrivalTime: '11:05', duration: '1:55' },
    { departureTime: '10:20', arrivalTime: '12:06', duration: '1:56' },
    { departureTime: '11:20', arrivalTime: '13:05', duration: '1:55' },
  ],
};

export const mockFlightTwoWayA: FlightsSet = {
  priceRUB: 4150,
  carrier: CARRIERS.S7,
  luggageIncluded: true,
  departureAirport: AIRPORTS_DATA.SVO,
  arrivalAirport: AIRPORTS_DATA.ROV,
  availableTimes: [{ departureTime: '22:57', arrivalTime: '11:05', duration: '1:55' }],
};

export const mockFlightTwoWayB: FlightsSet = {
  priceRUB: 4150,
  carrier: CARRIERS.S7,
  luggageIncluded: true,
  departureAirport: AIRPORTS_DATA.SVO,
  arrivalAirport: AIRPORTS_DATA.ROV,
  availableTimes: [{ departureTime: '22:57', arrivalTime: '11:05', duration: '1:55' }],
};

export const mockFlightTwoWayAcorrect: FlightsSet = {
  priceRUB: 4150,
  carrier: CARRIERS.S7,
  luggageIncluded: true,
  departureAirport: AIRPORTS_DATA.SVO,
  arrivalAirport: AIRPORTS_DATA.ROV,
  availableTimes: [{ departureTime: '9:20', arrivalTime: '11:05', duration: '1:55' }],
};

export const mockFlightTwoWayBcorrect: FlightsSet = {
  priceRUB: 4150,
  carrier: CARRIERS.S7,
  luggageIncluded: true,
  departureAirport: AIRPORTS_DATA.ROV,
  arrivalAirport: AIRPORTS_DATA.SVO,
  availableTimes: [{ departureTime: '21:57', arrivalTime: '23:50', duration: '1:53' }],
};
