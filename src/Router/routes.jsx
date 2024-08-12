import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import AboutLayout from "../layouts/AboutLayout";
import About from "../pages/About"
import ProcurementLayout from "../layouts/ProcurementLayout";
import Procurement from "../pages/Procurement";
import WhiteCollarLayout from "../layouts/WhiteCollarLayout";
import WhiteCollar from "../pages/WhiteCollar";
import BixLayout from "../layouts/BixLayout";
import Bix from "../pages/Bix";
import PdfLayout from "../layouts/PdfLayout";
import Pdf from "../pages/Pdf";
import BixsubLayout from "../layouts/BixsubLayout";
import Bixsub from "../pages/Bixsub";


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
            <Route path="pdf" element={<PdfLayout/>}>
                <Route index element={<Pdf/>}/>
            </Route>
            <Route path="projects" element={<ProcurementLayout/>}>
                <Route index path="procurement" element={<Procurement/>}/>
            </Route>
            <Route path="projects" element={<WhiteCollarLayout/>}>
                <Route path="WhiteCollar" element={<WhiteCollar/>}/>
            </Route>
            <Route path="projects" element={<BixLayout/>}>
                <Route path="bix" element={<Bix/>}/>
            </Route>
            <Route path="projects" element={<BixsubLayout/>}>
                <Route path="bixsub" index element={<Bixsub/>}/>
            </Route>
            </>
        )
    );
    return(<RouterProvider router={router}/>)
}

export default Router;