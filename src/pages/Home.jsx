import LogoCarousel from "../components/LogoCarousel"
import AboutMe from "../components/AboutMe"
import Mywork from "../components/Mywork"
import Myservice from "../components/Myservice"
import Parallex from "../components/Parallex"
import Books from "../components/Books"
//import Portrait from "../components/Portrait"
// import myPic from "/src/assets/myPic.png"
// import ImageSlider from "../components/ImageSlider/ImageSlider"




const Home = () => {

    const scrollToSection = () => {
        const section = document.getElementById('work');
        if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return(<>
        <section
        className="md:h-screen relative bg-center text-white bg-fixed bg-no-repeat bg-cover parallex overflow-hidden">
            {/* absolute top-[30%] 2xl:top-[50%] text-white w-full left-[45%] md:left-[50%] 2xl:left-[55%] -translate-y-[50%] -translate-x-[40%] */}
            <div className="pl-[8%] md:pl-[15%] flex flex-col justify-center ">
                    {/* text container */}
                    <div className="justify-center h-screen lg:pl-4 flex flex-col text-3xl ">
                        <div className="flex items-center">
                            <span className="bg-white w-[20%] xl:w-[10%] h-[2px] mr-2"></span>
                            <p className="text-sm font-medium font-roboto">OGUAZU PRECIOUS</p>
                        </div>
                        <div className="mt-5 mb-3 font-bold  text-4xl md:text-xxl">
                            <p className="mb-2">UX Designer/</p>
                            <p>Researcher</p>
                        </div>
                        <p className="gif mb-5 text-white text-[35px] md:text-6xl lg:text-xxl  xl:text-[4.9rem] font-bold z-10">Based in Germany</p>
                        <button onClick={scrollToSection} className="bg-primary hover:opacity-60 text-white font-work-sans font-[400] text-sm px-6 tracking-wide w-fit py-3 rounded-full">View selected work</button>
                    </div>
                    {/* image */}
                    {/* <div className="pt-20 xl:pt-0 2xl:pt-5 2xl:w-[50%] 3xl:w-[55%]">
                        <img className="w-full h-auto object-cover" src={myPic} alt="my pic" />
                    </div>   */}
            </div>
        </section>
        <LogoCarousel/>
        <AboutMe/>
        <Mywork/>
        <Myservice/>
        <Parallex/>
        <Books/>
        {/* <Portrait/>
        <ImageSlider/> */}
        </>
    )
}

export default Home