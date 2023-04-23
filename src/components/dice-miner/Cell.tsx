import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";

export default function Cell({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return <div className={classNames("h-12", className)} {...props} />;
}
