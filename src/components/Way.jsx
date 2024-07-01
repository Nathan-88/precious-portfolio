import sprint from "../assets/sprint.png"
const Way = () => {
    return(
        <section className="py-16 px-8 xl:px-20 bg-tertiary">
            <div className="mb-2 w-full flex items-center justify-between">
                <h3 className="font-bold text-3xl xl:text-4xl">Way of working</h3>
                <p className="font-[400] tracking-widest text-[13px] pr-4">005</p>
            </div>
            <div className="h-[0.07rem] mb-10 bg-hrline"></div>
            <div className="mb-10 xl:mb-16 flex flex-col xl:flex-row justify-between">
                <div className="mb-8 xl:mb-0 xl:w-[52%]">
                    <p className="font-[400] text-secondary text-sm font-work-sans">Boehringer Ingelheim offers a sustainable way of working that supports hybrid and remote. The vision next team has majority of its members locally located and comes into the office often. This allows us to work locally from the company on some days and when we are working remotely, tools like teams and Klaxoon is our best bet for collaborating and sharing</p>
                </div>
                <div className="xl:w-[31%]">
                    <p className="text-hueblack font-bold text-3xl xl:w-[80%]">Hybrid way of working</p>
                </div>
            </div>
            <div className="xl:w-[69%]">
                <img src={sprint} alt="sprint retro"/>
            </div>
        </section>
    )
}
export default Way;