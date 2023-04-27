import GameSelect from "components/core/GameSelect";
import DiceMiner from "components/dice-miner";
import Combat from "components/munchkin/Combat";
import ConfigureGame from "components/munchkin/ConfigureGame";
import CreatePlayer from "components/munchkin/CreatePlayer";
import EditPlayer from "components/munchkin/EditPlayer";
import Game from "components/munchkin/Game";
import Munchkin from "components/munchkin/Munchkin";
import NotFoundPage from "components/munchkin/NotFoundPage";
import SplashScreen from "components/munchkin/SplashScreen";
import Urls from "constants/Urls";
import language_de from "lang/de.json";
import language_en from "lang/en.json";
import language_es from "lang/es.json";
import language_fr from "lang/fr.json";
import { IntlProvider } from "react-intl";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const messages = {
  de: language_de,
  en: language_en,
  es: language_es,
  fr: language_fr,
};

// Get browser language without region
const language = navigator.language.split(/[-_]/)[0];

export default function TomeOfScoring() {
  return (
    <IntlProvider
      // @ts-expect-error
      messages={messages[language]}
      locale="en"
      defaultLocale="en"
    >
      <BrowserRouter>
        <Routes>
          <Route
            path={Urls.routes["game-select"]}
            index
            element={<GameSelect />}
          />
          <Route path={Urls.routes["dice-miner"]} element={<DiceMiner />} />
          <Route path={Urls.routes.munchkin} element={<Munchkin />}>
            <Route index element={<SplashScreen />} />
            <Route path={Urls.routes.configure} element={<ConfigureGame />} />
            <Route path={Urls.routes.game} element={<Game />} />
            <Route path={Urls.routes.combat} element={<Combat />} />
            <Route path={Urls.routes.editPlayer} element={<EditPlayer />} />
            <Route path={Urls.routes.CreatePlayer} element={<CreatePlayer />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </IntlProvider>
  );
}
