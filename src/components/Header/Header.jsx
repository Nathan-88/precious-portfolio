import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import './Header.css';
import Logo from "../../assets/logo-icon.png";

const Header = ({ color, backgroundColor, barColor }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
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

    return (
        <>
            <section 
                className={`text-[calc(10px+1vw)] z-10 m-0 h-[80px] fixed flex w-full justify-between px-8 md:px-10 py-1 font-medium transition-colors duration-300`}
                style={{ color, backgroundColor: getBackgroundColor() }}
            >
                <Link className="flex" to="/">
                    {backgroundColor === 'white' && <img src={Logo} alt="logo" className="h-4 pr-2 my-auto" />}
                    <motion.p 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        className="text-center font-[Poppins] font-semibold my-auto"
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
                    <div className="absolute"></div>
                    <div className="w-[30px] flex flex-col items-center mr-3">
                        <div 
                            className="w-4 h-[4px] ml-auto mb-2 group-hover:w-8 group-hover:ml-0 transition-all duration-500" 
                            style={{ backgroundColor: barColor }}
                        ></div>
                        <div 
                            className="w-4 h-[4px] mr-auto group-hover:w-8 group-hover:mr-0 transition-all duration-500" 
                            style={{ backgroundColor: barColor }}
                        ></div>
                    </div>
                    <p className="transition duration-500 group-hover:translate-x-2">Menu</p>
                </motion.div>
            </section>
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.5 }}
                        className="fixed top-0 right-0 h-full w-full lg:w-[480px] z-20 bg-black bg-opacity-80 p-10"
                    >
                        <div className="relative p-10 text-white">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center" onClick={toggleSidebar}>
                                <button 
                                    className="text-4xl font-thin"
                                >
                                    &times;
                                </button>
                            </div>
                            <div className="w-full pt-14 text-sidebar">
                                <p className="mb-4 tracking-[.25em] font-medium text-sm">NAVIGATION</p>
                                <div className="bg-sidebar w-full mb-14 h-[0.08rem]"></div>
                            </div>
                            <ul className="space-y-10 text-6xl">
                                <li className="list-item"><Link to="/" className="-ml-10">Home</Link></li>
                                <li className="list-item"><Link to="#work" className="-ml-10">Work</Link></li>
                                <li className="list-item"><Link to="/about" className="-ml-10">Contact</Link></li>
                            </ul>
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
