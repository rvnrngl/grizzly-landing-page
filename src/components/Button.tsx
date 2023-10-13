import { ReactNode } from "react";

type ButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
};

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex h-[35px] max-w-[205px] flex-shrink-0 items-center justify-center rounded-full bg-[#F47B20] px-4 text-base font-bold text-white lg:h-[60px] lg:px-7 lg:text-[18px] lg:leading-[21.78px]"
    >
      {children}
    </button>
  );
};

export default Button;
