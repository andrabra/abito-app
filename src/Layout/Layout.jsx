import { Header } from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { cardArray } from '../constants';

const Layout = () => {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const filteredProducts = cardArray.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );

    setProducts(filteredProducts);
  };

  useEffect(() => {
    if (!search.trim()) {
      setProducts(cardArray);
    }
  }, [search]);

  return (
    <>
      <Header />

      <main className='main'>
        <section className='search'>
          <div className='container'>
            <form className='search-box'>
              <input
                id='search-input'
                placeholder='Поиск по объявлениям'
                className='search-input'
                type='text'
                value={search}
                onChange={handleSearch}
              />
              <button
                onClick={handleSearchSubmit}
                type='submit'
                className='btn btn-primary'
              >
                <img
                  className='search-icon'
                  src='/img/search-icon.svg'
                  alt='Поиск'
                />
                <span className='search-btn-text'>Найти</span>
              </button>
            </form>
          </div>
        </section>
        <Outlet context={{ products }} />
      </main>
    </>
  );
};

export default Layout;
