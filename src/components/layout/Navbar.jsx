import logo from '../../assets/Logo.png';
import buttonIcon from '../../assets/Go-unlimited-button-layer.png';
import { useEffect, useRef, useState } from 'react';
import { IconButton } from '@mui/material';
import MyDrawer from '../MyDrawer';
import { FaBars } from 'react-icons/fa';
import DropDownButton from '../DropDownButton';

const menuItems = ['Dashboard', 'Jobs', 'Applicants', 'Post a Job'];

const Navbar = () => {
    const [active, setActive] = useState(menuItems[0]);
    const [drawerOpen, setDrawerOpen] = useState(false);
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

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    return (
        <>
            <div className="w-[100%] bg-white h-[70px] flex items-center justify-between px-[3rem]
        sm:hidden md:hidden lg:flex xl:flex 2xl:flex"
            >

                <div className='flex gap-[3rem] items-center'>
                    <img src={logo} className='w-[120px] h-[27.8px]' alt='logo' />

                    <div className='flex items-center'>
                        {menuItems.map((e) => (
                            <div key={e}
                                className='h-[70px] flex flex-col justify-end gap-[1.170rem]'
                                onClick={() => setActive(e)}
                            >
                                <p className='text-[#364154] cursor-pointer text-[14px] text-center'
                                    style={{
                                        fontWeight: active === e ? '700' : '400',
                                    }}>
                                    {e}
                                </p>

                                <div className='h-[4px] w-[100%] rounded-md px-[2.8rem]'
                                    style={{
                                        backgroundColor: active === e ? '#DC832D' : 'transparent',
                                    }}></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='flex gap-[2rem] items-center'>
                    <button className='w-[132px] h-[32px] bg-[#DC832D] rounded-sm relative
            hover:bg-[#ff9a3b] transition duration-500 ease-in-out'>
                        <p className="text-[13px] text-white">Go Unlimited</p>

                        <img src={buttonIcon} className='w-full absolute top-0 left-0 right-0 bottom-0' alt='' />
                    </button>

                    <div className="relative" ref={dropdownRef}>
                        <DropDownButton ref={dropdownRef} setIsOpen={setIsOpen} isOpen={isOpen} /></div>
                </div>
            </div>

            <div className="bg-white w-[100%] h-[55px] flex items-center justify-between px-[1.8rem]
        sm:flex md:flex lg:hidden xl:hidden 2xl:hidden"
            >
                <img src={logo} className='w-[120px] h-[28px]' alt='logo' />
                <IconButton onClick={handleDrawerOpen}>
                    <FaBars />
                </IconButton>
                <MyDrawer open={drawerOpen} onClose={handleDrawerClose} />
            </div>
        </>
    )
}

export default Navbar