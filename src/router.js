import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import App from './App';
import Main from './components/main'
import Stocks from './components/stocks';
import About from './components/about';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route 
            path="/" 
            element={<App/>}
        >
                <Route
                    path='/'
                    element={<Main/>}
                />
                <Route 
                    path='/'
                    element={<Stocks/>}
                />
                <Route 
                    path='/'
                    element={<About/>}
                />
        </Route>
    )
);

export default router;