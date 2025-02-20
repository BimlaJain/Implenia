import React from 'react'
import CommonHeading from './common/CommonHeading'
import CommonButton from './common/CommonButton';
import { STORIES_LIST } from '@/utils/helper';
import Image, { StaticImageData } from 'next/image';

interface StoriesData {
    image: string;
    imageAlt: string;
    title: string;
}

const Intrapreneurship = () => {
    return (
        <div id="stories" className="xl:pt-32 xl:pb-36 lg:py-28 md:py-20 py-12">
            <div className="container max-w-[1172px] mx-auto px-4">
                <CommonHeading text="INTRAPRENEURSHIP STORIES" />
                <div className='max-w-[1103px] mx-auto'>
                    <div className="flex -mx-[25.5px] max-lg:-mx-3 max-md:flex-wrap justify-center">
                        {STORIES_LIST.map((obj:StoriesData ,  i:number) => (
                            <div
                                key={i}
                                className="w-1/3 max-md:w-1/2 max-sm:w-full xl:px-[25.5px] px-3  pt-[25px]"
                            >
                                <div className="border border-black rounded-[28px] h-full overflow-hidden">
                                    <Image
                                        src={obj.image}
                                        alt={obj.imageAlt}
                                        width={323}
                                        height={207}
                                        className="w-full max-sm:h-[180px] object-cover rounded-[28px] pointer-events-none"
                                    />
                                    <p className="font-semibold text-[35px] max-lg:text-3xl max-sm:text-2xl leading-[44px] pt-[51px] pb-16 px-6">
                                        {obj.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <CommonButton
                    myClass="!border-red !border-2 !text-red hover:!bg-red hover:!text-white sm:!px-[74.18px] sm:!py-[15.5px] px-[59.6px] !mt-[39px] max-sm:mt-7 max-md:!mx-auto !flex lg:!ml-12"
                    text="More Stories"
                />
            </div>
        </div>
    );
}

export default Intrapreneurship