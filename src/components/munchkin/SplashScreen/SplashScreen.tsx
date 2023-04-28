import MainCharacter from "assets/munchkin/main-character.png";
import Urls from "constants/Urls";
import { Link } from "react-router-dom";

import Button from "../Button";

function SplashScreen() {
  return (
    <div className="flex items-center flex-col">
      <img className="w-2/3 mb-8" src={MainCharacter} alt="" />
      <Button as={Link} to={Urls.routes.configure}>
        New Game
      </Button>
    </div>
  );
}

export default SplashScreen;
