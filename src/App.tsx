import './App.scss'
import '@mantine/core/styles.css';
import {BrowserRouter as Router} from "react-router-dom";
import {RouterProvider} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import NavBar from "./components/sideNav/SideNav";
import {router} from "./router";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar/>
            </Router>
            <RouterProvider router={router}/>
        </div>

    )
}
export default App
