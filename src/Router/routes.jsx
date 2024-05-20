import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import AboutLayout from "../layouts/AboutLayout";
import About from "../pages/About"

const Router = () =>{
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Home/>} />
            </Route>
            <Route path="about" element={<AboutLayout/>}>
                <Route index element={<About/>}/>
            </Route>
            </>
        )
    );
    return(<RouterProvider router={router}/>)
}

export default Router;