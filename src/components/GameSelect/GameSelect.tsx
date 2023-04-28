import Urls from "constants/Urls";
import { Link } from "react-router-dom";

export default function GameSelect() {
  return (
    <div>
      <ul>
        <li>
          <Link to={Urls.routes["dice-miner"]}>Dice Miner</Link>
        </li>
        <li>
          <Link to={Urls.routes.munchkin}>Munchkin</Link>
        </li>
      </ul>
    </div>
  );
}
