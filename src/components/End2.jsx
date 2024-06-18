import end from "../assets/Frame 5506.png"

const End2 = () => {
    return(
        <section className="bg-white py-10 px-8 xl:px-12">
            <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                <div className="xl:w-[60%] mr-10">
                    <img src={end} alt="diagram"/>
                </div>
                <div className="mb-8 md:mb-0 font-[400] w-[33%] text-hueblack ">
                    <p className="text-3xl xl:text-[44px] w-full">End-2-End Process
                    </p>
                </div>
            </div>
        </section>
    )
}
export default End2;