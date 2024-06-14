import { Link } from "react-router-dom";
import insta from "../../assets/insta.png"
import beh from "../../assets/behance (2).png"
import lin from "../../assets/linkedin.png"
import Copy from "./Copy";

const Footer = () => {
    return(
    <section className="-mt-[7px] bg-black px-8 py-6 md:px-16 h-auto  xl:w-[80%] z-10">
        <div className="p-4 py-10 xl:py-28 xl:px-28 gap-10 flex flex-col xl:flex-row justify-center xl:items-center">
            <div className="">
                <p className="text-primary text-sm mb-6">CONTACT ME</p>
                <p className="gif font-bold text-white text-7xl">Let's</p>
                <p className="text-white font-bold text-7xl">work Together</p>
            </div>
            <div className="">
                <Link to="/about"><button className="xl:mb-16 border text-white border-primary py-2 px-4 font-work-sans font-[400] text-sm rounded-full hover:border-green-600">GET IN TOUCH</button></Link>
            </div>
        </div>
        <div className="mt-28 bg-black font-work-sans font-[400] text-sm text-text flex flex-col md:flex-row items-center md:justify-around">
            <div className="flex gap-2">
                <p className="">Socials |</p>
                <img src={lin} className="h-4" alt="socials"/>
                <img src={beh} className="h-4" alt="socials"/>
                <img src={insta} className="h-4" alt="socials"/>
            </div>
            <p className="hidden md:block">Copyright © 2022, <span className="text-primary">Precious</span> | All Right Reserved</p>
            <p className="md:hidden">Copyright © 2022, <span className="text-primary">Precious</span> |</p>
            <p className="md:hidden">All Right Reserved</p>
        </div>
    </section>
    );
}

export default Footer;