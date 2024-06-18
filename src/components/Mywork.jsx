import Procur from "../assets/Procurementcard.png"
import whitecard from "../assets/whitecard.png"
import bixx from "../assets/bixx.png"
import arrow from "../assets/arrow.png"
import { Link } from "react-router-dom"

const contents = [
    
    {link: "projects/procurement", img: Procur, date: "AUGUST 2022", h: "Procurement", text: "Enterprise spend management solution that helps business optimise their purchasing spend and sourcing needs"},
    {link: "projects/WhiteCollar", img: whitecard, date: "JULY 2020", h: "White Collar", text: "A job search digital solution built to connect job seekers to serious recruiters in simple steps"},
    {link: "https://www.bix-digital.com/", img: bixx, date: "FEB 2024", h: "Boehringer Ingelheim X", text: "An overview of my time and project so far working at BI X"},
]
const Mywork = () => {
    
    return(
        <section className="p-6 md:py-16 bg-white h-auto">
            <h2 className="text-primary font-bold text-center text-2xl font-[Poppins]">MY WORK</h2>
            <div className="grid grid-col-1 xl:grid-cols-3 gap-y-4  gap-x-2 mt-10">
                {contents.map((content, index) => (
                    <Link to={content.link}><div className="bg-card py-10 px-8 rounded-lg hover:shadow-md hover:scale-[1.01] transition hover:duration-500">
                    <div className="text-text flex flex-col justify-center items-center space-y-3">
                        <img src={content.img} alt="card image"/>
                        
                        <p className="font-medium text-sm text-text self-start">{content.date}</p>
                        <div className="h-[100px]">
                            <h4 className="self-start text-3xl font-bold mb-3 text-black">{content.h}</h4>
                            <p className="font-work-sans text-sm font-[400]">{content.text}</p>
                        </div>
                        
                    </div>
                    <img src={arrow} alt="arrow" className=""/>
                </div></Link>))}
            </div>
        </section>
    )
}

export default Mywork;