const Card = ({ value, icon, order }) => {
    return (
        <div className="sm:h-[107px] md:h-[107px] lg:h-[112px] xl:h-[113px] 2xl:h-[113px] 
        rounded-md bg-white
        flex flex-col justify-center items-center
        sm:w-[100%] md:w-[100%] lg:w-[23.730%] xl:w-[23.730%] 2xl:w-[23.730%]
        sm:gap-[1rem] md:gap-[1rem] lg:gap-0 xl:gap-0 2xl:gap-0"
            style={{
                borderBottom: `0.5rem solid ${order === 1 ? '#B9ECD4' : order === 2 ? '#ECD3B9' :
                    order === 3 ? '#ECB9B9' : '#8C97AB'
                    }`
            }}
        >
            <p className="font-ptsans text-[22px] text-[#364154]">{value}</p>

            <div className="flex justify-center items-center gap-[0.6rem]">
                <img src={icon} alt='icon' />
                <p className="font-ptsans text-[15px] text-[#5E6676]">Active Jobs</p>
            </div>
        </div>
    )
}

export default Card