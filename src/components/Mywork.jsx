import Procur from "../assets/Procurementcard.png"
import whitecard from "../assets/whitecard.png"
import behance from "../assets/Behance.png"
import arrow from "../assets/arrow.png"
import { Link } from "react-router-dom"

const contents = [
    {link: "projects/procurement", img: Procur, date: "AUGUST 2022", h: "Procurement", text: "Enterprise spend management solution that helps business optimise their purchasing spend and sourcing needs"},
    {link: "projects/WhiteCollar", img: whitecard, date: "JULY 2020", h: "White Collar", text: "A job search digital solution built to connect job seekers to serious recruiters in simple steps"},
    {link: "#", img: behance, date: "2020-2021", h: "More projects", text: "Here I have some of my earliest projects that highlights a range of my problem solving approach"},
]
const Mywork = () => {
    return(
        <section className="p-6 md:p-16 bg-white h-auto">
            <h2 className="text-primary font-bold text-center text-2xl">MY WORK</h2>
            <div className="grid grid-col-1 xl:grid-cols-3 gap-6 mt-10">
                {contents.map((content, index) => (<Link to={content.link}><div className="bg-card p-10 rounded-lg hover:shadow-lg hover:scale-105 transition hover:duration-500">
                    <div className="text-secondary flex flex-col justify-center items-center space-y-3">
                        <img src={content.img} alt="card image"/>
                        <p className="">{content.date}</p>
                        <p className="text-3xl font-bold text-black">{content.h}</p>
                        <p className="">{content.text}</p>
                    </div>
                    <img src={arrow} alt="arrow" className=""/>
                </div></Link>))}
            </div>
        </section>
    )
}

export default Mywork;