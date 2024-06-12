const Takeaway = () => {
    return(
        <section className="bg-white px-8 py-12 md:px-16 xl:px-24 md:py-16 h-auto">
            <h3 className="font-bold text-4xl">My Key Takeaways</h3>

            <div className="py-10 grid grid-cols-1 gap-6 gap-x-24 xl:grid-cols-3">
            <div className="text-sm font-medium"></div>
            <div className="mb-3">
                <h3 className="text-base font-semibold mb-3">Even with constrains such as;</h3>
                <ul className="font-work-sans list-disc pl-4 text-sm marker:text-listcol space-y-3">
                    <li>Remote collaboration</li>
                    <li>Time factor</li>
                    <li>Different strengths of individuals</li>
                    <li>Individual opinions and wanting to be heard</li>
                </ul>
            </div>
            <div className="">
                <h3 className="text-base font-semibold mb-3">Against all odds we were able to;</h3>
                <ul className="font-work-sans list-disc pl-4 text-sm marker:text-listcol space-y-3">
                    <li>We utilised each individual's strength every step of the way; allowing each person with the required skill at each point to take the lead while others worked in support</li>
                    <li>Take everyone's idea, analyse it and prioritise what is important to the product and the users</li>
                </ul>
            </div>
            <div className=""></div>
            <div className="">
                <h3 className="text-base font-semibold mb-3">With all these, I learned that;</h3>
                <ul className="font-work-sans list-disc text-sm pl-4 marker:text-listcol space-y-2 ">
                    <li>It is important to understand your users and what makes their life less complex, then build a solution that solves their problems and not build what you think they want</li>
                    <li>Not to focus on the individual skill gap of the team but instead find ways to leverage everyone’s strength</li>
                </ul>
            </div>
            <div className="">
                <h3 className="text-base font-medium mb-3">What I do differently now;</h3>
                <ul className="font-work-sans list-disc pl-4 marker:text-listcol space-y-2 text-sm">
                    <li>Manage my time effectively and distribute it across project tasks with good balance as a core focus, not giving major time to just user research but just enough time, in order to allow room for creating great UI as well</li>
                    <li>Be More proactive and take the initiative to act on decisions made with the team instead of taking a back seat because the task wasn't assigned to me</li>
                </ul>
            </div>
        </div>

        </section>
    )
}
export default Takeaway;