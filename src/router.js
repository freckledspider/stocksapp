import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import App from './App';
import Main from './pages/main'
import Stocks from './pages/stocks';
import About from './pages/about';
import { stocksLoader } from "./loaders";
import Show from "./pages/show";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route 
            path="/" 
            element={<App/>}
        >
                <Route
                    path=''
                    element={<Main/>}
                />
                <Route 
                    path='stocks'
                    element={<Stocks/>}
                />
                <Route 
                    path='about'
                    element={<About/>}
                />
                <Route 
                    path='stocks/:symbol'
                    loader={stocksLoader}
                    element={<Show/>}
                />
        </Route>
    )
);

export default router;