import "./card.css";

import Container from "components/core/Container/Container";
import { ComponentPropsWithoutRef } from "react";

function Card({ children }: ComponentPropsWithoutRef<"div">) {
  return (
    <Container
      className="rounded-3xl bg-m-mud-500 mt-6 p-2.5 w-full"
      size="small"
    >
      <div className="card__inner bg-m-mud-300 py-6 px-4">{children}</div>
    </Container>
  );
}

export default Card;
