import "./buttonGroup.css";

import { ComponentPropsWithoutRef } from "react";

const ButtonGroup = ({ ...props }: ComponentPropsWithoutRef<"div">) => {
  return <div className="button-group inline-flex" {...props} />;
};

export default ButtonGroup;
