import './App.scss'
import {
    RouterProvider,
} from "react-router-dom";
import {router} from "./router";
import {CSSReset} from "@chakra-ui/react";

function App() {

  return (
    <div className="App">
        <CSSReset/>
        <RouterProvider router={router} />
    </div>
  )
}

export default App
