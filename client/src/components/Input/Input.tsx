import './Input.css';

interface InputProps {
  type: string;
  name: string;
  labelText: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, name, labelText, value, onChange }: InputProps) => {
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
