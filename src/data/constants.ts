import { FlightSearchParams, FlightData } from './types';

// export const { REACT_APP_BASENAME } = process.env;
export const REACT_APP_BASENAME = '/';
export const INIT_SEARCH_PARAMS: FlightSearchParams = {
  oneWay: true,
  departureCity: '',
  arrivalCity: '',
  departureDate: '',
};

export enum CARRIERS {
  S7 = 'S7 Airlines',
  SU = 'Aeroflot',
}

export enum CITIES {
  MOSCOW = 'Москва',
  ROSTOV_ON_DON = 'Ростов на Дону',
  SAINT_PETERSBURG = 'Санкт-Петербург',
}

export enum AIRPORT_CODES {
  SVO = 'SVO',
  DME = 'DME',
  VKO = 'VKO',
  LED = 'LED',
  ROV = 'ROV',
}

export enum WEEKDAY {
  SUN,
  MON,
  TUE,
  WED,
  THU,
  FRI,
  SAT,
}

export const checkFlightFitsSearch = (flight: FlightData, params: FlightSearchParams): boolean => {
  const checkDepartureDate =
    flight.schedule === 'daily' ||
    (flight.schedule === 'weekDays' &&
      flight.weekdays!.includes((params.departureDate as Date).getDay())) ||
    (flight.schedule === 'byDate' && flight.dates!.includes(params.departureDate as Date));
  const checkDestinationCities =
    flight.departureAirport.city === params.departureCity &&
    flight.arrivalAirport.city === params.arrivalCity;

  if (params.oneWay) {
    return checkDepartureDate && checkDestinationCities;
  }

  const checkReturnCities =
    flight.departureAirport.city === params.arrivalCity &&
    flight.arrivalAirport.city === params.departureCity;

  const checkReturnDate =
    flight.schedule === 'daily' ||
    (flight.schedule === 'weekDays' &&
      flight.weekdays!.includes(new Date(params.departureDate).getDay())) ||
    (flight.schedule === 'byDate' && flight.dates!.includes(params.departureDate as Date));

  return (checkDepartureDate && checkDestinationCities) || (checkReturnCities && checkReturnDate);
};
