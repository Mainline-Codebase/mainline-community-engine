interface Props {
  text: string,
  onClick?: () => void,
}

function SecondaryButton({ text, onClick }: Props) {
  return (
    <>
      {/* <button
        type="button"
        className="rounded bg-white/10 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-white/20"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded bg-white/10 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
      >
        Button text
      </button>
      <button
        type="button"
        className="rounded-md bg-white/10 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
      >
        Button text
      </button> */}
      <button
        type="button"
        onClick={onClick}
        className="rounded-md bg-indigo-600/100 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600/90"
      >
        {text}
      </button>
      {/* <button
        type="button"
        className="rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
      >
        Button text
      </button> */}
    </>
  );
}

export default SecondaryButton;
