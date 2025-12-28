import Card from '../components/Card/Card';
import { cardArray, sideArray } from '../constants';
import SideCard from '../components/SideCard/SideCard';
import { useOutletContext } from 'react-router-dom';

export const Home = () => {
  const { products } = useOutletContext();

  return (
    <>
      <section className='content'>
        <div className='container'>
          <div className='content-box'>
            <div className='content-main'>
              <h2 className='content-main__title'>Рекомендации для вас</h2>
              <div className='content-main__list'>
              
                {products.length > 0 ? products.map((card) => (
                  <Card
                    key={card.id}
                    id={card.id}
                    img={card.img}
                    title={card.title}
                    price={card.price}
                    location={card.location}
                    date={card.date}
                  />
                ))
                :
                <h2>Товары не найдены</h2>
                }
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
    </>
  );
};
