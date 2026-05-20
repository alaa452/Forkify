import { createBrowserRouter } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";
import MainLayout from "./layout/MainLayout";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import Pizza from "./components/pizza/Pizza";
import Carrot from "./components/carrot/Carrot";
import Pasta from "./components/pasta/Pasta";
import AboutUs from "./components/aboutUs/AboutUs"
import SubscriptionPolicy from "./components/SubscriptionPolicy/SubscriptionPolicy";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [{
            index: true,
            element: <Home />
        },
        {
            path: "/pizza",
            element: <Pizza />
        },
        {
            path: "/Carrot",
            element: <Carrot />
        },
        {
            path: "/Pasta",
            element: <Pasta />
        },
        {
            path: "/AboutUs",
            element: <AboutUs />
        },
        {
            path: "/SubscriptionPolicy",
            element: <SubscriptionPolicy />
        }]
    }

]);

export default router