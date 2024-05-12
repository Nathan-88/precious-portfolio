
const Home = () => {
    return(<>
        <section className="relative bg-center text-white bg-fixed bg-no-repeat bg-cover bg-parallex overflow-hidden">
            <div className=" absolute top-[57%] sm:top-[60%] text-white w-full left-[50%] -translate-y-[50%] -translate-x-[40%] ">
                {/* container for text and image */}
                <div className=" pt-20 h-full  relative flex flex-col xl:flex-row">
                    {/* text container */}
                    <div className="mt-9 xl:mt-[14%]  pl-4 flex flex-col text-3xl ">
                        <div className="flex">
                            <span className="bg-white w-[16%] h-[2px] mt-[10px] mr-2"></span>
                            <p className="text-sm">OGUAZU PRECIOUS</p>
                        </div>
                        <div className="py-5 font-bold text-3xl lg:text-7xl">
                            <p className="mb-2">UX Designer &</p>
                            <p>Researcher</p>
                        </div>
                        <p className="gif text-3xl xl:absolute xl:top-[60%] xl:text-[4.9rem] font-bold z-10">Based in Germany</p>
                    </div>
                    {/* image */}
                    <div className="pt-10 xl:pt-0">
                        <img className="w-full h-auto object-cover" src="/src/assets/myPic.png" alt="my pic" />
                    </div>
                </div>
                
                
            </div>
        </section>

        <section className="bg-purple-400"></section>
        <section className="bg-blue-400"></section>
        </>
    )
}

export default Home