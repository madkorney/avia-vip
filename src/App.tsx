import { useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import TemplatePage from 'pages/TemplatePage/templatePage';
import SearchFlightsPage from 'pages/SearchFlightsPage/searchFlightsPage';
import FoundFlightsPage from 'pages/FoundFlightsPage/foundFlightsPage';
import NotFoundPage from 'pages/NotFoundPage/notFoundPage';

import {
  REACT_APP_BASENAME as BASENAME,
  FLIGHTS_DATA,
  FlightData,
  FlightSearchParams,
  INIT_SEARCH_PARAMS,
  checkFlightFitsSearch,
} from 'data';

import './App.scss';

const App = () => {
  const [flightsFilteredList, setFlightsFilteredList] = useState<FlightData[]>([]);
  const [searchParams, setSearchParams] = useState<FlightSearchParams>(INIT_SEARCH_PARAMS);

  const searchHandler = (params: FlightSearchParams) => {
    setSearchParams(() => {
      return params;
    });
  };

  useEffect(() => {
    const updatedFligthsList = FLIGHTS_DATA.filter((flight) => {
      checkFlightFitsSearch(flight, searchParams);
    });
    setFlightsFilteredList(() => {
      return updatedFligthsList;
    });
  }, [searchParams]);

  return (
    <BrowserRouter basename={BASENAME}>
      <Routes>
        <Route path="/avia" element={<TemplatePage />}>
          <Route
            path="/avia"
            element={<SearchFlightsPage handler={searchHandler} params={searchParams} />}
          />
          <Route
            path="/avia/info"
            element={<FoundFlightsPage flightsList={flightsFilteredList} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
