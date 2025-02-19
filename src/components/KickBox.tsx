import React from 'react';
import CustomButton from './common/CommonButton';
import {STATS} from '../utils/helper'


const KickBox = () => {
    return (
        <div id='stories' className='lg:pt-[134px] lg:pb-[128px] md:py-20 py-12'>
            <div className="container max-w-[1140px] mx-auto px-4">
                <h2 className='text-black font-bold md:text-customXsm text-4xl'>IMPLENIA KICKBOX</h2>
                <p className='max-w-[1090px] text-left font-light md:text-customSm text-base leading-[27px] lg:pt-4 pt-2 text-light-black'>
                    Since 2019, our Kickbox Intrapreneurship Program has been inspiring employees across all divisions to turn their ideas into impactful solutions. From validating ideas (RedBox) to piloting projects (BlueBox) and driving implementation (GoldBox), Kickbox provides the tools and support to shape the future of Implenia. Become an intrapreneur yourself and bring your idea to life!
                </p>
                <div className="flex flex-wrap xl:justify-between justify-center md:gap-[77px] gap-[50px] pt-10 items-center">
                    <div className='flex flex-wrap justify-center md:gap-[61px] gap-[40px]'>
                        {STATS.map((stat, index) => (
                            <div key={index}>
                                <p className='md:text-customLg text-5xl font-normal text-light-orange max-sm:text-center'>{stat.value}</p>
                                <p className='font-bold md:text-[21px] text-lg whitespace-nowrap'>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                    <CustomButton
                        text="Submit Your idea!"
                        myClass="!text-red max-lg:!mx-auto !flex border-2 md:!px-[50px] md:!py-[10.4px] px-[43.6px] py-[7px] !border-red hover:!bg-red hover:!text-white"
                    />
                </div>
            </div>
        </div>
    );
};

export default KickBox;
