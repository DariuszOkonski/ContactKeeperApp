import { PROFESSIONAL } from '../../utils/constants';
import Button from '../Button/Button';
import './Card.css';

function Card(props) {
  const { id, name, email, phone, type, onDelete, onEdit } = props;

  const typeClass =
    type.toLowerCase() === PROFESSIONAL
      ? 'card__type card__type--success'
      : 'card__type card__type--primary';

  return (
    <div className='card'>
      <div className='card__left'>
        <h3 className='card__name'>{name}</h3>
        <p className='card__text'>
          <i className='fas fa-envelope-open'></i> {email}
        </p>
        <p className='card__text'>
          <i className='fas fa-phone'></i> {phone}
        </p>
        <Button
          clsName='btn btn-small btn-information mr-small'
          text='Edit'
          onClick={() => onEdit(id)}
        />
        <Button
          clsName='btn btn-small btn-danger'
          text='Delete'
          onClick={() => onDelete(id)}
        />
      </div>
      <div className='card__right'>
        <p className={typeClass}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </p>
      </div>
    </div>
  );
}

export default Card;
