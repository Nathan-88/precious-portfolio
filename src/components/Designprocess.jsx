
const Designprocess =() => {
    return(
        <section className="py-12 px-8 xl:px-20 bg-tertiary">
            <div className="mb-2 w-full flex items-center justify-between">
                <h3 className="font-bold text-3xl xl:text-4xl">Design Process</h3>
                <p className="font-[400] tracking-widest text-[13px] pr-4">004</p>
            </div>
            <div className="h-[0.07rem] mb-4 bg-hrline"></div>
            <div className="flex flex-col xl:flex-row justify-between">
                <div className="mb-8 xl:mb-0 xl:w-[67%]">
                    <h4 className="text-hueblack font-bold text-[24px] md:text-3xl mb-4">Our E2E process supports us to break through digital healthcare innovations, striving for product market fit.</h4>
                    <p className="font-[400] text-secondary font-work-sans text-[15px] xl:w-[90%]">Although I can’t share details of the Vision Next project, this is a basic end-2-end process that guides BI X innovative process. At each stage, we pitch to the BI X team showing the required evidence that supports moving to the next phase, please note that any project at BI X, can be dropped at any stage if it fails to align with our business strategy or fails to provide the required evidence that supports the market, customers and available resources. BI X is a digital lab where we discover potential disruptive solutions. </p>
                </div>
                <div className="xl:w-[30%]">
                    <h4 className="text-hueblack font-bold text-[24px] md:text-[28px] mb-3">Highlights</h4>
                    <ul className="text-[22px] font-light list-disc marker:text-black pl-4 tracking-[0.02em]">
                        <li className="text-text"><span className="text-black">Adaptability:</span> to customer needs</li>
                        <li className="text-text"><span className="text-black">Desirability: </span> Products solves customer’s needs</li>
                        <li className="text-text"><span className="text-black">Feasibility: </span> Available resources</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Designprocess;