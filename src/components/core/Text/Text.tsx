import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div"> & {
  as?: "h1" | "h2" | "div" | "p";
  theme?: "dm-light" | "dm-dark" | "munchkin-default" | "munchkin-warning";
  size?: "xs" | "small" | "default" | "medium" | "large";
};

const themeClassMap = {
  "dm-light": "text-white font-dm-display uppercase",
  "dm-dark": "text-dm-aquamarine-400 font-dm-display uppercase",
  "munchkin-default": "text-m-mud-500",
  "munchkin-warning": "text-m-brick-500",
};

const sizeClassMap = {
  xs: "text-sm",
  small: "text-base",
  default: "text-lg",
  medium: "text-2xl",
  large: "text-4xl",
};

export default function Text({
  as: T = "div",
  className,
  theme = "dm-dark",
  size = "default",
  ...props
}: Props) {
  return (
    <T
      className={classNames(
        themeClassMap[theme],
        className,
        sizeClassMap[size]
      )}
      {...props}
    />
  );
}
