import visonmobile from '../assets/visonnext landing pic.svg';
import logomark from '../assets/Logo Mark.svg';
const VisionnextLanding = () => {
  return (
    <div className="bg-[#08312A] h-auto flex items-center justify-center px-6 pt-10">
        <div className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen gap-10 pb-5">
            {/* Left Section */}
            <div id="1" className="h-auto flex flex-col items-center text-center md:text-left md:items-start">
                <div className="flex items-center pb-5">
                    <img src={logomark} alt="pic" className="w-16 sm:w-20 h-auto" />
                    <h1 className="text-white text-2xl sm:text-3xxl font-sigmar font-medium ml-2">
                    Vision<span className="text-green-400">Next</span>
                    </h1>
                </div>
                <div className="text-white font-inter font-bold text-3xl sm:text-5xl lg:text-6xl leading-tight">
                    <h2>AI-powered parasite</h2>
                    <h2>detection & diagnosis</h2>
                    <h2>supporting solution</h2>
                </div>
            </div>

            {/* Right Section */}
            <div id="2" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                <img src={visonmobile} alt="pic" className="w-full h-auto object-contain" />
            </div>
        </div>
    </div>
  );
}

export default VisionnextLanding;