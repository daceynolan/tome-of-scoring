import Monster from "assets/munchkin/monster-404.png";
import Urls from "constants/Urls";
import { Link } from "react-router-dom";

import Button from "../Button";

const NotFoundPage = () => {
  return (
    <>
      <div className="page-not-found__section">
        <h3 className="text-center">Level 404</h3>
        <div className="font-bold text-xl text-center mb-4">
          Monster That Eats Your Page
        </div>
        <div className="page-not-found__error">
          He has the munchies and eats the page you are looking for. You must
          runaway and let him keep his treasure.
        </div>
      </div>
      <img className="w-2/3 m-auto" src={Monster} alt=""></img>
      <div className="my-6">
        <span className="page-not-found--bold font-bold italic">
          Bad Stuff:{" "}
        </span>
        You don't know where you are and you suffer from confusion. You are sent
        back home.
      </div>
      <Button as={Link} to={Urls.routes.munchkin}>
        Run Away
      </Button>
      <div className="page-not-found__footer font-bold flex justify-end mt-2.5">
        10 Treasures
      </div>
    </>
  );
};

export default NotFoundPage;
