// import './header.scss';

import FlightInfo from 'components/FlightInfo/flightInfo';

import { FlightData } from 'data';

const FlightsList = (props: { flightsList: FlightData[] }) => {
  return (
    <div className="header-container">
      <FlightInfo flight={props.flightsList[1]} />
      <FlightInfo flight={props.flightsList[4]} />
    </div>
  );
};

export default FlightsList;
