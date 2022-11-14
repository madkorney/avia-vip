// import './header.scss';

import FlightInfo from 'components/FlightInfo/flightInfo';

const FlightsList = () => {
  return (
    <div className="header-container">
      <FlightInfo flightNumber={1} />
      <FlightInfo flightNumber={2} />
    </div>
  );
};

export default FlightsList;
