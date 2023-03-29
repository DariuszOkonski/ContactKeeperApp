import './ErrorsList.css';

interface ErrorsListProps {
  errors: any[];
}

function ErrorsList(props: ErrorsListProps) {
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
