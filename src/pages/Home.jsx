
const Home = () => {
    return(<>
        <section className="h-screen relative bg-center text-white bg-fixed bg-no-repeat bg-cover bg-parallex overflow-hidden">
            <div className=" absolute top-[58%] md:top-[63%] 2xl:top-[50%] text-white w-full left-[45%] md:left-[50%] 2xl:left-[55%] -translate-y-[50%] -translate-x-[40%] ">
                {/* container for text and image */}
                <div className="md:pt-20 lg:pt-20 h-full relative flex flex-col min-[1027px]:flex-row xl:flex-row 2xl:flex-row">
                    {/* text container */}
                    <div className="mt-9 xl:mt-[14%] 2xl:mt-[20%] lg:pl-4 flex flex-col text-3xl ">
                        <div className="flex">
                            <span className="bg-white w-[16%] h-[2px] mt-[10px] mr-2"></span>
                            <p className="text-xl xl:text-sm">OGUAZU PRECIOUS</p>
                        </div>
                        <div className="py-5 font-bold  text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                            <p className="mb-2">UX Designer &</p>
                            <p>Researcher</p>
                        </div>
                        <p className="gif text-[2.8rem] md:text-6xl lg:text-7xl xl:absolute xl:top-[60%] xl:text-[4.9rem] font-bold z-10">Based in Germany</p>
                    </div>
                    {/* image */}
                    <div className="pt-20 xl:pt-0 2xl:pt-5 2xl:w-[50%] 3xl:w-[55%]">
                        <img className="w-full h-auto object-cover" src="/src/assets/myPic.png" alt="my pic" />
                    </div>
                </div>
                
                
            </div>
        </section>

        <section className="bg-purple-400 h-screen">
        </section>
        <section className="bg-blue-400 h-screen"></section>
        </>
    )
}

export default Home