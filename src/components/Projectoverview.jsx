export default function ProjectOverview() {
    return (
      <section className="p-8 md:p-16 bg-tertiary min-h-screen">
        <div className=" mx-auto flex flex-col xl:flex-row justify-between gap-14">
          {/* Left Section - Project Overview */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Project Overview</h2>
            <p className="text-sm text-gray-400">001</p>
  
            {/* Background */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800">Background</h3>
              <p className="text-gray-600 mt-2">
                Boehringer Ingelheim (one of the top 20 pharmaceutical companies in the world) 
                wanted to increase their competitiveness & strengthen their #1 category position 
                in animal health by maximising brand penetration for pet owners, vets & retailers.
              </p>
            </div>
  
            {/* Problem */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800">Problem</h3>
              <p className="text-gray-600 mt-2">
                It is difficult to identify pet internal parasites from the stool samples. 
                In some cases not all findings are accurate and as a result, pets get suboptimal/non-diagnosed treatment.
              </p>
            </div>
  
            {/* Objective */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800">Objective</h3>
              <p className="text-gray-600 mt-2">
                To research, strategize and design an end-to-end digital tool for veterinarians 
                with 3 major focus areas:
              </p>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li><span className="font-semibold">01</span> To enable faster detection of parasites</li>
                <li><span className="font-semibold">02</span> Potential improvement of their diagnosis process</li>
                <li><span className="font-semibold">03</span> Timely & effective treatment for pets</li>
              </ul>
            </div>
          </div>
  
          {/* Right Section - Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Info</h2>
            <p className="text-sm text-gray-400">002</p>
  
            {/* Role */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800">My Role</h3>
              <p className="text-gray-600 mt-2">UX Designer <br /> UX Researcher <br /> Design Facilitator</p>
            </div>
  
            {/* Responsibilities */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800">Mainly</h3>
              <p className="text-gray-600 mt-2">
                Business and user requirements gathering, UX team collaboration and feedback, 
                stakeholder engagement, user journey mapping, visual design, rapid prototyping, A/B testing.
              </p>
            </div>
  
            {/* Team */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800">The Team</h3>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li><span className="font-semibold">Tay Kim</span> – UX Designer</li>
                <li><span className="font-semibold">Precious Oguzua</span> – UX Designer</li>
                <li><span className="font-semibold">Eras</span> – Scrum master</li>
                <li><span className="font-semibold">Suvi</span> – Product Owner (Product)</li>
                <li><span className="font-semibold">Ankit</span> – Product Owner (Business)</li>
                <li><span className="font-semibold">Loic, Fredrick & Do pwe</span> – Vet Techs</li>
                <li><span className="font-semibold">Phillip</span> – Data Scientist</li>
                <li><span className="font-semibold">Luz María & Rene</span> – Engineers</li>
              </ul>
            </div>
          </div>
        </div>
    </section>
    );
  }
  