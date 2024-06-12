import { Link } from "react-router-dom";
import procurem from "../../assets/PROCUREMENT.png"
import footerproc from "../../assets/footerprocur.png"
import Copy from "./Copy";

const ProjectFooter = ({link, img1, text, img2}) => {
    return(
        <section className="bg-black px-8 py-12 md:px-16 xl:px-24 md:py-12 h-auto">
            <div className="flex flex-col justify-center items-center">
                <Link to={link}><button className="mb-16 border text-white border-whitecard py-2 px-4 font-work-sans font-[400] text-xs rounded-full hover:border-green-600">{text}</button></Link>

                <img src={img1} className="mb-16"/>

                <div className="flex flex-col items-center">
                    <img src={img2} className=""/>
                    <div className="h-[0.1rem] w-full md:w-[480px] bg-text"></div>
                </div>
            </div>
            <Copy/>
        </section>
    )
}
export default ProjectFooter;