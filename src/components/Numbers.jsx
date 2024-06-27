const Numbers = () => {
    return(
        <section className="pt-12 pb-20 px-8  text-white bg-black">
            <div className="xl:px-16">
                <div className="mb-2 w-full flex items-center justify-between">
                    <h3 className="font-bold text-3xl xl:text-4xl">The Numbers</h3>
                    <p className="font-[400] tracking-widest text-[13px] pr-4">006</p>
                </div>
                <div className="h-[0.07rem] bg-hrline"></div>
            </div>
            <div className="xl:pl-14 flex flex-col xl:flex-row gap-x-28 items-center">
                <div className="mb-8 xl:mb-0xl:w-[60%] gap-x-16 gap-y-20 grid grid-cols-1 xl:grid-cols-2">
                    <div className=" flex flex-col justify-center items-center">
                        <h3 className="text-[80px] font-bold">2</h3>
                        <p className="font-[400] font-work-sans text-[22px]">Core projects worked on</p>
                    </div>
                    <div className="mt-8 flex flex-col justify-center items-center">
                        <h3 className="text-[80px] font-bold">1</h3>
                        <p className="font-[400] font-work-sans text-[22px]">Core project successfully</p>
                        <p className="font-[400] font-work-sans text-[22px]">moved to MVP</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h3 className="text-[80px] font-bold">+12</h3>
                        <p className="font-[400] font-work-sans text-[22px]">User research done</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h3 className="text-[80px] font-bold">1</h3>
                        <p className="font-[400] font-work-sans text-[22px]">Target market location visited</p>
                    </div>
                </div>
                <div className="text-center xl:text-start xl:w-[34%] xl:pt-16 px-2 xl:px-0 font-bold text-[24px] xl:text-[28px]">
                    <p className="">My journey so far has been impactful and practical.</p>
                    <p>Here are the numbers to quantify a bit of my experience so far</p>
                </div>
            </div>

        </section>
    )
}
export default Numbers;