import configText from '../../utils/cofigText';
import './Select.css';

function Select({ name, labelText, onChange, value }) {
  return (
    <div className='select'>
      <label className='select__label'>{labelText}</label>
      <select
        className='select__change'
        value={value}
        name={name}
        onChange={onChange}
      >
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
