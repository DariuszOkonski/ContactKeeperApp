import configText from '../../utils/cofigText';

interface ButtonProps {
  clsName: string;
  text: string;
  onClick?: (e: any) => void;
}

function Button({ clsName, text, onClick }: ButtonProps) {
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
