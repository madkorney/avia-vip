import { Route, Routes, BrowserRouter } from 'react-router-dom';

import TemplatePage from 'pages/TemplatePage/templatePage';
import SearchFlightsPage from 'pages/SearchFlightsPage/searchFlightsPage';
import FoundFlightsPage from 'pages/FoundFlightsPage/foundFlightsPage';
import NotFoundPage from 'pages/NotFoundPage/notFoundPage';

import { REACT_APP_BASENAME as BASENAME } from 'data';

import './App.scss';

const App = () => {
  return (
    <BrowserRouter basename={BASENAME}>
      <Routes>
        <Route path="/avia" element={<TemplatePage />}>
          <Route path="/avia" element={<SearchFlightsPage />} />
          <Route path="/avia/info" element={<FoundFlightsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
