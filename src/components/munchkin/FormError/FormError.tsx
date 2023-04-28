import cx from "classnames";
import { ComponentPropsWithoutRef } from "react";

function FormError({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cx("text-m-brick-500 text-sm", className)} {...props} />
  );
}

export default FormError;
