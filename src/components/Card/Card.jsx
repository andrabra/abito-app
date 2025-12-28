import './Card.css';

const Card = ({ img, title, price, location, date }) => {
  return (
    <a className='content-main__list-item' href='/product.html' target='_blank'>
      <div className='content-main__list-item--img'>
        <img src={img} alt={title} />
      </div>
      <div className='content-main__list-item--title'>
        <h5 className='content-main__list-item--title-heading'>{title}</h5>
      </div>
      <strong className='content-main__list-item--price'>{price}</strong>
      <span className='content-main__list-item--desc'>{location}</span>
      <span className='content-main__list-item--desc'>{date}</span>
    </a>
  );
};

export default Card;
