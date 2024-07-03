import { motion } from "framer-motion";
const About = ()=> {
    return (
        <motion.section 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
        className="flex flex-col md:flex-row px-6 justify-center items-start xl:justify-between pt-24 xl:px-24">
            <div className="xl:w-[68%] font-[400] text-xl">
                <p className="text-secondary px-2 mb-2">
                    My background in UX Design goes as far back as my days working as a social media manager in the SaaS industry, implementing research to profile our users and leveraging graphic design to communicate effectively. This contributed hugely to my career path as a UX designer. In the past year, I spent my time working on a digital procurement solution for emerging businesses to manage their procurement spend efficiently. Presently at Boehringer Ingelheim, I work with diverse product teams at the new digital health innovation lab
                </p>
                <p className="text-secondary px-2 mb-2">
                    I have experience collaborating with cross-functional product and tech leaders from discovery to market fit, exploring the possibilities of technology; AI, machine learning, sustainable technology and discovering business opportunities
                </p>
                <p className="text-secondary px-2 mb-2">
                    Currently, I am interested in keeping myself curious, learning and honing my abilities in different contexts. I find micro-interactions, transition and animation exciting and I am looking to work at the intersection of product, experience and business, bringing a sense of interaction design and strategy to designs that are useful
                </p>
                <p className="text-secondary px-2 mb-2">
                    Outside of work, at the moment,I love meeting new people, enjoying a good healthy meal and exploring the cities of Germany and beyond
                </p>
            </div>
            <div className="xl:w-[25%] flex flex-col text-md p-2 items-start">
                <div className="space-y-2 xl:mb-4">
                    <h2 className="text-marino font-medium tracking-wide text-xs">CONTACT</h2>
                    <div className=" font-[400] text-[16px] font-open-sans leading-[19.2px]">
                        <a href="mailto:Oguazuprecious@gmail.com"><p className="text-black mb-3">oguazuprecious@gmail.com</p></a>
                        <p className="text-black mb-3">Download Resume</p>
                        <a target="_blank" href="https://www.linkedin.com/in/precious-oguazu"><p className="text-black mb-2">Find me on Linkedin</p></a>
                    </div>
                </div>

                <div className="space-y-2 xl:mb-4">
                    <h2 className="text-marino font-medium tracking-wide text-xs">EXPERIENCE</h2>
                    <div className=" font-[400] text-[16px] font-open-sans leading-[19.2px]">
                        <p className="text-black mb-3">Boehringer Ingelheim, UX designer/ Researcher</p>
                        <p className="text-black mb-3">SeamlessHR, UX Designer</p>
                    </div>
                </div>

                <div className="space-y-2 xl:mb-4">
                    <h2 className="text-marino font-medium tracking-wide text-xs">SKILL</h2>
                    <div className=" font-[400] text-[16px] font-open-sans leading-[19.2px]">
                        <p className="text-black mb-3">UX design</p>
                        <p className="text-black mb-3">UI design</p>
                        <p className="text-black mb-3">Design Ops</p>
                        <p className="text-black mb-3">User research</p>
                        <p className="text-black mb-3">Prototyping</p>
                        <p className="text-black mb-3">Ideation</p>
                    </div>
                </div>
            </div>
        </motion.section>
    )
};
export default About;