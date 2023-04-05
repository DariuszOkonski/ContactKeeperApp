import './NoElement.css';

function NoElement({ text }) {
  return (
    <div className='no-element'>
      <span>{text}</span>
    </div>
  );
}

export default NoElement;
