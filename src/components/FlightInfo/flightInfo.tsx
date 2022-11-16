import PriceTag from './PrceTag';
import FlightSegment from './FlightSegment';

import { FlightsSet } from 'data';

import './flightInfo.scss';
import { Fragment } from 'react';

type FlightInfoProps = {
  oneWay: boolean;
  flightsSetTo: FlightsSet;
  flightsSetBack?: FlightsSet;
  dateTo: string;
  dateBack?: string;
  departureCity: string;
  arrivalCity: string;
};

const FlightInfo = (props: FlightInfoProps) => {
  const { oneWay, flightsSetTo, flightsSetBack, dateTo, dateBack, departureCity, arrivalCity } =
    props;
  return (
    <div className="flightset-container">
      <div className="flight-segments-container">
        <FlightSegment
          flightsSet={flightsSetTo}
          date={dateTo}
          departureCity={departureCity}
          arrivalCity={arrivalCity}
        />

        {oneWay ? null : (
          <Fragment>
            <div className="dot-line"></div>
            <FlightSegment
              flightsSet={flightsSetBack!}
              date={dateBack!}
              departureCity={arrivalCity}
              arrivalCity={departureCity}
            />
          </Fragment>
        )}
      </div>
      {oneWay ? (
        <PriceTag amount={flightsSetTo.priceRUB} />
      ) : (
        <PriceTag amount={flightsSetTo.priceRUB + flightsSetBack!.priceRUB} />
      )}
    </div>
  );
};

export default FlightInfo;
