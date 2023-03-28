import './AccountTitle.css';

interface AccountTitleProps {
  prefix: string;
  postfix: string;
}

const AccountTitle = ({ prefix, postfix }: AccountTitleProps) => {
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
