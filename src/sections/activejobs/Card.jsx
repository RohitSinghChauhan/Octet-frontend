import { useEffect, useRef, useState } from "react";
import dropdown from '../../assets/Dropdown.png'

const Card = ({ days = 7 }) => {
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
        <div className="sm:h-full md:h-full lg:h-[150px] xl:h-[115px] 2xl:h-[115px]
        sm:border-l-[3px] md:border-l-[3px] lg:border-l-[6px] xl:border-l-[6px] 2xl:border-l-[6px]
        border-[#94E6D4] rounded-md flex justify-between
        sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row
        sm:w-[83vw] md:w-[83vw]  lg:w-full xl:w-full 2xl:w-full">

            <div className="sm:w-full md:w-full lg:w-[25%] xl:w-[25%] 2xl:w-[25%]  
            h-[100%] border-y-[1px] border-[#EAEAEA] px-[1.370rem] flex flex-col justify-between
            py-[1rem] sm:border-r-[1px] md:border-r-[1px] lg:border-r-0 xl:border-r-0 2xl:border-r-0">
                <p className="font-ptsans text-[#6390DF] sm:pb-2 md:pb-3 lg:pb-0 xl:pb-0 2xl:pb-0
                  sm:text-[15px] md:text-[15px] lg:text-[17px] xl:text-[17px] 2xl:text-[17px]">Interventional Cardiologist</p>
                <p className="font-bold text-[#364154] 
                sm:text-[11px] md:text-[11px] lg:text-[13px] xl:text-[13px] 2xl:text-[13px]
                  ">Location: New York City, USA</p>

                <div className="
                 flex justify-between items-center flex-wrap">
                    <p className="font-bold text-[#364154] 
                    sm:text-[12px] md:text-[12px] lg:text-[13px] xl:text-[13px] 2xl:text-[13px]
                    ">Posted on: 25 May</p>
                    <p className="font-bold text-[#364154] 
                      sm:text-[12px] md:text-[12px] lg:text-[13px] xl:text-[13px] 2xl:text-[13px]">
                        Status: Published</p>
                </div>
            </div>

            <div className="sm:w-full md:w-full lg:w-[25%] xl:w-[25%] 2xl:w-[25%] 
             h-[100%] border-y-[1px] border-[#EAEAEA] py-[1rem] px-[1.370rem] flex items-center
             sm:justify-between md:justify-between lg:justify-around xl:justify-around 2xl:justify-around
              sm:border-r-[1px] md:border-r-[1px] lg:border-r-0 xl:border-r-0 2xl:border-r-0">
                <p className="sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[14px] 2xl:text-[14px] 
                text-[#364154] font-bold">98 Applied</p>
                <p className="sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[14px] 2xl:text-[14px]
                text-[#364154] font-bold">128 Job Views</p>
            </div>

            <div className="sm:w-full md:w-full lg:w-[25%] xl:w-[25%] 2xl:w-[25%] flex-wrap
             h-[100%] border-y-[1px] border-[#EAEAEA] py-[1rem] flex
            justify-center items-center px-[1.370rem]
            sm:flex-row md:flex-row lg:flex-col xl:flex-col 2xl:flex-col 
            sm:gap-[1rem] md:gap-[1rem] lg:gap-[0.6rem] xl:gap-[0.6rem] 2xl:gap-[0.6rem]
             sm:border-r-[1px] md:border-r-[1px] lg:border-r-0 xl:border-r-0 2xl:border-r-0">
                <div className="w-[134px] h-[24px] rounded-xl flex justify-center items-center" style={{ backgroundColor: days < 7 ? '#E867501A' : days === 7 ? '#54BDA52E' : '#EBCA241A' }}>
                    <p className="font-[600] sm:text-[10px] md:text-[10px] lg:text-[12px] xl:text-[12px] 2xl:text-[12px]"
                        style={{ color: days < 7 ? '#E86750' : days === 7 ? '#458677' : '#C4A923' }}>
                        {days === 30 ? "Premium • 30 Days" : `Free • ${days} Days Left`}</p>
                </div>

                <div className="leading-[14.4px] text-center">
                    <span className="text-[12px] text-[#364154]">Get more application by extending this job post.</span>
                    <span className="pl-1 text-[12px] font-[700] text-[#54BDA5]">Go Premium</span>
                </div>
            </div>

            <div className="sm:w-full md:w-full lg:w-[25%] xl:w-[25%] 2xl:w-[25%] h-[100%] border-y-[1px] border-[#EAEAEA] 
            border-r-[1px] rounded-tr-md rounded-br-md py-[1rem] px-[1.370rem] flex-wrap
            flex gap-[6px] items-center sm:justify-between md:justify-between lg:justify-center xl:justify-center 2xl:justify-center
             sm:border-r-[1px] md:border-r-[1px] lg:border-r-0 xl:border-r-0 2xl:border-r-0">
                <div className="w-[123px] h-[30px] bg-[#F5F8FE] hover:bg-[#e2edffe0] duration-500 ease-in-out rounded-md flex justify-center items-center cursor-pointer">
                    <p className="font-ptsans text-[13.1px] font-bold leading-[16px] text-[#6390DF]">See Applications</p>
                </div>

                <div className="relative" ref={dropdownRef}>
                    <div onClick={() => { setIsOpen(!isOpen) }} className="w-[86px] h-[30px] bg-[#F4F4F4] hover:bg-[#e4e3e3] duration-500 ease-in-out 
                rounded-md flex justify-center items-center gap-[0.6rem] cursor-pointer">
                        <p className="text-[#7B7B7B] font-ptsans font-bold text-[13px]">Actions</p>
                        <img src={dropdown} className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} alt='' />
                    </div>

                    {isOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
                            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Days</a>
                            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Job Views</a>
                            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Applied</a>
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default Card