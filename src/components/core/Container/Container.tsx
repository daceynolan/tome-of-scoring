import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";

export default function Container({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={classNames("max-w-3xl mx-auto", className)} {...props} />
  );
}
