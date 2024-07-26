import logo from '../../assets/Logo.png';
import call from '../../assets/Call.png';
import email from '../../assets/Email.png';
import fb from '../../assets/Facebook.png';
import insta from '../../assets/Instagram.png';
import twitter from '../../assets/Twitter.png';

const links = ['Home', 'About', 'Contact', 'FAQ', 'Privacy Policy', 'Terms & Conditions'];

const Footer = () => {
    return (
        <div className="bg-[#F8F8FF] w-[100%] overflow-hidden py-[1.3rem] flex justify-center items-center
        sm:mt-[2rem] md:mt-[2rem] lg:mt-[3.3rem] xl:mt-[3.3rem] 2xl:mt-[3.3rem]">
            <div className="w-[84%] sm:h-[196px] md:h-[196px] lg:h-[101px] xl:h-[101px] 2xl:h-[101px]
             flex flex-col justify-between sm:gap-[1rem] md:gap-[1rem] lg:gap-0 xl:gap-0 2xl:gap-0">

                <div>
                    <img src={logo} className='w-[111px] h-[26px]' alt='' />
                </div>

                <div className='flex justify-between items-center sm:flex-col md:flex-col
                    lg:flex-row xl:flex-row 2xl:flex-row
                    sm:gap-[1rem] md:gap-[1rem] lg:gap-0 xl:gap-0 2xl:gap-0'>
                    <div className='flex sm:gap-x-[1rem] md:gap-x-[1rem] lg:gap-x-[2rem] xl:gap-x-[2rem] 2xl:gap-x-[2rem]
                     gap-y-1 flex-wrap'>
                        {links.map((e) => (
                            <p key={e} className='text-[13px] font-[500] text-[#364154] cursor-pointer'>{e}</p>
                        ))}</div>

                    <div className='sm:w-full md:w-full lg:w-auto xl:w-auto 2xl:w-auto 
                    flex sm:items-start md:items-start lg:items-center xl:items-center 2xl:items-center
                    sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row
                    sm:gap-[0.2rem] md:gap-[0.2rem] lg:gap-[2rem] xl:gap-[2rem] 2xl:gap-[2rem]'>
                        <div className='flex items-center  gap-[0.7rem]'>
                            <img src={call} className='w-[17px] h-[15px]' alt='call' />
                            <p className='text-[#364154] text-[13px]'>(+1) - 25698 89693</p>
                        </div>

                        <div className='flex items-center gap-[0.7rem]'>
                            <img src={email} className='w-[17px] h-[15px]' alt='email' />
                            <p className='text-[#364154] text-[13px]'>customercare@likehire.com</p>
                        </div>
                    </div>

                </div>

                <div className='flex sm:flex-row md:flex-row lg:flex-col xl:flex-col 2xl:flex-col
                sm:justify-between md:justify-between lg:justify-normal xl:justify-normal 2xl:justify-normal
                flex-wrap gap-y-3'>
                    <p className='text-[12px] text-[#364154]'>© 2020 Like Hire. All rights reserved</p>

                    <div className='flex justify-end items-center gap-[1rem]'>
                        <img src={fb} alt='facebook' className='cursor-pointer' />
                        <img src={twitter} alt='facebook' className='cursor-pointer' />
                        <img src={insta} alt='facebook' className='cursor-pointer' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer