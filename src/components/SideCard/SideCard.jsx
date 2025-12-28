import './SideCard.css';

const SideCard = ({
    img = '/img/delivery.svg',
    title = 'Доставка',
    desc = 'Проверка при получении и возможность бесплатно вернуть товар',
}) => {
  return (
    <div className='content-side__list-item'>
      <div className='content-side__list-item--img'>
        <img src={img} alt={title} />
      </div>
      <div className='content-side__list-item--title'>
        <h5 className='content-side__list-item--title-heading'>{title}</h5>
      </div>
      <p className='content-side__list-item--desc'>
        {desc}
      </p>
    </div>
  );
};

export default SideCard;
