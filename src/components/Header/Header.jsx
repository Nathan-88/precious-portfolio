import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import { Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import './Header.css';
import Logo from "../../assets/logo-icon.png";

const Header = ({ color, backgroundColor, barColor }) => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const ref = useRef(null);
    const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
    };
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const getBackgroundColor = () => {
        if (backgroundColor !== 'black') {
            return backgroundColor;
        }
        return isScrolled ? backgroundColor : 'transparent';
    };

    const scrollToSection = () => {
        navigate('/', { state: { target: 'work' }});
    }

    return (
        <>
            <section 
                className={`text-sm z-[13] m-0 h-[60px] fixed max-w-[1440px] flex w-full justify-between px-4 md:px-10 py-1 font-medium transition-colors duration-300`}
                style={{ color, backgroundColor: getBackgroundColor() }}
            >
                <Link className="flex" to="/">
                    {backgroundColor === 'white' && <img src={Logo} alt="logo" className="h-4 pr-2 my-auto" />}
                    <motion.p 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        className="text-center font-[Poppins] font-semibold text-base my-auto"
                    >
                        Precious
                    </motion.p>
                </Link>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="group flex justify-center items-center cursor-pointer relative"
                    onClick={toggleSidebar}
                >
                    <div className="w-[24px] flex flex-col items-center mr-3">
                        <div 
                            className="w-3 h-[3px] ml-auto mb-2 group-hover:w-8 group-hover:ml-0  rounded-lg transition-all duration-500" 
                            style={{ backgroundColor: barColor }}
                        ></div>
                        <div 
                            className="w-3 h-[3px] mr-auto group-hover:w-8 group-hover:mr-0 rounded-lg transition-all duration-500" 
                            style={{ backgroundColor: barColor }}
                        ></div>
                    </div>
                    <p className="font-work-sans font-[400] transition duration-500 group-hover:translate-x-2 ">Menu</p>
                </motion.div>
            </section>
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.5 }}
                        className="fixed top-0 right-0 h-screen custom-scrollbar overflow-y-auto w-full lg:w-[480px] z-20 bg-black bg-opacity-[0.97] p-10"
                    >
                        <div className="relative py-10 h-auto text-white">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center" onClick={toggleSidebar}>
                                <button 
                                    className="text-4xl font-thin"
                                >
                                    &times;
                                </button>
                            </div>
                            <div className="w-full pt-14 text-text font-medium">
                                <p className="mb-4 tracking-[.25em] font-medium text-sm">NAVIGATION</p>
                                <div className="bg-text font-medium w-full mb-14 h-[0.08rem]"></div>
                            </div>
                            <ul className="lists mb-10 text-5xl font-[400]">
                                <Link className="" to="/"><li className="mb-10"><span className="">Home</span></li></Link>
                                <Link className="" to="/about"><li className="mb-10"><span className="">About</span></li></Link>
                                <button onClick={scrollToSection}><li className="mb-10"><span className="">Work</span></li></button>
                                <a href="mailto:Oguazuprecious@gmail.com"><li className=""><span className="">Contact</span></li></a>
                            </ul>
                            <div className="w-full pt-14 text-text font-medium">
                                <div className="bg-text mb-6 font-medium w-full h-[0.08rem]"></div>
                                <p className="mb-6 font-medium text-sm">SOCIALS</p>
                                <div className="flex gap-20 font-medium text-white">
                                    <a target="_blank" href="https://www.linkedin.com/in/precious-oguazu" className="">Linkedn</a>
                                    <a target="_blank" href="https://www.behance.net/chidiogpreciou" className="">Behance</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

Header.propTypes = {
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    barColor: PropTypes.string,
};

Header.defaultProps = {
    color: 'white', // Default text color
    backgroundColor: 'black', // Default background color
    barColor: 'white', // Default color for the bars
};

export default Header;
