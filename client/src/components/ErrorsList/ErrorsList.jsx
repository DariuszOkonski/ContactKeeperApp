import './ErrorsList.css';

function ErrorsList(props) {
  if (props.errors === undefined) return null;
  return (
    <div>
      {props.errors.map((error, index) => (
        <div className='errorsList' key={index}>
          {error.msg}
        </div>
      ))}
    </div>
  );
}

export default ErrorsList;
