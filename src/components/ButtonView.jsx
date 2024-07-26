import icon from '../assets/Post-a-job-layer.png'

const ButtonView = () => {
    return (
        <>
            <button className='w-[116px] h-[32px] bg-[#54BDA5] rounded-sm relative
            hover:bg-[#55ffd7c0] transition duration-500 ease-in-out'>
                <p className="font-ptsans text-[13px] text-white">Post A Job</p>

                <img src={icon} className='w-full absolute top-0 left-0 right-0 bottom-0' alt='' />
            </button>
        </>
    )
}

export default ButtonView