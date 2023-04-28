import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";

function Button({
  className,
  onClick,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={classNames(
        "border-2 rounded p-2 text-lg capitalize text-dm-aquamarine-400 font-dm-display border-dm-aquamarine-400 hover:bg-dm-aquamarine-400 hover:text-white focus:outline focus:outline-4 focus:outline-dm-topaz",
        className
      )}
      onClick={onClick}
      {...props}
    />
  );
}

export default Button;
