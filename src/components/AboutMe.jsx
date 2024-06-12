import { Link } from "react-router-dom"
const AboutMe =()=> {
    return(
        <section className="bg-tertiary h-auto py-16 xl:p-28">
            <div className="flex flex-col space-y-10 xl:space-y-0 xl:flex-row px-4  justify-between items-center ">
                <div className="space-y-3 xl:w-[50%]">
                    <div className="text-primary flex w-full">
                        <span className="w-[14%] h-[2px] mt-[10px] mr-2 bg-primary"></span>
                        <p className="text-sm w-">ABOUT ME</p>
                    </div>
                    <p className="text-4xl font-bold ">Elevating user experiences through the power of insight-driven design...</p>
                </div>
                <div className="text-secondary font-work-sans font-[400] md:text-lg lg:text-sm xl:w-[40%] xl:pr-16">
                    <p className="mb-5">
                        As a user experience designer, I leverage UX research skills to design not just visually appealing solutions, but solutions that champion your users and drive your business forward. I am a UX designer poised to craft digital solutions that are purposeful and impactful.
                    </p>
                    <p className="mb-5">
                        At present, I am an integral part of the digital pioneer team (BI X) at Boehringer Ingelheim where we are continually creating cutting-edge healthcare solutions through a comprehensive process; from ideation to research, and finally, to a fully validated solution. Thriving in an environment that merges the agility of a start-up with an unwavering focus on innovation, I am deeply involved in every DesignOps and ResearchOps process and this experience and expertise, I plan to bring into every project
                    </p>
                    <Link to='/about' className=""> 
                        <div className="text-primary flex w-full">
                            <span className="w-[14%] h-[2px] mt-[10px] mr-2 bg-primary"></span>
                            <p className="font-[Poppins] text-sm w-">READ MORE</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default AboutMe