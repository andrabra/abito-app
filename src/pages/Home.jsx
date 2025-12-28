import { Header } from '../components/Header/Header';
import Card from '../components/Card/Card';
import { cardArray, sideArray } from '../constants';
import SideCard from '../components/SideCard/SideCard';

export const Home = () => {
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

        <section className='content'>
          <div className='container'>
            <div className='content-box'>
              <div className='content-main'>
                <h2 className='content-main__title'>Рекомендации для вас</h2>
                <div className='content-main__list'>
                  {cardArray.map((card) => (
                    <Card
                      key={card.id}
                      id={card.id}
                      img={card.img}
                      title={card.title}
                      price={card.price}
                      location={card.location}
                      date={card.date}
                    />
                  ))}
                </div>
              </div>

              <div className='content-side'>
                <h3 className='content-side__title'>Сервисы и услуги</h3>
                <div className='content-side__box'>
                  <div className='content-side__list'>
                    {sideArray.map((card) => (
                      <SideCard
                        key={card.id}
                        img={card.img}
                        title={card.title}
                        desc={card.desc}
                      />
                    ))}
                  </div>
                </div>
                <div className='divider'></div>

                <div className='content-side__footer'>
                  <p>© ООО «Абито», 2011–2021</p>
                  <a href='#!'>Политика конфиденциальности</a>
                  <a href='#!'>Обработка данных</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
