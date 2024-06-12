import w_one from "../assets/wire1 2 (1).png";
import w_two from "../assets/wire2 1 (1).png";
import w_three from "../assets/wire3 1 (1).png";
import w_four from "../assets/wire4 1 (1).png";
import landing from "../assets/Landing page.png";
import mobileo from "../assets/wire mobile dashboard menu 1.png"
import mobileoo from "../assets/wire mobile dashboard schedule 1.png"
import mobileooo from "../assets/wire mobile dashboard 2.png"
import mobileoooo from "../assets/wire mobile messages 1.png"
import group from "../assets/Group 5487.png"

const Pict = () => {

    return (
        <section className="bg-white md:px-16 py-10">
            <div className="xl:hidden px-4 py-4 w-full space-y-5">
                <h3 className="font-medium text-sm tracking-wider">FINAL SOLUTION</h3>
                <p className="text-hueblacks font-bold text-2xl">
                    White collar is a web-app and a mobile application. We started out with wireframes in order to prioritize the experience before looking into aesthetics
                </p>
            </div>
            <div className="px-4 xl:hidden flex justify-center my-10">
                <img src={landing} className="w-full rounded-lg" alt="frame" />
            </div>
            <div className="xl:hidden text-white bg-marino p-6 space-y-5">
                <h3 className="text-sm tracking-widest">LANDING PAGE</h3>
                <ul className="pl-4 text-xs space-y-3 font-work-sans list_style">
                    <li>Simple, trendy UI design and user-friendly with advanced search system for jobs and clear call to action for users to get basic tasks done easier</li>
                    <li>Few Easy Steps to get you applying</li>
                    <li>Never miss out on job listed, get personalized updates directly to your inbox</li>
                </ul>
            </div>
            <div className="xl:px-16 flex justify-center">
                <div className="hidden xl:flex">
                    <div className="space-y-2">
                        <img src={w_one} alt="frame" />
                        <p className="w-[220px] pl-2 font-work-sans text-secondary text-xs">
                            Landing page; Simple, trendy UI design and user-friendly with advanced search system for jobs and clear call to actions for users to get basic tasks done easier
                        </p>
                    </div>
                    <div className="space-y-2">
                        <img src={w_two} alt="frame" />
                        <p className="pl-2 font-work-sans text-secondary text-xs">Few Easy Steps to get you applying</p>
                    </div>
                    <div className="space-y-2">
                        <img src={w_three} alt="frame" />
                    </div>
                    <div className="space-y-2">
                        <img src={w_four} alt="frame" />
                        <p className="w-[220px] pl-2 font-work-sans text-secondary text-xs">
                            Never miss out on job listed, get personalized updates directly to your inbox
                        </p>
                    </div>
                </div>
            </div>
            <p className="text-sm font-medium px-4 pt-10 xl:hidden">MORE SCREENS</p>
            <div className="py-16 xl:py-24 space-y-4 gap-6 px-6 md:px-16 grid grid-cols-1 xl:grid-cols-4">
                <div className="space-y-2">
                    <img src={mobileo} alt="frame" className="w-full shadow-md" />
                    <p className="xl:w-[220px] pl-2 font-work-sans text-secondary text-xs">
                        Resourceful navigation bar to help users move around with ease
                    </p>
                </div>
                <div className="space-y-2">
                    <img src={mobileoo} alt="frame" className="shadow-md w-full" />
                    <p className="xl:w-[220px] pl-2 font-work-sans text-secondary text-xs">
                        Set reminders on upcoming activities
                    </p>
                </div>
                <div className="space-y-2">
                    <img src={mobileooo} className="w-full shadow-md" alt="frame" />
                    <p className="xl:w-[220px] pl-2 font-work-sans text-secondary text-xs">
                        Well thought out dashboard to help users have an overview of their applications
                    </p>
                </div>
                <div className="space-y-2">
                    <img src={mobileoooo} className="w-full shadow-md" alt="frame" />
                </div>
            </div>

            <div className="xl:px-16 py-4">
                <img src={group} className="" alt="phones"/>
            </div>
        </section>
    );
};

export default Pict;
