const Learning = () => {
    return (
        <section className="py-16 px-8 xl:px-20 bg-tertiary">
            <div className="mb-3">
                <div className="mb-2 w-full flex items-center justify-between">
                    <h3 className="font-bold text-3xl xl:text-4xl">Learnings</h3>
                    <p className="font-[400] tracking-widest text-[13px] pr-4">009</p>
                </div>
                <div className="h-[0.07rem] bg-hrline"></div>
            </div>
            <div className="flex flex-col xl:flex-row justify-between mb-8 items-center">
                <div className="text-hueblack font-bold mb-8 xl:mb-0 text-[38px] xl:w-[33%]">
                    <p>Outcome and Retrospectives</p>
                </div>
                <div className="xl:w-[31%] text-hueblack">
                    <p className="mb-2 font-[500] text-xs">01</p>
                    <h4 className="mb-4 font-bold text-3xl">Document everything</h4>
                    <p className="font-work-sans text-sm font-[400]">With Klaxoon, details of individual work is kept transparent and for me, it makes it easier to refer back to the research done, changes made and why, and pending questions. This makes the process all the more exciting and collaborative</p>
                </div>
            </div>
            <div className="flex flex-col xl:flex-row justify-between mb-8 items-center">
                <div className="text-hueblack mb-8 xl:mb-0 xl:w-[55%]">
                    <p className="mb-2 font-[500] text-[13px]">02</p>
                    <h4 className="mb-4 font-bold text-3xl">Keep everyone in the loop</h4>
                    <p className="font-work-sans text-sm font-[400] w-[97%]">Working in a large company means many ongoing projects and siloed teams. I had to make an effort to get to know cross functional teams and ongoing projects. I also had to learn to be very vocal about the work I was doing to ensure everyone has an understanding of my work and proposed changes. I also had to learn to facilitate team feedback sessions, and learnt to be vocal both in small and large teams as required and this is an area, I keep working on everyday</p>
                </div>
                <div className="xl:w-[31%] text-hueblack">
                    <p className="mb-2 font-[500] text-[13px]">03</p>
                    <h4 className="mb-4 font-bold text-[28px]">User research is invaluable</h4>
                    <p className="font-work-sans text-sm font-[400]">Working on Vision Next helped me strengthen the need for every feature on a product to have a purpose, you don’t add details or feature that doesn’t support the end goal or is not validated with real user/expert insight</p>
                </div>
            </div>
            <div className="flex flex-col xl:flex-row justify-between mb-8 items-center">
                <div className="text-hueblack mb-8 xl:mb-0 xl:w-[55%]">
                    <p className="mb-2 font-[500] text-[13px]">04</p>
                    <h4 className="mb-4 font-bold text-3xl">Inter-cultural competence & Effective communication</h4>
                    <p className="font-work-sans text-sm font-[400] w-[97%]">BIX is a core international team with employees from different continents and my core team is no exception, having an international management training has been so helpful in learning cultural differences and how best to collaborate with different people from different cultures. Although english is the main spoken language in Boehringer Ingelheim, I had to intentionally learn to communicate in a clear way, keeping “who” my listeners are in mind, what is important to them in the message I am passing and what action/experience I desire from/for them</p>
                </div>
                <div className="xl:w-[31%] text-hueblack">
                    <p className="mb-2 font-[500] text-[13px]">05</p>
                    <h4 className="mb-4 font-bold text-[28px]">Timely prototypes</h4>
                    <p className="font-work-sans text-sm font-[400]">Different levels of visuals to support the project are needed depending on where in the project we are in. I had to learn to make use of storyboarding to concretise the user experience, learn to pay attention to user workflow and map the user journey. Quick prototyping are done as the occasion calls for it, Figma is never the first call of action</p>
                </div>
            </div>
        </section>
    )
}
export default Learning;