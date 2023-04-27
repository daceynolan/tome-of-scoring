import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  theme?: "dice-miner";
};

const themeClassMap = {
  "dice-miner":
    "text-dm-aquamarine-400 font-dm-display border-dm-aquamarine-400 hover:bg-dm-aquamarine-400 hover:text-white focus:outline focus:outline-4 focus:outline-dm-topaz",
};

function Button({ className, onClick, theme = "dice-miner", ...props }: Props) {
  return (
    <button
      className={classNames(
        "border-2 rounded p-2 text-lg capitalize",
        themeClassMap[theme],
        className
      )}
      onClick={onClick}
      {...props}
    />
  );
}

export default Button;
