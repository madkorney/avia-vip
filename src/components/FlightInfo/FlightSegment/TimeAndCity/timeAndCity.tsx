import './timeAndCity.scss';

type TimeAndCityProps = {
  time: string;
  city: string;
  date: string;
};

const TimeAndCity = (props: TimeAndCityProps) => {
  const { time, city, date } = props;
  return (
    <div className="time-city-container">
      <div className="time">{time}</div>
      <div className="city">{city}</div>
      <div className="date">{date}</div>
    </div>
  );
};

export default TimeAndCity;
