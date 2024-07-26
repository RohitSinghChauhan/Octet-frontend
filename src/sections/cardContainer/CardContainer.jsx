import element1 from '../../assets/Element-1.png';
import element2 from '../../assets/Element-2.png';
import activejobsicon from '../../assets/Active-jobs-icon.png';
import newapplication from '../../assets/New-application-icon.png';
import candidate from '../../assets/CanditateToBeReviewed-icon.png';
import shortlisted from '../../assets/Shortlisted-icon.png';
import Card from './Card';
import ButtonView from '../../components/ButtonView';

const CardContainer = () => {
    return (
        <>
            <div className="h-[144px] w-[100%] bg-[#122443] justify-between px-[0.9rem]
            sm:hidden md:hidden lg:flex xl:flex 2xl:flex">
                <div className="flex flex-col justify-end pb-[1rem]">
                    <img src={element2} className='w-[52px] h-[52px]' alt='' />
                </div>

                <div className='w-[85%] pt-[1.4rem] relative'>
                    <div className="flex justify-between items-center h-[31px]">
                        <p className="text-[24px] font-ptsans text-white">Hello, Paramedic Medical Supplies</p>

                        <ButtonView />
                    </div>

                    <div className='absolute top-[54%] flex justify-between w-full'>
                        <Card value={180} icon={activejobsicon} order={1} />
                        <Card value={180} icon={newapplication} order={2} />
                        <Card value={22} icon={candidate} order={3} />
                        <Card value={178} icon={shortlisted} order={4} />
                    </div>
                </div>

                <div className="pt-[1rem]">
                    <img src={element1} className=' w-[52px] h-[52px]' alt='' />
                </div>
            </div>

            {/*For Mobile Screen*/}
            <div className="w-[100%] bg-[#122443] justify-between px-[0.1rem] py-[1rem]
            sm:flex md:flex lg:hidden xl:hidden 2xl:hidden">
                <div className="flex flex-col justify-end pb-[1rem]">
                    <img src={element2} className='w-[50px] h-[52px]' alt='' />
                </div>

                <div className='w-[100%] pt-[1rem]'>
                    <div className="flex justify-between items-center
                    mb-[1.7rem] flex-wrap"
                    >
                        <p className="text-[20px] font-ptsans text-white">Hello, Paramedic Medical Supplies</p>

                        <ButtonView />
                    </div>

                    <div className='flex flex-col gap-[1rem]'>
                        <Card value={180} icon={activejobsicon} order={1} />
                        <Card value={180} icon={newapplication} order={2} />
                        <Card value={22} icon={candidate} order={3} />
                        <Card value={178} icon={shortlisted} order={4} />
                    </div>
                </div>

                <div className="pt-[1rem]">
                    <img src={element1} className=' w-[52px] h-[52px]' alt='' />
                </div>
            </div>


        </>
    )
}

export default CardContainer