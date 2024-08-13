import insta from "../../assets/insta.png"
import beh from "../../assets/behance (2).png"
import lin from "../../assets/linkedin.png"


const Footer = () => {
    return(
    <section className=" bg-black  h-auto  xl:w-[80%] min-[1440px]:w-full z-10">
        <div className="py-10 md:py-16 xl:py-28 gap-10 flex flex-col xl:flex-row justify-center items-center">
            <div className="px-6 xl:px-0">
                <p className="text-primary font-medium text-sm mb-6">CONTACT ME</p>
                <p className="gif font-bold text-white text-6xl md:text-xxl">Let's</p>
                <p className="text-white font-bold text-6xl md:text-xxl">Work Together</p>
            </div>
            <div className="">
                <a href="mailto:Oguazuprecious@gmail.com"><button className="xl:mb-16 border text-white border-primary py-2 px-4 font-work-sans font-[400] text-sm rounded-full hover:bg-primary">GET IN TOUCH</button></a>
            </div>
        </div>
        <div className="py-16 bg-[#060606] font-work-sans font-[400] text-sm text-text flex flex-col md:flex-row items-center md:justify-around">
            <div className="flex items-center gap-2">
                <p className="">Socials |</p>
                <a target="_blank" href="https://www.linkedin.com/in/precious-oguazu"><img src={lin} className="h-4" alt="socials"/></a>
                <a target="_blank" href="https://www.behance.net/chidiogpreciou"><img src={beh} className="h-4" alt="socials"/></a>
                {/* <img src={insta} className="h-4" alt="socials"/> */}
            </div>
            <p className="hidden md:block">Copyright © 2022, <span className="text-primary">Precious</span> | All Right Reserved</p>
            <p className="md:hidden">Copyright © 2022, <span className="text-primary">Precious</span> |</p>
            <p className="md:hidden">All Right Reserved</p>
        </div>
    </section>
    );
}

export default Footer;