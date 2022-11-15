import { useState } from 'react';

import FlightDurationAndIATAs from './FlightDurationAndIATAs';
import CarrierLogo from './CarrierLogo';
import TicketOption from './TicketOption';
import TimeAndCity from './TimeAndCity';
import LuggageIcon from './LuggageIcon';

import { FlightsSet, TICKET_REFUND_OPTIONS } from 'data';

import './flightSegment.scss';

type FlightSegmentProps = {
  flightsSet: FlightsSet;
  date: string;
  departureCity: string;
  arrivalCity: string;
};

const FlightSegment = (props: FlightSegmentProps) => {
  const { flightsSet, date, departureCity, arrivalCity } = props;
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(0);
  const [selectedDuration, setSelectedDuration] = useState(flightsSet.availableTimes[0].duration);

  const handleTimeSelect = (btnIndex: number) => {
    setSelectedTimeIndex(btnIndex);
    setSelectedDuration(flightsSet.availableTimes[btnIndex].duration);
  };

  return (
    <div className="flight-segment-container">
      <TicketOption option={TICKET_REFUND_OPTIONS.NOT_REFUNDABLE} />
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
        <LuggageIcon luggageIncluded={flightsSet.laggageIncluded} />
      </div>
      {flightsSet.availableTimes.length > 1 ? (
        <div className="time-buttons">
          {flightsSet.availableTimes.map((times, index) => {
            return (
              <button
                className={`btn-time ${index === selectedTimeIndex ? 'active' : ''}`}
                key={index}
                onClick={() => {
                  handleTimeSelect(index);
                }}
              >
                <span className="departure-time">{times.departureTime.padStart(5, '0')}</span>
                {` - `}
                {times.arrivalTime.padStart(5, '0')}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default FlightSegment;
