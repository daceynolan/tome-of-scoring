import StoneTexture from "assets/dice_miner/stone_texture.jpeg";
import Container from "components/core/Container/Container";
import Helmet from "react-helmet";

import ScoringGrid from "./ScoringGrid";
import Text from "./Text";

export default function DiceMiner() {
  return (
    <>
      <Helmet>
        <title>Dice Miner | Tome of Scoring</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Balthazar&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div
        className="p-4"
        style={{
          backgroundImage: `url(${StoneTexture})`,
        }}
      >
        <Container className="bg-white">
          <div className="bg-dm-aquamarine-100 pt-8 pb-4">
            <div className="border-dm-aquamarine-400 border-y-4 px-12 flex items-center space-x-8 py-1">
              <Text as="h1" size="large">
                Dice Miner
              </Text>
              <Text className="capitalize" theme="light" as="h2">
                Multi-player Score Sheet
              </Text>
            </div>
          </div>
          <ScoringGrid round={1} />
          <ScoringGrid round={2} />
          <ScoringGrid round={3} />
        </Container>
      </div>
    </>
  );
}
