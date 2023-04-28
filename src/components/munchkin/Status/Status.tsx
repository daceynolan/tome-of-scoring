import "./status.css";

import cx from "classnames";
import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div"> & {
  theme: "warning" | "success";
};

const themeClassMap = {
  warning: "text-m-treasure-800 bg-m-treasure-100 border-m-treasure-200",
  success: "text-m-leaf-500 bg-m-leaf-100 border-m-leaf-200",
};

function Status({ className, theme, ...props }: Props) {
  return (
    <div
      className={cx(
        "border-2 rounded-lg text-xs p-2",
        themeClassMap[theme],
        className
      )}
      {...props}
    />
  );
}

export default Status;
