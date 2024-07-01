const Projectinfo =()=> {
    return(
        <section className="bg-tertiary py-12 px-8 xl:px-20 flex flex-col xl:flex-row justify-between">
            <div className="mb-8 xl:mb-0 xl:w-[64%]">
                <div className="flex mb-2 justify-between items-center">
                    <h3 className="font-bold text-3xl xl:text-[38px]">Project</h3>
                    <p className="font-[400] tracking-widest text-[13px]">001</p>
                </div>
                <div className="h-[0.07rem] mb-5 xl:mb-10  bg-hrline"></div>
                <p className="font-medium mb-5 text-xs tracking-widest">BOEHRINGER INGELHEIM NEW DIGITAL INNOVATION LAB (BI X)</p> 
                <h4 className="text-3xl mb-3 font-bold text-hueblack xl:w-[85%]">My experience so far as UX Designer on the animal health product team for a new project</h4>
                <div className="text-secondary text-sm font-[400] font-work-sans">
                    <p className="mb-3 xl:w-[90%]">I have had the most fulfilling experience working at BI X. The freedom and an empowering environment to explore ideas & new age technologies like AI, machine learning, and AR/VR in order to bring viable solutions to life is nothing short of rewarding and impactful.</p>
                    <p className="xl:w-[92%]">Working on this team has redefined the core of collaboration and effective communication for me. I have learnt how important it is to keep cross functional teams and stakeholders in sync with your work. It goes beyond just engineering or fellow designers who have stake in the project. It includes consolidating with product owners, experts in the field, and data scientist. It also requires communicating in clear terms to enable a shared understanding and get tangible feedback. This project is focused on helping Veterinarians diagnose and treat parasite infection on time and seamlessly. <span className="font-[800]">Unfortunately for privacy reasons, I cannot show the details of my work and this case is basically highlighting my experience & learnings</span></p>
                </div>
            </div>

            <div className="xl:w-[31%]">
                <div className="flex mb-2 justify-between items-center">
                    <h3 className="font-bold text-3xl xl:text-[38px]">Info</h3>
                    <p className="font-[400] tracking-widest text-[13px] pr-6">002</p>
                </div>
                <div className="h-[0.07rem] mb-5 xl:mb-10 bg-hrline"></div>
                <div className="flex gap-x-32 xl:block">
                    <div className="mb-8">
                        <h4 className="font-bold mb-2 text-[22px]">Role</h4>
                        <div className="text-secondary font-work-sans font-[400] text-sm">
                            <p>UX Designer</p>
                            <p>UX Researcher</p>
                            <p>Facilitator</p>
                        </div>
                    </div>
                    <div className="mb-8">
                        <h4 className="font-bold mb-2 text-[22px]">Tools</h4>
                        <div className="text-secondary font-work-sans font-[400] text-sm">
                            <p>Figma</p>
                            <p>Klaxoon</p>
                            <p>Dovetail</p>
                            <p>Jira</p>
                        </div>
                    </div>
                    <div className="">
                        <h4 className="font-bold mb-2 text-[22px]">Project status</h4>
                        <div className="text-secondary font-work-sans font-[400] text-sm">
                            <p>MVP</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}
export default Projectinfo;