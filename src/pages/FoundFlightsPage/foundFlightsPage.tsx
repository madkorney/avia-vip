import FlightsList from 'components/FlightsList/flightsList';

import { FlightSearchParams } from 'data';
import { Link } from 'react-router-dom';

const FoundFlightsPage = ({ params }: { params: FlightSearchParams }) => {
  return (
    <div>
      <Link to={'/avia'}>назад</Link>
      <FlightsList searchParams={params} />
    </div>
  );
};

export default FoundFlightsPage;
