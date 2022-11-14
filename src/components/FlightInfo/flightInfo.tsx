// import './header.scss';

type FlightInfoProps = {
  flightNumber: number;
};

const FlightInfo = (props: FlightInfoProps) => {
  const { flightNumber } = props;
  return (
    <div>
      <p>Flight number : {flightNumber}</p>
    </div>
  );
};

export default FlightInfo;
