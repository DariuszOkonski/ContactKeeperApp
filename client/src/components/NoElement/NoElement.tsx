import './NoElement.css';

interface NoElementProps {
  text: string;
}

function NoElement({ text }: NoElementProps) {
  return (
    <div className='no-element'>
      <span>{text}</span>
    </div>
  );
}

export default NoElement;
