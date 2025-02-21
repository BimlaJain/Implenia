import React from 'react';
import CommonHeading from './common/CommonHeading';
import CommonButton from './common/CommonButton';
import {  STORIES_LIST } from '@/utils/helper';
import Image from 'next/image';

interface StoryData {
    image: string;
    imageAlt: string;
    title: string;
}

const Stories: React.FC = () => {
    return (
        <div>
            <div className='lg:pt-[128px] lg:pb-[144px] md:py-20 py-12'>
                <div className="container max-w-[1140px] mx-auto px-4">
                    <CommonHeading text="INTRAPRENEURSHIP STORIES" />
                    <div className="flex flex-wrap xl:gap-10 gap-6  pt-[25px] pb-[39px] max-sm:justify-center">
                        {STORIES_LIST.map((story: StoryData, index: number) => (
                            <div key={index} className='border border-black rounded-[28px] xl:max-w-[323px] md:max-w-[308px] max-w-[278px]'>
                                <Image className='pointer-events-none' src={story.image} alt={story.imageAlt} width={323} height={207} />
                                <h4 className='font-semibold md:text-custom-xmd text-3xl md:leading-custom-xsm leading-8 md:pl-[26px] pl-4 md:pt-[51px] pt-8 md:pb-[61px] pb-10'>
                                    {story.title}
                                </h4>
                            </div>
                        ))}
                    </div>
                    <CommonButton
                        myClass="!border-red !border-2 !text-red hover:!bg-red hover:!text-white sm:!px-[74.18px] sm:!py-[15.5px] px-[59.6px] !mt-[39px] max-sm:mt-7 max-md:!mx-auto !flex"
                        text="More Stories"
                    />
                </div>
            </div>
        </div>
    );
};

export default Stories;