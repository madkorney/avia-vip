import { useState } from 'react';

import { SearchProps } from 'data';

// import './searchFlight.scss';

const SearchFlights = (props: SearchProps) => {
  const { params, handler } = props;
  const [] = useState(params);

  return (
    <div className="seacrh-form-container">
      <p>search flights..</p>

      <button
        onClick={() => {
          handler(params);
        }}
      >
        submit
      </button>
    </div>
  );
};

export default SearchFlights;
