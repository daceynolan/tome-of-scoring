import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div"> & {
  as?: "h1" | "h2" | "div";
  theme?: "light" | "dark";
  size?: "default" | "large";
};

const themeClassMap = {
  light: "text-white",
  dark: "text-dm-aquamarine-400",
};

const sizeClassMap = {
  default: "text-lg",
  large: "text-4xl",
};

export default function Text({
  as: T = "div",
  className,
  theme = "dark",
  size = "default",
  ...props
}: Props) {
  return (
    <T
      className={classNames(
        "font-dm-display uppercase",
        themeClassMap[theme],
        className,
        sizeClassMap[size]
      )}
      {...props}
    />
  );
}
