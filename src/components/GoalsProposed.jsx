import macbook from "../assets/iMac Pro Left Side View Mockup.png"
import likebutton from "../assets/like-button 1.png"
import sendmail from "../assets/send-mail 1.png"
import career from "../assets/career-advancement (1) 1.png"
import sensory from "../assets/sensory 1.png"
import recruitment from "../assets/recruitment 2.png"

const GoalsProposed = () => {
    return(
    <section className="flex flex-col xl:flex-row xl:justify-between bg-white px-4 md:px-16 xl:px-28 py-10">
        <div className="xl:w-[37%] -mt-24 mb-8">
            <img src={macbook} alt="macbook"/>
        </div>

        <div className="xl:w-2/5">
            <h3 className="text-3xl font-bold mb-4">Goals of proposed solution</h3>
            <p className="text-sm w-[95%] font-work-sans mb-4">By looking outwards, using the insights gathered about job seekers and recruiters, we were able to understand how we can better solve the issues that the users experience. Some outlined goals of this product were;</p>
            <div className="grid grid-cols-2  font-work-sans font-[400] text-sm">
                <div className="space-y-4">
                    <div className="flex space-x-4">
                        <img src={likebutton} alt="like button"/>
                        <p className="">Transparency</p>
                    </div>
                    <div className="flex space-x-4">
                        <img src={sensory} alt="sensory"/>
                        <p className="">Track-ability</p>
                    </div>
                    <div className="flex space-x-4">
                        <img src={sendmail} alt="send mail"/>
                        <p className="">Better communication</p>
                    </div>
                    <div className="flex space-x-4">
                        <img src={recruitment} alt="recruitment"/>
                        <p className="">Easy Apply</p>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center">
                    <div className="flex space-x-4">
                        <img src={career} alt="career"/>
                        <p className="">Easy navigation</p>
                    </div>
                    <button className="rounded-full px-4 py-2 bg-primary text-white w-fit">See prototype</button>
                </div>
            </div>
        </div>

    </section>
    )
}
export default GoalsProposed;