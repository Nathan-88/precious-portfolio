import { Link } from "react-router-dom";
import Copy from "./Copy";

const ProjectFooter = ({link, img1, text, img2}) => {
    return(
        <section className="bg-black pt-12 md:pt-12 h-auto">
            <div className="flex flex-col justify-center items-center  px-8 md:px-16 xl:px-24">
                <Link to={link}><button className="mb-16 border text-white border-whitecard py-2 px-4 font-work-sans font-[400] text-xs rounded-full hover:border-green-600">{text}</button></Link>

                <img src={img1} className="mb-16"/>

                <div className="flex flex-col mb-16 overflow-hidden items-center">
                    <Link to={link}><img src={img2} className="transition-transform transform hover:scale-110 duration-300 ease-in-out"/></Link>
                    <div className="h-[0.1rem] w-full md:w-[480px] bg-text"></div>
                </div>
            </div>
            <Copy/>
        </section>
    )
}
export default ProjectFooter;