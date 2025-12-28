// pages/NotFound.js
import { Link } from 'react-router-dom';
import { Header } from '../components/Header/Header';

export const NotFound = () => {
  return (
    <>
      <Header />
      <section className='content'>
        <div className='container'>
          <div className='not-found'>
            <h1>404 - Страница не найдена</h1>
            <p>Извините, запрашиваемая страница не существует.</p>
            <Link to='/' className='btn btn-primary'>
              Вернуться на главную
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
