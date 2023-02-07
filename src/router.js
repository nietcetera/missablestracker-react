import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./view/Home";
import GameDetail from "./view/GameDetail";
import GamesList from "./view/GamesList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/games",
        element: <GamesList />,
      },
      {
        path: "/games/:gameId",
        element: <GameDetail />,
      },
    ],
  },
]);

export default router;
