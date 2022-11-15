import FlightInfo from 'components/FlightInfo/flightInfo';

import {
  FlightSearchParams,
  mockFlightOneWay,
  mockFlightTwoWayA,
  mockFlightTwoWayBcorrect,
} from 'data';

type FlightListPros = {
  searchParams: FlightSearchParams;
};

const FlightsList = (props: FlightListPros) => {
  const { searchParams } = props;
  const flightTo = searchParams.oneWay ? mockFlightOneWay : mockFlightTwoWayA;
  const flightBack = mockFlightTwoWayBcorrect;

  return (
    <div className="header-container">
      <FlightInfo
        oneWay={searchParams.oneWay}
        flightsSetTo={flightTo}
        flightsSetBack={flightBack}
        dateTo={searchParams.departureDate}
        dateBack={searchParams.returnDate}
        departureCity={searchParams.departureCity}
        arrivalCity={searchParams.arrivalCity}
      />
    </div>
  );
};

export default FlightsList;
