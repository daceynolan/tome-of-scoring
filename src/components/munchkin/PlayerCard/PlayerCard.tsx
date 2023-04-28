import "./playerCard.css";

import { ComponentPropsWithoutRef } from "react";

function PlayerCard({ children }: ComponentPropsWithoutRef<"div">) {
  return <div className="player-card mb-4 py-2">{children}</div>;
}

export default PlayerCard;
