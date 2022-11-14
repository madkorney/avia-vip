import FlightsList from 'components/FlightsList/flightsList';

import { FlightData } from 'data';

const FoundFlightsPage = (props: { flightsList: FlightData[] }) => {
  return (
    <div>
      <FlightsList flightsList={props.flightsList} />
    </div>
  );
};

export default FoundFlightsPage;
