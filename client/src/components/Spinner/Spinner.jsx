import './Spinner.css';

function Spinner() {
  return (
    <div className='spinner'>
      <div className='spinner__img'>
        <img src={require('../../img/loading-gif.gif')} alt='spinner' />
      </div>
    </div>
  );
}

export default Spinner;
