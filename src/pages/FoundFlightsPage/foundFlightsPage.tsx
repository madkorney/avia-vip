import FlightsList from 'components/FlightsList/flightsList';

import { FlightSearchParams } from 'data';

const FoundFlightsPage = (props: { params: FlightSearchParams }) => {
  return (
    <div>
      <FlightsList searchParams={props.params} />
    </div>
  );
};

export default FoundFlightsPage;
