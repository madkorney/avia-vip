import React, { Fragment } from 'react';

import SearchFlights from 'components/SearchFlights/searchFlights';

import { SearchProps } from 'data';

const SearchFlightsPage = (props: SearchProps) => {
  const { params, handler } = props;

  return (
    <Fragment>
      <SearchFlights handler={handler} params={params} />
    </Fragment>
  );
};

export default SearchFlightsPage;
