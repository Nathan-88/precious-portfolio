import insta from "../../assets/insta.png"
import beh from "../../assets/behance (2).png"
import lin from "../../assets/linkedin.png"
const Copy = () => {
    return(
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
    )
}
export default Copy;