import './App.scss'
import '@mantine/core/styles.css';
import {BrowserRouter as Router} from "react-router-dom";
import {RouterProvider} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import SideNav from "./components/sideNav/SideNav";
import NavBar from "./components/navBar/NavBar"
import {router} from "./router";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Router>
                <SideNav/>
            </Router>
            <RouterProvider router={router}/>
        </div>

    )
}
export default App
