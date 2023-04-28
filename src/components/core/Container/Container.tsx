import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div"> & {
  size?: "small" | "default";
};

const sizeClassMap = {
  small: "max-w-sm",
  default: "max-w-3xl",
};

export default function Container({
  className,
  size = "default",
  ...props
}: Props) {
  return (
    <div
      className={classNames(" mx-auto", sizeClassMap[size], className)}
      {...props}
    />
  );
}
