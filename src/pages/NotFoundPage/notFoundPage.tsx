import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <p>Запрашиваемая страница не найдена.. :( </p>
      <div>
        Вернуться <Link to="/avia">к началу</Link>?
      </div>
    </div>
  );
};

export default NotFoundPage;
