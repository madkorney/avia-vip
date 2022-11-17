import PriceTag from './PrceTag';
import FlightSegment from './FlightSegment';

import { FlightsSet } from 'data';

import './flightInfo.scss';

type FlightInfoProps = {
  oneWay: boolean;
  flightsSetTo: FlightsSet;
  flightsSetBack?: FlightsSet;
  dateTo: string;
  dateBack?: string;
  departureCity: string;
  arrivalCity: string;
};

const FlightInfo = ({
  oneWay,
  flightsSetTo,
  flightsSetBack,
  dateTo,
  dateBack,
  departureCity,
  arrivalCity,
}: FlightInfoProps) => {
  const priceAmount = oneWay
    ? flightsSetTo.priceRUB
    : flightsSetTo.priceRUB + flightsSetBack!.priceRUB;

  return (
    <div className="flightset-container">
      <div className="flight-segments-container">
        <FlightSegment
          flightsSet={flightsSetTo}
          date={dateTo}
          departureCity={departureCity}
          arrivalCity={arrivalCity}
        />

        {!oneWay ? (
          <>
            <div className="dot-line" />
            <FlightSegment
              flightsSet={flightsSetBack!}
              date={dateBack!}
              departureCity={arrivalCity}
              arrivalCity={departureCity}
            />
          </>
        ) : null}
      </div>

      <PriceTag amount={priceAmount} />
    </div>
  );
};

export default FlightInfo;
