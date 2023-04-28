import cx from "classnames";
import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  fluid?: boolean;
  ariaInvalid?: boolean;
};

function Input({ className, fluid, ariaInvalid, ...props }: Props) {
  return (
    <input
      aria-invalid={ariaInvalid}
      className={cx(
        "text-m-md-500 p-2 rounded-lg input border-2 border-m-mud-500 bg-transparent shadow shadow-gray-400",
        { "w-full": fluid },
        className
      )}
      {...props}
    />
  );
}

export default Input;
