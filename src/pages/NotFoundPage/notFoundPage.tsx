import { Link } from 'react-router-dom';

import './notFoundPage.scss';

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <p>Запрашиваемая страница не найдена.. :( </p>
      <div>
        Вернуться <Link to="/avia">к началу</Link>?
      </div>
    </div>
  );
};

export default NotFoundPage;
