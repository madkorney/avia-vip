type TimeButtonProps = {
  className: string;
  handleClick: () => void;
  departureTime: string;
  arrivalTime: string;
};

const TimeOptionButton = ({
  className,
  handleClick,
  departureTime,
  arrivalTime,
}: TimeButtonProps) => {
  const formattedDepartureTime = departureTime.padStart(5, '0');
  const formattedArrivalTime = arrivalTime.padStart(5, '0');

  return (
    <button className={className} onClick={handleClick}>
      <span className="departure-time">{formattedDepartureTime}</span>
      {` - `}
      {formattedArrivalTime}
    </button>
  );
};

export default TimeOptionButton;
