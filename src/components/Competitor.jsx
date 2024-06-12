import copyframe from "../assets/My copy - Frame 26 (1) 1.png"
import pic_O from "../assets/Ellipse 949.png"
import pic_oo from "../assets/Ellipse 950.png"
const Competitor =() => {
    return(
        <section className="px-4 md:px-16 py-16">
            <div className="space-y-5 xl:px-16 mb-6">
                <h3 className="font-medium text-[0.75rem] tracking-wider">COMPETITION ANALYSIS</h3>
                <p className="text-2xl xl:text-[1.625rem] font-bold text-hueblack">After proposing solutions, we decided to take it further by analysing existing solutions in order to see how we can strengthen our features and create MVPs. With this, we were able to come up with must-have features and build more opportunities</p>
            </div>
            <div className="xl:px-16">
                <img className="xl:pl-16 py-4" src={copyframe} alt="frame"/>
            </div>
            <div className="xl:px-16 mt-16 space-y-5">
                <h4 className="text-sm font-medium">DIVERSE USERS OF WHITE COLLAR</h4>
                <h3 className="text-3xl font-bold text-hueblack">Clearly defining problem statements for our different levels of end-users and their needs.</h3>
                <p className="font-[400] text-text font-work-sans">we created two well-defined user personas which were created initially from hypothesis to guide the interview script but were then modified using user insights from the interview.</p>
            </div>
            <div className="xl:px-16 py-16 grid grid-cols-1 gap-x-6 xl:grid-cols-2">
                <div className="mb-10 xl:mb-0 flex flex-col justify-between items-center">
                    <div className="">
                        <img src={pic_O} alt="dp"/>
                    </div>
                    <div className="mt-16 p-6 bg-whitecard">
                        <p className="font-[400] font-work-sans">A fresh graduate <span className="font-semibold">actively searching</span> for a new role in design after her boot camp. First time applying to jobs and <span className="font-semibold">worried about getting overwhelmed. Struggles with keeping track of multiple applications. Needs job listing solutions that are easy and learnable,</span>is  also worries about creating a professional resume and <span className="font-semibold">requires easy-apply solutions</span></p>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center">
                    <div className="">
                        <img src={pic_oo} alt="dp"/>
                    </div>
                    <div className="mt-16 p-6 bg-whitecard">
                        <p className="">An employee in a reputable company, well qualified and happy with his position but is <span className="font-semibold">passively searching</span> for new roles in more promising companies. He has a tendency to miss what is not scheduled on his calendar and <span className="font-semibold">needs</span> to be able to set reminders about upcoming interviews & <span className="font-semibold">compare jobs.</span> His goal is to <span className="font-semibold">manage his time properly and apply only to serious recruiters</span></p>
                    </div>
                </div>
            </div>
            
            <div className="hidden xl:block py-5 w-full space-y-5">
                <h3 className="font-medium text-sm tracking-wider">FINAL SOLUTION</h3>
                <p className="text-hueblacks font-bold text-3xl">White collar is a web-app and a mobile application. We started out with wireframes in order to prioritise the experience before looking into aesthetics</p>
            </div>
        </section>
    )
}
export default Competitor;