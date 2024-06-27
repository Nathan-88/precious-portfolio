import fram from "../assets/Fram.png"
const Fun =()=> {
    return(
        <section className="py-16 px-8 xl:px-20 bg-white">
            <div className="mb-10">
                <div className="mb-2 w-full flex items-center justify-between">
                    <h3 className="font-bold text-3xl xl:text-4xl">The Fun part</h3>
                    <p className="font-[400] tracking-widest text-[13px] pr-4">008</p>
                </div>
                <div className="h-[0.07rem] bg-hrline"></div>
            </div>
            <div className="mb-16 xl:mb-28 flex flex-col xl:flex-row justify-between">
                <div className="mb-8 xl:mb-0 xl:w-[50%] text-secondary font-[400] text-sm">
                    <p className="">Although I have had the best time working on impactful projects that support the overall Boehringer Ingelheim’s vision of improving lives, I have also had the best time at company events, learning and travelling</p>
                </div>
                <div className="xl:w-[31%]">
                    <p className="font-bold text-secondary text-3xl xl:w-[97%]">The best kind of work gives you energy back</p>
                </div>
            </div>
            <div className="">
                <img src={fram} alt="pictures"/>
            </div>
        </section>
    )
}
export default Fun;