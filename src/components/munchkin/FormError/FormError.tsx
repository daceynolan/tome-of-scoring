import cx from "classnames";
import Text from "components/core/Text/Text";
import { ComponentPropsWithoutRef } from "react";

function FormError({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <Text
      as="p"
      theme="munchkin-warning"
      className={cx(className)}
      size="small"
      {...props}
    />
  );
}

export default FormError;
