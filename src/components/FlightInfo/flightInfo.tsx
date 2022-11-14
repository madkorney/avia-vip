// import './header.scss';

import { FlightData } from 'data';

type FlightInfoProps = {
  flight: FlightData;
};

const FlightInfo = (props: FlightInfoProps) => {
  const { flight } = props;
  return (
    <div>
      <p>Flight number : {flight.flightNumber}</p>
    </div>
  );
};

export default FlightInfo;
