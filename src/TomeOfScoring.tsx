import GameSelect from "components/core/GameSelect";
import DiceMiner from "components/dice-miner";
import Retrograde from "components/retrograde";
import Urls from "constants/Urls";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function TomeOfScoring() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={Urls.routes["game-select"]}
          index
          element={<GameSelect />}
        />
        <Route path={Urls.routes["dice-miner"]} element={<DiceMiner />} />
        <Route path={Urls.routes.retrograde} element={<Retrograde />} />
      </Routes>
    </BrowserRouter>
  );
}
