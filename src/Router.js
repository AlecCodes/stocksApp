//Import the loader
//Remember, the routes to show stocks should have a prop of "loader = {stockLoader}". 
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import Home from './Pages/Home'
import App from './App'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path ="/" element={<App/>}>
        </Route>
    ) 
)

export default router