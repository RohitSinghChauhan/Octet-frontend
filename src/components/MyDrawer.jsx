import React from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { FaTimes } from 'react-icons/fa';
import dropdown from '../assets/Dropdown.png';
import buttonIcon from '../assets/Go-unlimited-button-layer.png';
import profile from '../assets/Profile.png';

const menuItems = ['Dashboard', 'Jobs', 'Applicants', 'Post a Job'];

const MyDrawer = ({ open, onClose, dropDownButton }) => {
    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <div className="sm:w-[200px] md:w-[250px] lg:w-[260px] xl:w-[260px] 2xl:w-[260px] px-3">
                <div className="flex justify-end p-2">
                    <IconButton onClick={onClose}>
                        <FaTimes />
                    </IconButton>
                </div>
                <List>
                    {menuItems.map((text, index) => (
                        <ListItem key={index} onClick={onClose}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>

                <div className="flex flex-col mt-4 p-4 border-t">
                    <div className='flex flex-col gap-[1rem]'>
                        <p>Account</p>
                        <p>Profile</p>
                        <p>Log Out</p>
                    </div>

                    <button className='w-full h-[32px] bg-[#DC832D] mt-[1rem]
                     rounded-sm relative hover:bg-[#ff9a3b] transition duration-500 ease-in-out mb-4'>
                        <p className="text-[13px] text-white relative z-10">Go Unlimited</p>
                        <img src={buttonIcon} className='w-full absolute top-0 left-0 right-0 bottom-0' alt='' />
                    </button>
                </div>
            </div>
        </Drawer>
    );
};

export default MyDrawer;
