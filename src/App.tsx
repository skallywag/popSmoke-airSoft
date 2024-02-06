import './App.scss'
import {
    RouterProvider,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {router} from "./router";

function App() {

  return (
    <div className="App">
        <RouterProvider router={router} />
        <ToastContainer    toastStyle={{
            background: 'black',
            color: 'white',
        }}/>
    </div>
  )
}

export default App
