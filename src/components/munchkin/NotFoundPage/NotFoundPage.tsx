import Monster from "assets/munchkin/monster-404.png";
import Text from "components/core/Text/Text";
import Urls from "constants/Urls";
import { Link } from "react-router-dom";

import Button from "../Button";

function NotFoundPage() {
  return (
    <>
      <div className="page-not-found__section">
        <Text
          as="h1"
          theme="munchkin-default"
          className="text-center"
          size="small"
        >
          Level 404
        </Text>
        <Text
          theme="munchkin-default"
          size="medium"
          className="font-bold text-center mb-4"
        >
          Monster That Eats Your Page
        </Text>
        <Text as="p" theme="munchkin-default" size="small">
          He has the munchies and eats the page you are looking for. You must
          runaway and let him keep his treasure.
        </Text>
      </div>
      <img className="m-auto w-48" src={Monster} alt=""></img>
      <Text
        as="p"
        size="small"
        theme="munchkin-default"
        className="my-4 font-normal"
      >
        <span className="italic">Bad Stuff: </span>
        You don't know where you are and you suffer from confusion. You are sent
        back home.
      </Text>
      <Button as={Link} to={Urls.routes.munchkin} fluid>
        Run Away
      </Button>
      <Text
        as="p"
        size="small"
        theme="munchkin-default"
        className="font-bold flex justify-end mt-2.5"
      >
        10 Treasures
      </Text>
    </>
  );
}

export default NotFoundPage;
