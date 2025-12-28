import './Card.css';

const Card = ({ img, title, price, location, date }) => {
  return (
    <a className='card' href='/product.html' target='_blank'>
      <div className='card--img'>
        <img src={img} alt={title} />
      </div>
      <div className='card--title'>
        <h5 className='card--title-heading'>{title}</h5>
      </div>
      <strong className='card--price'>{price}</strong>
      <span className='card--desc'>{location}</span>
      <span className='card--desc'>{date}</span>
    </a>
  );
};

export default Card;
