import { Header } from '../components/Header/Header';
import { sideArray } from '../constants';
import SideCard from '../components/SideCard/SideCard';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />

      <main className='main'>
        <section className='search'>
          <div className='container'>
            <div className='search-box'>
              <input
                id='search-input'
                placeholder='Поиск по объявлениям'
                className='search-input'
                type='text'
              />
              <button className='btn btn-primary'>
                <img
                  className='search-icon'
                  src='/img/search-icon.svg'
                  alt='Поиск'
                />
                <span className='search-btn-text'>Найти</span>
              </button>
            </div>
          </div>
        </section>
        <Outlet />
        
      </main>
    </>
  );
};

export default Layout;
