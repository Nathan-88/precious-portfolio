import insta from "../../assets/insta.png"
import beh from "../../assets/behance (2).png"
import lin from "../../assets/linkedin.png"
const Copy = () => {
    return(
        <div className="mt-28 bg-black font-work-sans font-[400] text-sm text-text flex justify-around">
            <div className="flex gap-2">
                <p className="">Socials |</p>
                <img src={lin} className="h-4" alt="socials"/>
                <img src={beh} className="h-4" alt="socials"/>
                <img src={insta} className="h-4" alt="socials"/>
            </div>
            <p className="">Copyright © 2022, <span className="text-primary">Precious</span> | All Right Reserved</p>
        </div>
    )
}
export default Copy;