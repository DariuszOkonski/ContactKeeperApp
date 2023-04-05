import './AccountTitle.css';

const AccountTitle = ({ prefix, postfix }) => {
  return (
    <div className='account-title'>
      <h1>
        <span className='account-title__prefix'>{prefix}</span>{' '}
        <span className='account-title__postfix'>{postfix}</span>
      </h1>
    </div>
  );
};

export default AccountTitle;
