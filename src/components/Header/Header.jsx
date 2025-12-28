import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='container'>
          <div className='header-box'>
            <Link to='/' className='header-logo'>
              <img src='/img/logo.svg' alt='Логотип Abito' />
              <h1 className='header-heading'>Abito</h1>
            </Link>
            <div className='header-controls'>
              <button className='btn btn-outline'>Вход и регистрация</button>
              <button className='btn btn-primary'>Подать объявление</button>
            </div>
            <div className='header-burger'>
              <img src='/img/burger-menu.svg' alt='Бургер меню' />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
