import cx from "classnames";
import { LabelHTMLAttributes } from "react";

function Label({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={cx("block mb-2", className)} {...props} />;
}

export default Label;
