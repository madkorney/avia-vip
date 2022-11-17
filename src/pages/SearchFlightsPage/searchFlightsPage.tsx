import SearchFlights from 'components/SearchFlights/searchFlights';

import { SearchProps } from 'data';

const SearchFlightsPage = ({ params, handleFormSearch }: SearchProps) => {
  return (
    <>
      <SearchFlights handleFormSearch={handleFormSearch} params={params} />
    </>
  );
};

export default SearchFlightsPage;
