const About = ()=> {
    return (
        <section className="flex flex-col md:flex-row px-6 gap-x-28 pt-28 xl:px-28">
            <div className="">
                <p className="text-secondary p-2 mb-3">
                    My background in UX Design goes as far back as my days working as a social media manager in the SaaS industry, implementing research to profile our users and leveraging graphic design to communicate effectively. This contributed hugely to my career path as a UX designer. In the past year, I spent my time working on a digital procurement solution for emerging businesses to manage their procurement spend efficiently. Presently at Boehringer Ingelheim, I work with diverse product teams at the new digital health innovation lab
                </p>
                <p className="text-secondary p-2 mb-3">
                    I have experience collaborating with cross-functional product and tech leaders from discovery to market fit, exploring the possibilities of technology; AI, machine learning, sustainable technology and discovering business opportunities
                </p>
                <p className="text-secondary p-2 mb-3">
                    Currently, I am interested in keeping myself curious, learning and honing my abilities in different contexts. I find micro-interactions, transition and animation exciting and I am looking to work at the intersection of product, experience and business, bringing a sense of interaction design and strategy to designs that are useful
                </p>
                <p className="text-secondary p-2 mb-3">
                    Outside of work, at the moment,I love meeting new people, enjoying a good healthy meal and exploring the cities of Germany and beyond
                </p>
            </div>
            <div className="flex flex-col space-y-4 text-md p-2 items-start">
                <div className="space-y-1">
                <h2 className="text-marino text-lg">CONTACT</h2>
                <p className="text-black text-md">oguazuprecious@gmail.com</p>
                <p className="text-black">Download Resume</p>
                <p className="text-black">Find me on Linkedin</p>
                </div>

                <div className="space-y-1">
                <h2 className="text-marino text-lg">EXPERIENCE</h2>
                <p className="text-black text-md">Boehringer Ingelheim, UX designer/Researcher</p>
                <p className="text-black">SeamlessHR, UX Designer</p>
                </div>

                <div className="space-y-1">
                <h2 className="text-marino text-lg">SKILL</h2>
                <p className="text-black text-md">UX design</p>
                <p className="text-black">UI design</p>
                <p className="text-black">Design Ops</p>
                <p className="text-black">User research</p>
                <p className="text-black">Prototyping</p>
                <p className="text-black">Ideation</p>
                </div>
            </div>
        </section>
    )
};
export default About;