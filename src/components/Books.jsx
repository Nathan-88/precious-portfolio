import sprint from "../assets/IMG_3986.png"
import Enough from "../assets/IMG_3987.png"

const details = [
    {imglink: sprint, h3: "Design Sprint", p1: "How to solve big problems and test new ideas in 5 days", by: "By Jake Knapp", quote: "“Great innovation is built on existing ideas, repurposed with vision”"},
    {imglink: Enough, h3: "Just Enough Research", p1: "A book on user research ", by: "By Erika Hall", quote: "“You can optimise everything and still fail, because you have to optimise for the right things” "}
]
const Books = () => {
    return(
        <section className="h-auto bg-white py-20 px-5 md:p-20 xl:py-36">
            <div className="flex flex-col xl:flex-row justify-between items-center">
                <div className="mb-5">
                    <p className="text-primary">LEARNINGS</p>
                    <p className="text-4xl font-bold py-3 xl:py-3">Some of my Favourite reads</p>
                </div>
                <div className="flex flex-col xl:flex-row justify-center gap-6 items-center">
                    {details.map((detail, index)=>(
                    <div className="bg-white shadow-lg py-10 px-4 rounded-lg xl:h-[303px]">
                        <div className="flex gap-4 justify-center items-center">
                            <img className="" src={detail.imglink}/>
                            <div className="p-2">
                                <h3 className="font-semibold text-lg mb-3 ">{detail.h3}</h3>
                                <div className="h-[75px]">
                                <p className="">{detail.p1}</p>
                                <p className="text-secondary text-[0.6rem] mb-6">{detail.by}</p>
                                </div>
                                <h4 className="text-md font-[400] mb-2">MY TOP QUOTE</h4>
                                <p className="bg-violet-100 font-light text-[0.6rem] px-3 py-2">{detail.quote}</p>
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