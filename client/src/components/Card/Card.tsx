import Button from '../Button/Button';
import './Card.css';

function Card() {
  return (
    <div className='card'>
      <div className='card__left'>
        <h3 className='card__name'>Jill Johnson</h3>
        <p className='card__text'>
          <i className='fas fa-envelope-open'></i> jill@gmail.com
        </p>
        <p className='card__text'>
          <i className='fas fa-phone'></i> 111-111-111
        </p>
        <Button clsName='btn btn-small btn-information mr-small' text='Edit' />
        <Button clsName='btn btn-small btn-danger' text='Delete' />
      </div>
      <div className='card__right'>
        <p className='card__type card__type--primary'>Personal</p>
      </div>
    </div>
  );
}

export default Card;
