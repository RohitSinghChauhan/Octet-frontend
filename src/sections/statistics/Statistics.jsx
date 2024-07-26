import { useState } from "react";
import Volume from "./Volume"

const dummyVolumes = [
    { size: "40", greenLine: "20" },
    { size: "60", greenLine: "30" },
    { size: "90", greenLine: "50" },
    { size: "70", greenLine: "40" },
    { size: "100", greenLine: "60" },
    { size: "50", greenLine: "30" },
    { size: "90", greenLine: "50" },
    { size: "50", greenLine: "20" },
    { size: "100", greenLine: "70" },
    { size: "30", greenLine: "10" },
    { size: "70", greenLine: "40" },
    { size: "80", greenLine: "60" },
    { size: "60", greenLine: "30" },
    { size: "100", greenLine: "70" },
    { size: "80", greenLine: "40" },
    { size: "70", greenLine: "40" },
    { size: "90", greenLine: "50" },
    { size: "100", greenLine: "70" },
    { size: "40", greenLine: "20" },
    { size: "80", greenLine: "40" },
    { size: "60", greenLine: "30" },
    { size: "95", greenLine: "50" },
    { size: "90", greenLine: "50" },
    { size: "80", greenLine: "40" },
    { size: "100", greenLine: "70" },
    { size: "50", greenLine: "60" },
    { size: "70", greenLine: "40" },
    { size: "90", greenLine: "50" },
    { size: "98", greenLine: "60" },
    { size: "60", greenLine: "30" }
];

const dummyIndexs = Array.from({ length: 30 }, (_, index) => index + 1)


const Statistics = () => {
    const [active, setActive] = useState('monthly');

    return (
        <div className="container">

            <div className="wrapper">

                <div className="w-[100%] flex justify-between flex-wrap">
                    <p className="headline">Applications Received</p>

                    <div className="border-[1px] border-[#EAEAEA] rounded-md">
                        <button className="text-[13px] px-[0.7rem] py-[0.2rem]"
                            style={{
                                color: active === 'weekly' ? '#6390DF' : '#364154',
                                backgroundColor: active === 'weekly' ? '#F5F8FE' : 'transparent',
                                fontWeight: active === 'weekly' ? '700' : '400'
                            }}
                            onClick={() => setActive('weekly')}>Weekly</button>

                        <button className="border-l-[1px] border-[#EAEAEA] text-[13px]
                        py-[0.2rem] px-[0.6rem]"
                            style={{
                                color: active === 'monthly' ? '#6390DF' : '#364154',
                                backgroundColor: active === 'monthly' ? '#F5F8FE' : 'transparent',
                                fontWeight: active === 'monthly' ? '700' : '400'
                            }}
                            onClick={() => setActive('monthly')}>
                            Monthly
                        </button>
                    </div>

                </div>

                <div className="sm:h-[138px] md:h-[140px] lg:h-[238px] xl:h-[238px] 2xl:h-[238px]
                w-[100%] rounded-md border border-[#EAEAEA] flex flex-col 
                justify-center items-center gap-[0.3rem]
                sm:px-[0.4rem] md:px-[0.5rem] lg:px-[1.2rem] xl:px-[1.2rem] 2xl:px-[1.2rem]">

                    <div className="border-b-[1px] border-[#EAEAEA] h-[70%] w-full flex justify-between items-end
                    sm:gap-[0.3rem] md:gap-[0.3rem] lg:gap-0 xl:gap-0 2xl:gap-0">
                        {dummyVolumes.map(({ size, greenLine }, i) => (
                            <Volume key={i} containerH={`${size}%`} valueH={`${greenLine}%`} />
                        ))}
                    </div>

                    <div className="w-full justify-between items-center sm:hidden md:hidden lg:flex xl:flex 2xl:flex">
                        {dummyIndexs.map((i) => (
                            <p key={i} className="w-[17px] text-center text-[13px]  text-[#858789]">{i}</p>
                        ))}
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Statistics