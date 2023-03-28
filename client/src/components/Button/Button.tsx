import configText from '../../utils/cofigText';

interface ButtonProps {
  clsName: string;
  text: string;
}

function Button({ clsName, text }: ButtonProps) {
  return (
    <input
      type={configText.input.type.button}
      className={clsName}
      value={text}
    />
  );
}

export default Button;
