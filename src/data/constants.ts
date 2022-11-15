import { FlightSearchParams } from './types';

export const { REACT_APP_BASENAME } = process.env;
// export const REACT_APP_BASENAME = '/';
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

export enum TICKET_REFUND_OPTIONS {
  NOT_REFUNDABLE = 'Невозвратный',
}
