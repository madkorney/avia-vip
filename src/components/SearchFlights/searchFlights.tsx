import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';

import { SearchProps, FlightSearchParams } from 'data';
import './searchFlight.scss';

const SearchFlights = (props: SearchProps) => {
  const [cityFrom, setCityFrom] = useState('');
  const [cityTo, setCityTo] = useState('');
  const [dateTo, setDateTo] = useState(new Date().toLocaleDateString('ru-RU'));
  const [dateBack, setDateBack] = useState('');
  const [isValidated, setIsValidated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let validated = true;
    validated = validated && !!cityTo;
    validated = validated && !!cityFrom;
    validated = validated && !!dateTo;
    validated = validated && !!dateTo.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/i);
    if (dateBack) {
      validated = validated && !!dateBack.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/i);
    }
    setIsValidated(validated);
  }, [cityTo, cityFrom, dateTo, dateBack]);

  const handleClick = () => {
    const newParams: FlightSearchParams = {
      oneWay: !dateBack,
      departureCity: cityFrom,
      arrivalCity: cityTo,
      departureDate: dateTo,
    };
    if (dateBack) {
      newParams.returnDate = dateBack;
    }
    props.handler(newParams);
    navigate('info');
  };

  return (
    <div className="seacrh-form-container">
      <form className="inputs-container">
        <label>
          Откуда
          <input
            type="text"
            name="city-from"
            id="city-from"
            placeholder="Город вылета"
            required
            value={cityFrom}
            onChange={(e) => {
              setCityFrom(e.target.value);
            }}
          />
        </label>
        <label>
          Куда
          <input
            type="text"
            name="city-to"
            id="city-to"
            placeholder="Город прилета"
            required
            value={cityTo}
            onChange={(e) => {
              setCityTo(e.target.value);
            }}
          />
        </label>
        <label>
          Tуда
          <input
            className={dateTo ? 'date-input-active' : 'date-input-inactive'}
            type="text"
            name="date-to"
            id="date-to"
            placeholder="дд.мм.гг"
            required
            value={dateTo}
            onChange={(e) => {
              setDateTo(e.target.value);
            }}
          />
        </label>
        <label>
          Обратно
          <input
            className={dateBack ? 'date-input-active' : 'date-input-inactive'}
            type="text"
            name="date-back"
            id="date-back"
            placeholder="дд.мм.гг"
            value={dateBack}
            onChange={(e) => {
              setDateBack(e.target.value);
            }}
          />
        </label>
        <div className="dline"></div>
      </form>

      <div className="btn-container">
        <Button variant="contained" onClick={handleClick} disabled={!isValidated}>
          Найти билеты
        </Button>
      </div>

      {/* <Button variant="contained" disabled>
        Disabled
      </Button> */}
    </div>
  );
};

export default SearchFlights;
