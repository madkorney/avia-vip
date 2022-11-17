import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import InputDepartureCity from './InputDepartureCity';
import InputArrivalCity from './InputArrivalCity';
import InputReturnDate from './InputReturnDate';
import InputDepartureDate from './InputDepartureDate';

import { SearchProps, FlightSearchParams, validateForm } from 'data';

import './searchFlight.scss';

const SearchFlights = ({ handleFormSearch }: SearchProps) => {
  const [departureCity, setDepartureCity] = useState('');
  const [arrivalCity, setArrivalCity] = useState('');
  const [departureDate, setDepartureDate] = useState(new Date().toLocaleDateString('ru-RU'));
  const [returnDate, setReturnDate] = useState('');
  const [isValidated, setIsValidated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const validated = validateForm({
      cityTo: arrivalCity,
      cityFrom: departureCity,
      dateTo: departureDate,
      dateBack: returnDate,
    });
    setIsValidated(validated);
  }, [arrivalCity, departureCity, departureDate, returnDate]);

  const handleClick = () => {
    const newParams: FlightSearchParams = {
      oneWay: !returnDate,
      departureCity: departureCity,
      arrivalCity: arrivalCity,
      departureDate: departureDate,
    };
    if (returnDate) {
      newParams.returnDate = returnDate;
    }

    handleFormSearch(newParams);
    navigate('info');
  };

  const handleDepartureCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDepartureCity(e.target.value);
  };

  const handleArrivalCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArrivalCity(e.target.value);
  };

  const handleDepartureDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDepartureDate(e.target.value);
  };

  const handleReturnDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReturnDate(e.target.value);
  };

  return (
    <div className="seacrh-form-container">
      <form className="inputs-container">
        <InputDepartureCity
          label={'Откуда'}
          id={'departure-city'}
          placeholder={'Город вылета'}
          required
          value={departureCity}
          handleChange={handleDepartureCityChange}
        />

        <InputArrivalCity
          label={'Куда'}
          id={'arrival-city'}
          placeholder={'Город прилета'}
          required
          value={arrivalCity}
          handleChange={handleArrivalCityChange}
        />

        <InputDepartureDate
          className={departureDate ? 'date-input-active' : 'date-input-inactive'}
          label={'Tуда'}
          id={'departure-date'}
          placeholder={'дд.мм.гг'}
          required
          value={departureDate}
          handleChange={handleDepartureDateChange}
        />

        <InputReturnDate
          className={returnDate ? 'date-input-active' : 'date-input-inactive'}
          label={'Обратно'}
          id={'return-date'}
          placeholder={'дд.мм.гг'}
          required
          value={returnDate}
          handleChange={handleReturnDate}
        />

        <div className="dline" />
      </form>

      <div className="btn-container">
        <Button variant="contained" onClick={handleClick} disabled={!isValidated}>
          Найти билеты
        </Button>
      </div>
    </div>
  );
};

export default SearchFlights;
