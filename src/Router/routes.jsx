import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";

const Router = () =>{
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Home/>} />

            </Route>
        )
    );
    return(<RouterProvider router={router}/>)
}

export default Router;