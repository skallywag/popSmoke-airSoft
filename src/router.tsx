import React from "react";
import HomePage from "./pages/homePage/HomePage";
import CreateGame from "./pages/createGame/CreateGame";
import {createBrowserRouter} from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/game/create",
        element: <CreateGame />,
    },
]);