import whiteman from "../assets/whiteman.png"
const Generalrespon = () => {
    return(
        <section className="bg-white pt-12 pb-20 px-8 xl:px-20">
            <div className="w-full flex items-center justify-between">
                <h3 className="font-bold text-3xl xl:text-4xl">General responsibilities</h3>
                <p className="font-[400] tracking-widest text-[13px]">003</p>
            </div>
            <div className="h-[0.07rem] bg-hrline"></div>
            <div className="flex flex-col mb-10 xl:flex-row items-center justify-between">
                <div className="mb-8 xl:mb-0 xl:w-[63%]">
                    <img src={whiteman} alt="co-workers"/>
                </div>
                <div className="xl:w-[31%]">
                    <h4 className="font-bold text-3xl mb-6">Overview & Responsibilities</h4>
                    <p className="text-sm font-work-sans text-secondary font-[400] xl:w-[94%]">As a UX Designer at BI X, you are expected to work cross-functionally, supporting with your expertise in user research & design. Your job also doesn’t end with your core projects. You also get to support other teammates on task that aligns with the overall objective </p>
                </div>
            </div>
            <div className="flex flex-col mb-8 xl:flex-row items-center justify-between">
                <div className="mb-8 xl:mb-0 xl:w-[65%]">
                    <h4 className="font-500 text-[13px] mb-4">01</h4>
                    <h4 className="font-bold mb-4 text-3xl text-hueblack">Gaining Context</h4>
                    <p className="text-sm xl:w-[80%] font-[400] text-secondary font-work-sans">I started off the vision next project by first exploring the market research done for the project and then setting up 1:1 calls with the product owner and my co designer to get better clarity on the problem space and intended solution.</p>
                </div>
                <div className="xl:w-[31%]">
                    <h4 className="font-500 text-[13px] mb-4">02</h4>
                    <h4 className="font-bold mb-4 text-3xl text-hueblack">Interfacing with team</h4>
                    <p className="text-sm font-[400] text-secondary font-work-sans ">Because I joined the team at the discovery phase, the next step was to set up our team call to define our business model Canva, value proposition, and backlog of jobs to be done.</p>
                </div>
            </div>
            <div className="flex flex-col mb-8 xl:flex-row items-center justify-between">
                <div className="mb-8 xl:mb-0 xl:w-[65%]">
                    <h4 className="font-500 text-[13px] mb-4">03</h4>
                    <h4 className="font-bold mb-4 text-3xl text-hueblack">Designing</h4>
                    <p className="text-sm xl:w-[80%] text-secondary font[400] font-work-sans">At this stage, we have defined our user task and prioritized flow features with the team. I am currently designing the user In-app guide for this solution. This phase has constantly required us to have touch points with the team, and each other in order to share learnings and feedback. I have also organized expert design reviews with vet techs and other internal designers; learning and iterating as we go.</p>
                </div>
                <div className="xl:w-[31%]">
                    <h4 className="font-500 text-[13px] mb-4">04</h4>
                    <h4 className="font-bold mb-4 text-3xl text-hueblack">Design system</h4>
                    <p className="text-sm font-[400] text-secondary font-work-sans ">As a designer at BI X, it is paramount that you are able to use and maintain the existing design system for consistency and standard and this I do effortlessly</p>
                </div>
            </div>
            <div className="flex flex-col mb-8 xl:flex-row justify-between">
                <div className="mb-8 xl:mb-0 xl:w-[65%]">
                    <h4 className="font-500 text-[13px] mb-4">05</h4>
                    <h4 className="font-bold mb-4 text-3xl text-hueblack">User research</h4>
                    <p className="text-sm xl:w-[80%] font[400] text-secondary font-work-sans">Every projects in BI X is research led and heavy and this project is no exception. For the discovery phase, we focused on understanding the vet workflow, test our concept with users and market research. The user research was planned and conducted by myself and the co-designer independently. Insights gathered was analysed on Dovetail collaboratively and the summary of the findings informed a lot of the next steps</p>
                </div>
                <div className="xl:w-[31%]">
                    <h4 className="font-500 text-[13px] mb-4">06</h4>
                    <h4 className="font-bold mb-4 text-3xl text-hueblack">Supporting other teams & projects</h4>
                    <p className=" text-sm font[400] text-secondary font-work-sans ">Asides my core project, I still get the opportunity to support my team mates on other things that contributed to the overall goal of the UX community and company. I supported the research team to design the Re-ops In-site page that serves as the one source of truth for all things research. </p>
                </div>
            </div>
        </section>
    )
}
export default Generalrespon;