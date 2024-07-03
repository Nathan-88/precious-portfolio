const TeamProject =() => {
    return(
    <section  className="px-4 md:px-16 xl:px-32 py-16">
        <div className="grid gap-4 grid-cols-2 xl:grid-cols-3">
            <div  className="font-work-sans">
                <h3 className="text-3xl font-bold mb-4 font-Helvetica-Neue">Team</h3>
                <p className="text-hueblack font-semibold">UX DESIGNERS</p>
                <p className="text-hueblack">Oguazu Precious</p>
                <p className="text-hueblack ">Babatunde Odeyemi</p>
                <p className="text-hueblack">Victory Mokulu</p>
            </div>
            <div className="font-work-sans">
                <h3 className="text-3xl font-bold mb-4 font-Helvetica-Neue">My Role</h3>
                <p className="text-hueblack">Research plan</p>
                <p className="text-hueblack">User research sensitisation</p>
                <p className="text-hueblack">Facilitate research</p>
                <p className="text-hueblack">Research Analysis</p>
                <p className="text-hueblack">Competitive analysis</p>
                <p className="text-hueblack">UI design</p>
                <p className="text-hueblack">Prototyping</p>
            </div>
            <div className="col-span-2 xl:col-span-1 font-work-sans">
                <h3 className="text-3xl font-bold mb-4 font-Helvetica-Neue">Results</h3>
                <p className="text-hueblack mb-3">The research strategy becames an inspiration for each member of the team</p>
                <p className="text-hueblack mb-3">Uncovered qualitative insights that helped us validate existing data and test our hypothesis</p>
                <p className="text-hueblack">Synthesised data and streamlined our focus on what was relevant to the product</p>
            </div>
        </div>

        {/* project */}
        <div className="py-10">
            <h4 className="text-sm font-medium mb-5">PROJECT OVERVIEW</h4>
            <p className="text-2xl text-hueblack font-bold mb-3">White Collar tailors available jobs to job seekers, by utilising the data collected from users of white collar during sign-up & profile completion.</p>
            <p className="font-work-sans text-hueblack md:w-[90%]">This project sought to first understand the challenges of the users of a recruiting platform and then help the users of the platform apply for a job with ease.</p>
        </div>
        {/* Summary */}
        <div className="py-10 grid grid-cols-1 gap-6 xl:grid-cols-3">
            <div className="text-sm font-medium">
                <h2 className="">SUMMARY</h2>
            </div>
            <div className="mb-12">
                <h3 className="text-3xl font-semibold mb-3">The problem</h3>
                <div className="text-hueblack font-work-sans">
                    <p>First step was to understand the existing problem in the space. A report</p>
                    <p>theafricareport.com, shows an estimated 1.8m young people enter the job market annually, and some common challenges highlighted are </p>
                    <ul className="list-disc pl-4 marker:text-listcol">
                        <li>A surge of job applications for every job posted due to job scarcity</li>
                        <li>Due to these surges, most jobs are offered to applicants according to proximity</li>
                        <li>As a result, qualified candidates and jobs are starkly mismatched</li>
                        <li>High potential candidates remain invincible to recruiters due to a lack of job cancelling services like how to write effective CVs</li>
                    </ul>
                </div>
            </div>
            <div className="">
                <h3 className="text-3xl font-semibold mb-3">Research Obj.</h3>
                <ul className="font-work-sans list-disc pl-4 marker:text-listcol space-y-4 text-hueblack">
                    <li>Who are our target audience?</li>
                    <li>What are they trying to achieve with this solution?</li>
                    <li>Analyze and understand their challenges to improve the user experience and increase the impact of the solution</li>
                    <li>Learn more about their experience and  other existing solutions to improve functionality and usability</li>
                </ul>
            </div>
            <div className=""></div>
            <div className="">
                <h3 className="text-3xl font-semibold mb-3">Hypothesis</h3>
                <ul className="font-work-sans list-disc pl-4 marker:text-listcol space-y-2 text-hueblack">
                    <li>Who are our target audience?</li>
                    <li>What are they trying to achieve with this solution?</li>
                    <li>Analyze and understand their challenges to improve the user experience and increase the impact of the solution</li>
                    <li>Learn more about their experience and  other existing solutions to improve functionality and usability</li>
                </ul>
            </div>
            <div className="">
                <h3 className="text-3xl font-semibold mb-3">Research Insight</h3>
                <ul className="font-work-sans list-disc pl-4 marker:text-listcol space-y-2 text-hueblack">
                    <li>Who are our target audience?</li>
                    <li>What are they trying to achieve with this solution?</li>
                    <li>Analyze and understand their challenges to improve the user experience and increase the impact of the solution</li>
                    <li>Learn more about their experience and  other existing solutions to improve functionality and usability</li>
                </ul>
            </div>
        </div>

    </section>)
}
export default TeamProject;