import React , {useState} from 'react';
import CommonButton from './common/CommonButton';
import { STATS } from '../utils/helper'
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import CommonHeading from './common/CommonHeading';


const KickBox = () => {
    const [count, setCount] = useState(false);
    const { ref } = useInView({
        triggerOnce: true,
        onChange: (inView) => setCount(inView),
    });
    return (
        <div className='lg:pt-[134px] lg:pb-[128px] md:py-20 py-12'>
            <div className="container max-w-[1140px] mx-auto px-4">
                <CommonHeading text=' IMPLENIA KICKBOX' />
                <p className='max-w-[1090px] text-left font-light -tracking-customXmd md:text-customSm text-base leading-customXmd lg:pt-3 pt-2 text-light-black'>
                    Since 2019, our Kickbox Intrapreneurship Program has been inspiring employees across all divisions to turn their ideas into impactful solutions. From validating ideas (RedBox) to piloting projects (BlueBox) and driving implementation (GoldBox), Kickbox provides the tools and support to shape the future of Implenia. Become an intrapreneur yourself and bring your idea to life!
                </p>
                <div className="flex flex-wrap justify-between items-center md:gap-[77px] gap-[50px] pt-10">
                    <div
                        ref={ref}
                        className="flex justify-between gap-4"
                    >
                        {STATS.map((item, index) => (
                            <div
                                key={index}
                                className={`flex flex-col justify-center  ${index === 0 ? "md:mr-[71px]" : index === 1 && "md:mr-[54px]"
                                    }`}
                            >
                                <h3 className="text-customLg max-lg:text-7xl max-md:text-6xl max-sm:text-3xl max-lg:leading-[92px] max-md:leading-[80px] max-sm:leading-[60px] leading-[100px] text-light-orange tracking-[-0.66px]">
                                    +
                                    <CountUp
                                        start={0}
                                        end={
                                            count && index === 0
                                                ? 155
                                                : count && index === 1
                                                    ? 325
                                                    : count && index === 2
                                                        ? 250
                                                        : 0
                                        }
                                        duration={3}
                                    />
                                </h3>
                                <p className="font-bold text-customSm leading-customSm max-lg:text-xl max-md:text-lg max-sm:text-xs text-center -mt-4">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                    <CommonButton
                        text="Submit Your idea!"
                        myClass="!text-red  border-2 md:!px-[50px] sm:!py-[15.9px] px-[43.6px]  !border-red hover:!bg-red hover:!text-white"
                    />
                </div>
            </div>
        </div>
    );
};

export default KickBox;
