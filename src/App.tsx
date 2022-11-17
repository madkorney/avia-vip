import { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import SearchFlightsPage from 'pages/SearchFlightsPage';
import FoundFlightsPage from 'pages/FoundFlightsPage';
import NotFoundPage from 'pages/NotFoundPage';

import { REACT_APP_BASENAME as BASENAME, FlightSearchParams, INIT_SEARCH_PARAMS } from 'data';

import './App.scss';

const App = () => {
  const [searchParams, setSearchParams] = useState<FlightSearchParams>(INIT_SEARCH_PARAMS);

  const handleFormSearch = (params: FlightSearchParams) => {
    setSearchParams(() => {
      return params;
    });
  };

  return (
    <BrowserRouter basename={BASENAME}>
      <Routes>
        <Route
          path="/avia"
          element={<SearchFlightsPage handleFormSearch={handleFormSearch} params={searchParams} />}
        />
        <Route path="/avia/info" element={<FoundFlightsPage params={searchParams} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
