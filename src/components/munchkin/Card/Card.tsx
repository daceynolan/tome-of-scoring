import "./card.css";

import { ComponentPropsWithoutRef } from "react";

const Card = ({ children }: ComponentPropsWithoutRef<"div">) => {
  return (
    <div className="mt-6 rounded-3xl bg-m-mud-500 p-2.5 w-full max-w-sm">
      <div className="card__inner bg-m-mud-300 p-5">{children}</div>
    </div>
  );
};

export default Card;
