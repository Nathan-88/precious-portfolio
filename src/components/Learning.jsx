const Learning = () => {
    return (
        <section className="py-16 px-8 xl:px-20 bg-tertiary">
            <div className="mb-4">
                <div className="mb-2 w-full flex items-center justify-between">
                    <h3 className="font-bold text-3xl xl:text-4xl">Learnings</h3>
                    <p className="font-[400] tracking-widest text-[13px] pr-4">009</p>
                </div>
                <div className="h-[0.07rem] bg-hrline"></div>
            </div>
            <div className="flex justify-between items-center">
                <div className="text-hueblack font-bold text-[38px] xl:w-[33%]">
                    <p>Outcome and Retrospectives</p>
                </div>
                <div className="xl:w-[31%] text-hueblack">
                    <p className="mb-2 font-[500] text-[13px]">01</p>
                    <h4 className="mb-4 font-bold text-[28px]">Document everything</h4>
                    <p className="">With Klaxoon, details of individual work is kept transparent and for me, it makes it easier to refer back to the research done, changes made and why, and pending questions. This makes the process all the more exciting and collaborative</p>
                </div>
            </div>
        </section>
    )
}
export default Learning;