import cx from "classnames";
import { LabelHTMLAttributes } from "react";

function Label({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className={cx("block mb-2 text-m-mud-500", className)} {...props} />
  );
}

export default Label;
