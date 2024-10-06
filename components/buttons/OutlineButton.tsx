import { MouseEventHandler } from "react";

interface Props {
  children: string | JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const OutlineButton = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="outline-none border-none cursor-pointer px-4 py-2 border border-[var(--brand)] bg-transparent relative z-20 overflow-hidden transition-colors duration-200 rounded "
    >
      {children}
    </button>
  );
};
