import configText from '../../utils/cofigText';

function Button({ clsName, text, onClick }) {
  return (
    <input
      type={configText.input.type.button}
      className={clsName}
      value={text}
      onClick={onClick}
    />
  );
}

export default Button;
