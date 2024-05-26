import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import AboutLayout from "../layouts/AboutLayout";
import About from "../pages/About"
import ProcurementLayout from "../layouts/ProcurementLayout";
import Procurement from "../pages/Procurement";

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
            <Route path="projects" element={<ProcurementLayout/>}>
                <Route index element={<Procurement/>}/>
            </Route>
            </>
        )
    );
    return(<RouterProvider router={router}/>)
}

export default Router;