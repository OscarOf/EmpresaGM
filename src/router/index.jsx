import { createBrowserRouter } from "react-router-dom";
import CarShop from "../Pages/CarShop";
import Home from "../Pages/Home";
import Services from "../Pages/Services";

export const router = createBrowserRouter([
    {
        path: "/Home",
        element: <Home />
    },
    {
        path: "/Services",
        element: <Services />
    },
    {
        path: "/CarShop",
        element: <CarShop />
    },    
]);