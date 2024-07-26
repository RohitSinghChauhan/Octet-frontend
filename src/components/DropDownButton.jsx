import profile from '../assets/Profile.png';
import dropdown from '../assets/Dropdown.png';

const DropDownButton = ({ ref, setIsOpen, isOpen }) => {
    return (
        <>
            <div className="flex gap-[0.7rem] items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <img src={profile} className='w-[26px] h-[26px]' alt='profile' />
                <p className='text-[13px] font-[700]'>My Profile</p>
                <img src={dropdown} className={`w-[10px] h-[6px] transform transition-transform ${isOpen ? 'rotate-180' : ''}`} alt='dropdown' />
            </div>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
                    <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Account</a>
                    <a href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                    <a href="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
                </div>
            )}
        </>
    )
}

export default DropDownButton