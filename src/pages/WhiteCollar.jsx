import laptop from "../assets/laptop.png"
import mobile from "../assets/mobile.png"
import vector from "../assets/Vector.png"

const WhiteItems =[
    {link: "#", name: "User research"},
    {link: "#", name: "UI design"},
    {link: "#", name: "Ux design"},
    {link: "#", name: "Prototyping"}
]


const WhiteCollar = () => {
    return(
        <section className="bg-violet-100">
            <div className="pt-28 pb-20 px-4 md:px-20 md:w-[80%] xl:w-full  xl:px-36 ">
                <p className="text-4xl xl:text-5xl xl:font-[400]">Can our digital job-</p>
                <p className="xl:w-[60%] text-4xl xl:text-5xl xl:font-[400] md:leading-snug ">search platforms be more convenient & resourceful?</p>
            </div>
            {/* whitecollar */}
            <div className="py-20 flex flex-col-reverse bg-black xl:flex-row xl:justify-between">
                <div className="xl:pl-36 xl:w-[55%] p-6">
                    <div className="flex mb-8">
                        <img src={vector}  alt="whitecollar"/>
                        <p className="pl-2 text-3xl text-white">WhiteCollar
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center xl:justify-start xl:w-[60%] text-text mb-8">
                        {WhiteItems.map((item, index) => (
                        <div key={index} className="border mb-4 mr-4 border-current py-2 px-4 xl:p-3 rounded-full">
                            <a href={item.link} className="p-2">{item.name}</a>
                        </div>))}
                    </div>
                    <div className="xl:w-[50%]">
                        <p className="text-justifyxl:text-center text-violet-100">
                            As part of my Internship with Stutern Accelerator, I was given the opportunity to work collaboratively on a digital application that connects job seekers to available jobs in simple steps; search, find and apply...
                        </p>
                    </div>
                </div>
                <div className="w-full flex  justify-end relative mb-16 xl:mb-0 xl:w-[45%]">
                    <img className="pl-4" src={laptop}/>
                    <img className="absolute w-[25%] xl:w-auto  -bottom-6 -left-1 xl:-bottom-12 md:left-10 xl:-left-20" src={mobile}/>
                </div>
            </div>
        </section>
    )
}
export default WhiteCollar;