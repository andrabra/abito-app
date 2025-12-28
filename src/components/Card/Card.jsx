import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ id, img, title, price, location, date }) => {
  
  return (
    <Link className='card' to={`/product/${id}`}>
      <div className='card--img'>
        <img src={img} alt={title} />
      </div>
      <div className='card--title'>
        <h5 className='card--title-heading'>{title}</h5>
      </div>
      <strong className='card--price'>{price}</strong>
      <span className='card--desc'>{location}</span>
      <span className='card--desc'>{date}</span>
    </Link>
  );
};

export default Card;
