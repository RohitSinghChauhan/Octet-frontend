import { useEffect, useRef, useState } from "react";
import Card from "./Card"
import arrow from '../../assets/Arrow.png'

const ActiveJobs = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="container sm:mt-[1.5rem] md:mt-[1.5rem] lg:mt-[2rem] xl:mt-[2rem] 2xl:mt-[2rem]">
            <div className="wrapper">

                <div className="w-[100%] flex justify-between flex-wrap relative">
                    <p className="headline">Active Jobs</p>

                    <div ref={dropdownRef} className="relative">
                        <button
                            className="border border-[#EAEAEA] py-[1.4px] px-3 rounded-md flex gap-2 justify-center items-center"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <p className="font-ptsans font-[700] text-[14px] text-[#364154]">Sort By:</p>
                            <p className="text-[13px] text-[#364154]">Recent</p>
                            <img src={arrow} alt="arrow" className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Days</a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Job Views</a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Applied</a>
                            </div>
                        )}
                    </div>
                </div>

                <div className="w-full flex flex-col gap-[0.7rem]">
                    <Card days={2} />
                    <Card />
                    <Card days={30} />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default ActiveJobs