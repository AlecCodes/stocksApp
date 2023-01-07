//Import the loader
//Remember, the routes to show stocks should have a prop of "loader = {stockLoader}". 
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import Home from './Pages/Home'
import App from './App'
import Dashboard from "./Pages/Dashboard"
import About from "./Pages/About"
import Stock from "./Pages/Stock"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path ="/" element={<App/>}>
            <Route path = "" element={<Home/>}/>
            <Route path = "dashboard" element={<Dashboard/>}/>
            <Route path = "about" element={<About/>}/>
            <Route path = "stock/:symbol" element={<Stock/>}/>
        </Route>
    ) 
)

export default router