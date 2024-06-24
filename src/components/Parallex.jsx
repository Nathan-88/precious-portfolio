import one from "../assets/01.png"
import two from "../assets/02.png"
import three from "../assets/03.png"
import picfix from "../assets/backImg.jpg"
const Parallex = () => {
    return(
        <section className="relative ">
            <div className="bg-black xl:-mt-16 text-white xl:w-[47%] py-24 px-10">
                <h3 className="text-3xl tracking-wide font-bold mb-10 ">Design is not just about how it looks but also about how it works...</h3>
                <div className="space-y-10">
                    <div className="flex justify-start items-center gap-x-4 xl:gap-0">
                        <div className="w-[20%]">
                            <img src={one} className="" alt="one"/>
                        </div>
                        <div className="space-y-3 w-[85%]">
                            <p className="text-base font-bold">User Experience Design</p>
                            <p className="text-text">As a UX professional, my first priority is designing solutions that makes the lives of your users easier and optimises your business goal
                            </p>
                        </div>   
                    </div>
                    <div className="flex justify-start items-center gap-x-4 xl:gap-0">
                        <div className="w-[20%]">
                            <img src={two} className="" alt="one"/>
                        </div>
                        <div className="space-y-3 w-[85%]">
                            <p className="font-medium">User Research</p>
                            <p className="text-text">“If you want to create a great product, you have to start by understanding the people who will use it”. Understanding the users is key to creating a successful product
                            </p>
                        </div>   
                    </div>
                    <div className="flex justify-start gap-x-4 xl:gap-0 items-center">
                        <div className="w-[20%]">
                            <img src={three} className="" alt="one"/>
                        </div>
                        <div className="space-y-3 w-[85%]">
                            <p className="font-medium">Design Interaction</p>
                            <p className="text-text">We cannot denial the fact micro interactions and transitions brings a good feel to an already amazing product and this is my new interest
                            </p>
                        </div>   
                    </div>
                </div>
            </div>
            <div className="hidden xl:block w-[42%] bg-black fixed bottom-0 -z-[3] right-0">
                <img src={picfix} className="" alt="my pic"/>
            </div>
        </section>
    )
}
export default Parallex;