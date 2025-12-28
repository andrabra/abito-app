import { Header } from '../components/Header/Header';
import { useParams } from 'react-router-dom';
import { cardArray } from '../constants';

export const Product = () => {
  const { id } = useParams();
  const foundProduct = cardArray.find((card) => card.id === Number(id));

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
              <div className='content-product'>
                <div className='content-product__left'>
                  <h2 className='content-product__title'>
                    {foundProduct.title}
                  </h2>
                  <div className='content-product__image'>
                    <img src={foundProduct.img} alt={foundProduct.title} />
                  </div>
                  <p className='content-product__description'>
                    {foundProduct.desc}
                  </p>
                </div>
                <div className='content-product__right'>
                  <h2 className='content-product__price'>
                    {foundProduct.price}
                  </h2>
                  <button className='btn btn-primary btn-large'>
                    Показать телефон
                  </button>
                </div>
              </div>
              <div className='content-side'>
                <h3 className='content-side__title'>Сервисы и услуги</h3>
                <div className='content-side__box'>
                  <div className='content-side__list'>
                    <div className='content-side__list-item'>
                      <div className='content-side__list-item--img'>
                        <img src='./img/delivery.svg' alt='Доставка' />
                      </div>
                      <div className='content-side__list-item--title'>
                        <h5 className='content-side__list-item--title-heading'>
                          Доставка
                        </h5>
                      </div>
                      <p className='content-side__list-item--desc'>
                        Проверка при получении и&nbsp;возможность бесплатно
                        вернуть товар
                      </p>
                    </div>
                    <div className='content-side__list-item'>
                      <div className='content-side__list-item--img'>
                        <img src='./img/car.svg' alt='Автотека' />
                      </div>
                      <div className='content-side__list-item--title'>
                        <h5 className='content-side__list-item--title-heading'>
                          Автотека
                        </h5>
                      </div>
                      <p className='content-side__list-item--desc'>
                        Отчёт с&nbsp;историей авто: пробег, владельцы, сведения
                        о залоге, ДТП и&nbsp;ремонтах
                      </p>
                    </div>
                    <div className='content-side__list-item'>
                      <div className='content-side__list-item--img'>
                        <img src='./img/house.svg' alt='Дом' />
                      </div>
                      <div className='content-side__list-item--title'>
                        <h5 className='content-side__list-item--title-heading'>
                          Онлайн-бронирование жилья
                        </h5>
                      </div>
                      <p className='content-side__list-item--desc'>
                        Посуточная аренда квартир и&nbsp;домов: большой выбор
                        вариантов для поездок по&nbsp;России
                      </p>
                    </div>
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
