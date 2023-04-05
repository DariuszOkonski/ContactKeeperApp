import './Input.css';

const Input = ({ type, name, labelText, value, onChange }) => {
  return (
    <div className='input'>
      <label className='input__label' htmlFor={name}>
        {labelText}
      </label>
      <input
        className='input__field'
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
