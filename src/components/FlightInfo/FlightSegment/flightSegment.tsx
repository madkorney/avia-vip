import { useState } from 'react';

import FlightDurationAndIATAs from './FlightDurationAndIATAs';
import CarrierLogo from './CarrierLogo';
import TicketOption from './TicketOption';
import TimeAndCity from './TimeAndCity';
import LuggageIcon from './LuggageIcon';

import { FlightsSet, TICKET_REFUND_OPTIONS } from 'data';

import './flightSegment.scss';
import TimeOptionButton from './TimeOptionButton';

type FlightSegmentProps = {
  flightsSet: FlightsSet;
  date: string;
  departureCity: string;
  arrivalCity: string;
};

const FlightSegment = ({ flightsSet, date, departureCity, arrivalCity }: FlightSegmentProps) => {
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(0);
  const [selectedDuration, setSelectedDuration] = useState(flightsSet.availableTimes[0].duration);
  const areTimeOptionsAvailable = flightsSet.availableTimes.length > 1;

  const handleTimeSelect = (btnIndex: number) => {
    setSelectedTimeIndex(btnIndex);
    setSelectedDuration(flightsSet.availableTimes[btnIndex].duration);
  };

  return (
    <div className="flight-segment-container">
      <TicketOption refundOption={TICKET_REFUND_OPTIONS.NOT_REFUNDABLE} />

      <div className="flightset-info">
        <CarrierLogo carrier={flightsSet.carrier} />

        <TimeAndCity
          time={flightsSet.availableTimes[selectedTimeIndex].departureTime}
          city={departureCity}
          date={date}
        />

        <FlightDurationAndIATAs
          departureLocation={flightsSet.departureAirport.IATA}
          arrivalLocation={flightsSet.arrivalAirport.IATA}
          duration={selectedDuration}
        />

        <TimeAndCity
          time={flightsSet.availableTimes[selectedTimeIndex].arrivalTime}
          city={arrivalCity}
          date={date}
        />

        <LuggageIcon luggageIncluded={flightsSet.luggageIncluded} />
      </div>

      {areTimeOptionsAvailable ? (
        <div className="time-buttons">
          {flightsSet.availableTimes.map((timeOptions, index) => {
            return (
              <TimeOptionButton
                key={index}
                className={`btn-time ${index === selectedTimeIndex ? 'active' : ''}`}
                departureTime={timeOptions.departureTime}
                arrivalTime={timeOptions.arrivalTime}
                handleClick={() => {
                  handleTimeSelect(index);
                }}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default FlightSegment;
