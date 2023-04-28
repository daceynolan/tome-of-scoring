import "./status.css";

import cx from "classnames";
import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div"> & {
  theme?: "default" | "warning" | "success";
};

function Status({ className, theme = "default", ...props }: Props) {
  return (
    <div className={cx("status", `status--${theme}`, className)} {...props} />
  );
}

export default Status;
