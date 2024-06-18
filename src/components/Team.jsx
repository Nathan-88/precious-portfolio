const Team =()=> {
    return(
        <section className="py-16 px-8 xl:px-20 bg-tertiary">
            <div className="mb-10">
                <div className="mb-2 w-full flex items-center justify-between">
                    <h3 className="font-bold text-3xl xl:text-4xl">The Team</h3>
                    <p className="font-[400] tracking-widest text-[13px] pr-4">007</p>
                </div>
                <div className="h-[0.07rem] bg-hrline"></div>
            </div>
            <div className="mb-10 xl:mb-16 flex flex-col xl:flex-row justify-between">
                <div className="mb-8 xl:mb-0 xl:w-[63%] text-hueblack font-bold text-[1.75rem]">
                    <p className="">My core team consist of cross-functional teammates whose value to bring their best work forward has helped me to be a better team player and UX Designer</p>
                </div>
                <div className="w-[31%]">
                    <h4 className="font-bold text-[1.375rem]">Team</h4>
                    <div className="text-[15px] font-work-sans font-[400]">
                        <p className="">2 UX Designers</p>
                        <p className="">Frontend developer</p>
                        <p className="">Backend developer</p>
                        <p className="">Product owner</p>
                        <p className="">Scrum master</p>
                        <p className="">X-coach</p>
                        <p className="">Vet techs</p>
                        <p className="">Data scientist</p>
                        <p className="">Animal health key stakeholders</p>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default Team;