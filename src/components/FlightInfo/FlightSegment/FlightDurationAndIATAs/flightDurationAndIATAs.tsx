import './flightDurationAndIATAs.scss';

type FlightDurationAndIATAProps = {
  departureLocation: string;
  arrivalLocation: string;
  duration: string;
};

const FlightDurationAndIATAs = ({
  departureLocation,
  arrivalLocation,
  duration,
}: FlightDurationAndIATAProps) => {
  const durationHours = Number(duration.split(':')[0]);
  const durationMinutes = Number(duration.split(':')[1]);
  const durationFormatted = `В пути ${durationHours} ч ${durationMinutes} мин`;

  return (
    <div className="flight-duration-direction-container">
      <div className="locations">
        <div className="flight-direction-location">{departureLocation}</div>
        <div className="flight-direction-location">{arrivalLocation}</div>
      </div>
      <div className="hline">
        <div className="dot" />
        <div className="line" />
        <div className="dot" />
      </div>
      <div className="flight-duration">{durationFormatted}</div>
    </div>
  );
};

export default FlightDurationAndIATAs;
