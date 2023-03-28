import './Input.css';

interface InputProps {
  type: string;
  name: string;
  labelText: string;
}

const Input = ({ type, name, labelText }: InputProps) => {
  return (
    <div className='input'>
      <label className='input__label' htmlFor={name}>
        {labelText}
      </label>
      <input className='input__field' type={type} name={name} />
    </div>
  );
};

export default Input;
