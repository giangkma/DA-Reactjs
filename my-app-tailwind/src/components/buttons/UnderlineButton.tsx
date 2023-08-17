import React from "react";

interface IProps {
  title?: string;
  onClick: () => void;
}

export const UnderlineButton = ({ title = "View More", onClick }: IProps) => {
  return (
    <button onClick={onClick} className="md:mt-9 sm:mt-6 mt-4">
      <p className="md:text-2xl sm:text-lg text-sm font-medium underline sm:underline-offset-[18px] underline-offset-8">
        {title}
      </p>
    </button>
  );
};
