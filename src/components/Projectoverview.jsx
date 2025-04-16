export default function ProjectOverview() {
    return (
      <section className="p-8 md:p-16 xl:p-20 bg-tertiary min-h-screen">
        <div className=" mx-auto flex flex-col xl:flex-row justify-between gap-14">
          {/* Left Section - Project Overview */}
          <div className="xl:w-[64%]">
            <div className="flex mb-2 justify-between items-center font-Helvetica-Neue">
              <h2 className="font-bold text-3xl xl:text-[38px]">Project Overview</h2>
              <p className="font-[500] tracking-widest text-[13px]">001</p>
            </div>
            <div className="h-[0.07rem] mb-5 xl:mb-10 bg-hrline"></div>
  
            {/* Background */}
            <div className="mt-6">
              <h3 className="text-[22px] font-bold text-black font-Helvetica-Neue">Background</h3>
              <p className="text-secondary mt-2 font-work-sans font-[400] text-[16px] xl:w-[76%] tracking-[4%]">
                Boehringer Ingelheim (one of the top 20 pharmaceutical companies in the world) 
                wanted to increase their competitiveness & strengthen their #1 category position 
                in animal health by maximising brand penetration for pet owners, vets & retailers.
              </p>
            </div>
  
            {/* Problem */}
            <div className="mt-6">
              <h3 className="text-[22px] font-bold text-black font-Helvetica-Neue">Problem</h3>
              <p className="text-secondary mt-2 font-work-sans font-[400] text-[16px] xl:w-[76%] tracking-[4%]">
                It is difficult to identify pet internal parasites from the stool samples. 
                In some cases not all findings are accurate and as a result, pets get suboptimal/non-diagnosed treatment.
              </p>
            </div>
  
            {/* Objective */}
            <div className="mt-6 tracking-[4%]">
              <h3 className="text-[22px] font-bold text-black font-Helvetica-Neue">Objective</h3>
              <p className="text-secondary mt-2 font-work-sans font-[400] text-[16px] xl:w-[76%]">
                To research, strategize and design an end-to-end digital tool for veterinarians 
                with 3 major focus areas:
              </p>
              <ul className="mt-3 pl-4 space-y-2 text-secondary font-work-sans font-[400] text-[16px] xl:w-[76%]">
                <li><span className="font-semibold">01</span> To enable faster detection of parasites</li>
                <li><span className="font-semibold">02</span> Potential improvement of their diagnosis process</li>
                <li><span className="font-semibold">03</span> Timely & effective treatment for pets</li>
              </ul>
            </div>
          </div>
  
          {/* Right Section - Info */}
          <div className="xl:w-[31%]">
            <div className="flex mb-2 justify-between items-center font-Helvetica-Neue">
              <h2 className="font-bold text-3xl xl:text-[38px]">Info</h2>
              <p className="font-[500] tracking-widest text-[13px]">002</p>
            </div>
            <div className="h-[0.07rem] mb-5 xl:mb-10 bg-hrline"></div>
  
            {/* Role */}
            <div className="mt-6">
              <h3 className="text-[22px] font-bold text-black font-Helvetica-Neue">My Role</h3>
              <p className="text-secondary mt-2 font-work-sans font-[400] text-[16px] tracking-[4%] xl:w-[76%]">UX Designer <br /> UX Researcher <br /> Design Facilitator</p>
            </div>
  
            {/* Responsibilities */}
            <div className="mt-6">
              <h3 className="text-[22px] font-bold text-black font-Helvetica-Neue">Mainly</h3>
              <p className="text-secondary mt-2 font-work-sans font-[400] text-[16px]">
                Business and user requirements gathering, UX team collaboration and feedback, 
                stakeholder engagement, user journey mapping, visual design, rapid prototyping, A/B testing.
              </p>
            </div>
  
            {/* Team */}
            <div className="mt-6">
              <h3 className="text-[22px] font-bold text-black font-Helvetica-Neue">The Team</h3>
              <ul className="mt-3 space-y-2 text-secondary font-work-sans font-[400] text-[16px]">
                <li><span className="text-black">Tay Kim</span> – UX Designer</li>
                <li><span className="text-black">Precious Oguzua</span> – UX Designer</li>
                <li><span className="text-black">Eras</span> – Scrum master</li>
                <li><span className="text-black">Suvi</span> – Product Owner (Product)</li>
                <li><span className="text-black">Ankit</span> – Product Owner (Business)</li>
                <li><span className="text-black">Loic, Fredrick & Do pwe</span> – Vet Techs</li>
                <li><span className="text-black">Phillip</span> – Data Scientist</li>
                <li><span className="text-black">Luz María & Rene</span> – Engineers</li>
              </ul>
            </div>
          </div>
        </div>
    </section>
    );
  }
  