import { MouseEventHandler } from "react";

interface Props {
  children: string | JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const StandardButton = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="outline-none border-none cursor-pointer px-6 py-3"
    >
      {children}
    </button>
  );
};
