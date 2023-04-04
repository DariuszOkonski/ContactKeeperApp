import configText from '../../utils/cofigText';
import './Select.css';

interface SelectProps {
  name: string;
  labelText: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function Select({ name, labelText, onChange }: SelectProps) {
  return (
    <div className='select'>
      <label className='select__label'>{labelText}</label>
      <select className='select__change' name={name} onChange={onChange}>
        <option value={configText.select.options.professional}>
          {configText.select.options.professional}
        </option>
        <option value={configText.select.options.personal}>
          {configText.select.options.personal}
        </option>
      </select>
    </div>
  );
}

export default Select;
