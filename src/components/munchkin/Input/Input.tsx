import "./Input.css";

import cx from "classnames";
import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  fluid?: boolean;
};

function Input({ className, fluid, ...props }: Props) {
  return (
    <input
      className={cx("input", { "input--fluid": fluid }, className)}
      {...props}
    />
  );
}

export default Input;
