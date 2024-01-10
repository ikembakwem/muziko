interface Props extends React.ComponentProps<"button"> {
  isOpen: boolean;
}

export const MenuButton = ({ isOpen, ...buttonProps }: Props) => {
  return (
    <button
      {...buttonProps}
      className="inline-flex items-center justify-center h-11 w-11"
    >
      <span className="block relative w-5 h-5">
        <span
          className={`bg-white h-[2px] w-5 left-0 absolute transition-transform duration-[.1806s] ease-[cubic-bezier(.04,.04,.12,.96)] ${
            isOpen
              ? "top-[10px] translate-y-0 rotate-[135deg]"
              : "top-[9px] -translate-y-1"
          }`}
        ></span>
        <span
          className={`bg-white h-[2px] w-5 left-0 absolute transition-transform duration-[.1806s] ease-[cubic-bezier(.04,.04,.12,.96)] ${
            isOpen
              ? "top-[10px] translate-x-0 -rotate-[135deg]"
              : "top-[11px] translate-y-1"
          }`}
        ></span>
      </span>
    </button>
  );
};
