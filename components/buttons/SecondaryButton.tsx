import { classNames } from '../../utils';

interface Props {
  text: string,
  disabled?: boolean,
  loading?: boolean,
  onClick?: () => void,
}

function SecondaryButton({
  text, onClick, disabled, loading,
}: Props) {
  return (
    <button
      type="button"
      disabled={!!disabled || !!loading}
      onClick={(!!loading || !!disabled) ? undefined : onClick}
      className={classNames('rounded-md flex bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2', (!!disabled && !loading) && 'opacity-50 cursor-not-allowed', !!loading && 'cursor-not-allowed')}
    >
      {!!loading && (
      <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
      )}
      {text}
    </button>
  );
}

export default SecondaryButton;
