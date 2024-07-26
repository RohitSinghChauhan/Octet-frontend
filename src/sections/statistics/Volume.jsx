const Volume = ({ containerH = '', valueH = '' }) => {
    return (
        <div className='w-[17px] bg-[#EFF6FF] flex flex-col justify-end rounded-t-sm' style={{ height: containerH }}>
            <div className='w-full bg-[#94E6D4]' style={{ height: valueH }}>
            </div>
        </div>
    )
}

export default Volume