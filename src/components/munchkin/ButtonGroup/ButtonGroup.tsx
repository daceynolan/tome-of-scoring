import "./buttonGroup.css";

import { ComponentPropsWithoutRef } from "react";

function ButtonGroup({ ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className="button-group flex w-100% justify-center" {...props} />;
}

export default ButtonGroup;
