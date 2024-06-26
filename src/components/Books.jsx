import sprint from "../assets/IMG_3986.png"
import Enough from "../assets/IMG_3987.png"

const details = [
    {imglink: sprint, h3: "Design Sprint", p1: "How to solve big problems and test new ideas in 5 days", by: "By Jake Knapp", quote: 
                                <div className="bg-[#F4F4F4] opacity-[0.44]">
                                    <p className="font-[300] font-roboto text-[10.15px] leading-[13.53px] tracking-[0.34px] px-3 py-2">“Great innovation is built on existing ideas, repurposed with vision”</p>
                                </div>},
    {imglink: Enough, h3: "Just Enough Research", p1: "A book on user research ", by: "By Erika Hall", quote: <div className="bg-[#F4F4F4] opacity-[0.44]">
                                    <p className="font-[300] font-roboto text-[10.15px] leading-[13.53px] tracking-[0.34px] px-3 py-2">“You can optimise everything and still fail, because you have to optimise for the right things”</p>
                                </div>
        }
]
const Books = () => {
    return(
        <section className="h-auto bg-white py-20 px-5 md:px-12 xl:py-28">
            <div className="flex flex-col xl:flex-row justify-between items-center">
                <div className="xl:w-[30%] xl:pl-16 mb-5">
                    <p className="text-primary font-medium text-xs">LEARNINGS</p>
                    <p className="text-[30px] font-bold">Some of my</p> 
                    <p className="text-[30px] font-bold">Favourite reads</p>
                </div>
                <div className="xl:w-[65%] flex flex-col xl:flex-row justify-center gap-6 items-center">
                    {details.map((detail, index)=>(
                    <div key={index} className="bg-white xl:w-[50%] shadow-lg py-10 px-4 rounded-lg xl:h-[303px]">
                        <div className="flex gap-4 justify-center items-center">
                            <img className="xl:w-[30%]" src={detail.imglink}/>
                            <div className="xl:w-[60%]">
                                <h3 className="font-medium text-base mb-3 ">{detail.h3}</h3>
                                <div className="h-[75px]">
                                <p className="text-hueeblack xl:w-[82%] font-[400] font-roboto text-[13.9px]">{detail.p1}</p>
                                <p className="text-[#808080] text-[10px] mb-6">{detail.by}</p>
                                </div>
                                <h4 className="text-[11.58px] font-light mt-4 xl:mt-2 mb-2">MY TOP QUOTE</h4>
                                {detail.quote}
                                
                            </div>
                        </div>
                    </div>)
                )
                }
                </div>
                
                <div className=""></div>
            </div>
        </section>
    )
}
export default Books;