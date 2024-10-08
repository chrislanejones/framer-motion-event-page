import { MouseEventHandler } from "react";

interface Props {
  children: string | JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const StandardButton = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="text-2xl outline-none border-none cursor-pointer px-6 py-3 relative z-20 overflow-hidden transition-opacity duration-200 standardButton hover:opacity-90"
    >
      {children}
    </button>
  );
};
