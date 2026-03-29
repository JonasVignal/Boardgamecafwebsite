import { createBrowserRouter } from "react-router";
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

export const router = createBrowserRouter([
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
]);