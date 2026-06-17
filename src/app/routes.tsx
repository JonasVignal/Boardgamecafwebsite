import { createHashRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { BoardGames } from "./pages/BoardGames";
import { Categories } from "./pages/Categories";
import { GameDetail } from "./pages/GameDetail";
import { DnD } from "./pages/DnD";
import { DnDWithGM } from "./pages/DnDWithGM";
import { DnDWithoutGM } from "./pages/DnDWithoutGM";
import { VR } from "./pages/VR";
import { Prices } from "./pages/Prices";
import { Drinks } from "./pages/Drinks";
import { TableRates } from "./pages/TableRates";
import { PricesDnD } from "./pages/PricesDnD";
import { PricesGamemaster } from "./pages/PricesGamemaster";
import { OpeningHours } from "./pages/OpeningHours";
import { Map } from "./pages/Map";
import { About } from "./pages/About";
import { Directions } from "./pages/Directions";
import { FAQ } from "./pages/FAQ";
import { History } from "./pages/History";
import { Book } from "./pages/Book";
import { NotFound } from "./pages/NotFound";

import { Home as HomeEn } from "./pages/en/Home";
import { BoardGames as BoardGamesEn } from "./pages/en/BoardGames";
import { Categories as CategoriesEn } from "./pages/en/Categories";
import { GameDetail as GameDetailEn } from "./pages/en/GameDetail";
import { DnD as DnDEn } from "./pages/en/DnD";
import { DnDWithGM as DnDWithGMEn } from "./pages/en/DnDWithGM";
import { DnDWithoutGM as DnDWithoutGMEn } from "./pages/en/DnDWithoutGM";
import { VR as VREn } from "./pages/en/VR";
import { Prices as PricesEn } from "./pages/en/Prices";
import { Drinks as DrinksEn } from "./pages/en/Drinks";
import { TableRates as TableRatesEn } from "./pages/en/TableRates";
import { PricesDnD as PricesDnDEn } from "./pages/en/PricesDnD";
import { PricesGamemaster as PricesGamemasterEn } from "./pages/en/PricesGamemaster";
import { OpeningHours as OpeningHoursEn } from "./pages/en/OpeningHours";
import { Map as MapEn } from "./pages/en/Map";
import { About as AboutEn } from "./pages/en/About";
import { Directions as DirectionsEn } from "./pages/en/Directions";
import { FAQ as FAQEn } from "./pages/en/FAQ";
import { History as HistoryEn } from "./pages/en/History";
import { Book as BookEn } from "./pages/en/Book";
import { NotFound as NotFoundEn } from "./pages/en/NotFound";

export const router = createHashRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "board-games",
        Component: BoardGames,
      },
      {
        path: "board-games/categories",
        Component: Categories,
      },
      {
        path: "board-games/categories/:gameId",
        Component: GameDetail,
      },
      {
        path: "dnd",
        Component: DnD,
      },
      {
        path: "dnd/with-gm",
        Component: DnDWithGM,
      },
      {
        path: "dnd/without-gm",
        Component: DnDWithoutGM,
      },
      {
        path: "vr",
        Component: VR,
      },
      {
        path: "prices",
        Component: Prices,
      },
      {
        path: "prices/drinks",
        Component: Drinks,
      },
      {
        path: "prices/table-rates",
        Component: TableRates,
      },
      {
        path: "prices/dnd",
        Component: PricesDnD,
      },
      {
        path: "prices/gamemaster",
        Component: PricesGamemaster,
      },
      {
        path: "opening-hours",
        Component: OpeningHours,
      },
      {
        path: "opening-hours/map",
        Component: Map,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "about/directions",
        Component: Directions,
      },
      {
        path: "about/faq",
        Component: FAQ,
      },
      {
        path: "about/history",
        Component: History,
      },
      {
        path: "book",
        Component: Book,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
  {
    path: "/en",
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomeEn,
      },
      {
        path: "board-games",
        Component: BoardGamesEn,
      },
      {
        path: "board-games/categories",
        Component: CategoriesEn,
      },
      {
        path: "board-games/categories/:gameId",
        Component: GameDetailEn,
      },
      {
        path: "dnd",
        Component: DnDEn,
      },
      {
        path: "dnd/with-gm",
        Component: DnDWithGMEn,
      },
      {
        path: "dnd/without-gm",
        Component: DnDWithoutGMEn,
      },
      {
        path: "vr",
        Component: VREn,
      },
      {
        path: "prices",
        Component: PricesEn,
      },
      {
        path: "prices/drinks",
        Component: DrinksEn,
      },
      {
        path: "prices/table-rates",
        Component: TableRatesEn,
      },
      {
        path: "prices/dnd",
        Component: PricesDnDEn,
      },
      {
        path: "prices/gamemaster",
        Component: PricesGamemasterEn,
      },
      {
        path: "opening-hours",
        Component: OpeningHoursEn,
      },
      {
        path: "opening-hours/map",
        Component: MapEn,
      },
      {
        path: "about",
        Component: AboutEn,
      },
      {
        path: "about/directions",
        Component: DirectionsEn,
      },
      {
        path: "about/faq",
        Component: FAQEn,
      },
      {
        path: "about/history",
        Component: HistoryEn,
      },
      {
        path: "book",
        Component: BookEn,
      },
      {
        path: "*",
        Component: NotFoundEn,
      },
    ],
  },
]);