import { Link } from "react-router-dom";
import dig1 from "../assets/Groupbix1.png"
import dig2 from "../assets/dig2.png"
import dig3 from "../assets/discus3.png"
import dig4 from "../assets/testcard.png"
const Bixsub = () => {
    return(
        <section className="pt-6 lg:pt-10 px-8 xl:px-16">
            <Link to='/projects/bix'><p className="font-normal text-primary font-open-sans text-[16px] underline">Go back</p></Link>

            <div className="my-4 xl:my-8">
                <div className="mb-2 w-full ">
                    <h3 className="font-bold text-3xl tracking-wide">More details on research</h3>
                </div>
                <div className="h-[0.07rem] mb-6 bg-hrline"></div>
            </div>

            <section className="md:w-[51%]">
                <p className="mb-4 font-medium text-[#000000] text-xs">06</p>
                <p className="mb-3 font-bold text-3xl text-hueblack">User research</p>
                <p className="mb-3 text-hueblack font-medium text-xs">PROBLEM</p>
                <div className="text-secondary font-normal text-sm font-work-sans">
                    <p className="mb-3">A worldwide shortage of vets makes it necessary to speed up diagnostic procedures and at the same time make them as seamless as possible.</p>
                    <p className="">Because the target market where this user research was done has been dropped based on market insights gathered, I am able to show an overview of this research done at the discovery phase.</p>
                </div>
            </section>
            <section className="my-10 md:flex md:items-center">
                <div className="mb-6 xl:mb-10 md:pr-10">
                    <img src={dig1} alt="diagram"/>
                </div>
                <span className="hidden md:inline h-[300px] border-l-[1px] border-r-[1px]"></span>
                <div className="md:pl-10 xl:w-[40%]">
                    <p className="text-3xl text-hueblack font-bold">Our landscape focus is on a segment in this value chain</p>
                </div>
            </section>


            <section className="my-16 text-secondary space-y-6  md:flex md:justify-between">
                <div className="md:w-[55%]">
                    <div className="mb-4">
                        <h3 className="mb-2 font-semibold text-xs text-hueblack">WORKDONE</h3>
                        <p className="text-sm font-normal font-work-sans">We started out with defining our hypothesis collaboratively as a team. We prioritised our user research goals, and filled our research test card. This enabled me to create the interview guide for the user research. The user research was planned and conducted by myself and the co-designer independently</p>
                    </div>
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                        <div className="font-work-sans text-sm">
                            <div className="mb-12">
                                <p className="text-[#000000] mb-1">Focus of user research in Discovery</p>
                                <ul className="list-disc  space-y-1 pl-4 font-work-sans text-sm text-secondary">
                                    <li>What is our customers' unmet need and how are we addressing it</li>
                                    <li>Do we provide value to our users in the existing workflow?</li>
                                </ul>
                            </div>
                            <div className="">
                                <p className="text-[#000000] mb-1">Impact and financial opportunity</p>
                                <ul className="list-disc  space-y-1 pl-4 font-work-sans text-sm text-secondary">
                                    <li>Potential increase in sales of a drug</li>
                                    <li>Increasing competivity & enhancing positioning</li>
                                    <li>Scalable to other species of animals</li>
                                </ul>
                            </div>
                        </div>
                        <div className="">
                            <p className="text-[#000000] mb-1">6 Interviewed vets</p>
                            <ul className="list-disc pl-4 font-work-sans text-sm text-secondary">
                                <li>Small/ Medium(4) & Large(2) vet clinics</li>
                            </ul>
                            <p className="text-[#000000] mb-1">1 vet lab field visit</p>
                            <ul className="list-disc pl-4 space-y-1 font-work-sans text-sm text-secondary">
                                <li>Initial feasibility test of tool hardware with experts</li>
                                <li>Overall parasite diagnosis workflow understanding</li>
                            </ul>
                            <p className="text-[#000000] mb-1">3 kinds of experiments</p>
                            <ul className="list-disc  space-y-1 pl-4 font-work-sans text-sm text-secondary">
                                <li>Semi-structured interview - vets</li>
                                <li>Concept testing - vets</li>
                                <li>Screen mockup feedback - domain experts</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="md:w-[30%] md:pt-16">
                    <h3 className="mb-2 text-xs font-medium text-hueblack">NOTE</h3>
                    <p className="">We also visited the target market location and did more research on technical feasibility and concept testing. With the insights gathered, I  created the user journey map, highlighting the validated user workflow, challenges and opportunity.</p>
                </div>
            </section>
            <section className="mb-16 md:flex gap-10">
                <div className="">
                    <img src={dig2}/>
                </div>
                <div className="">
                    <img src={dig3}/>
                </div>
            </section>
            <section className="mb-10 md:flex md:justify-between">
                <div className="md:w-[30%]">
                    <div className="mb-10">
                        <h3 className="mb-2 font-medium text-xs text-hueblack">SOLUTION</h3>
                        <p className="text-text text-sm font-normal font-work-sans">A digital tool for vets to enhance the analysis of biological specimen samples</p>
                    </div>
                    <div className="mb-2">
                        <h3 className="mb-3 font-medium text-xs text-hueblack">SOLUTION CONCEPT AND FEEDBACK</h3>
                        <h4 className="text-text mb-2 text-sm font-normal font-work-sans">NEGATIVE</h4>
                        <p className="mb-2 text-text text-sm font-normal font-work-sans">A digital tool for vets to enhance the analysis of biological specimen samples</p>

                        <h4 className="text-text mb-2 text-sm font-normal font-work-sans">POSITIVE</h4>
                        <p className="text-text text-sm font-normal font-work-sans">Our proposed solution is a tool for precise & timely diagnosis which will support precision treatment</p>
                        <p className="text-text text-sm font-normal font-work-sans">Improved customer satisfaction and value for clinics</p>
                        <p className="text-text text-sm font-normal font-work-sans">In other countries, a new guideline has been presented that supports a demand for this solution</p>
                    </div>

                </div>
                <div className="">
                    <img src={dig4} alt="testcard" />
                </div>
            </section>
        </section>
    )
}

export default Bixsub;