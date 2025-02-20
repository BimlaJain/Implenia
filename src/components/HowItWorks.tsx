"use client";
import React, { useState } from 'react';
import CommonHeading from './common/CommonHeading';

const Works = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handleImageClick = () => {
        setIsVideoPlaying(true);
    };

    return (
        <div className='bg-light-grey lg:pt-[128px] lg:pb-[144px] md:py-20 py-12'>
            <div className="container max-w-[1140px] mx-auto px-4">
                <CommonHeading text='HOW IT WORKS' myClass='lg:!mb-[64px] md:!mb-10 !mb-5'/>
                <div className="relative max-w-[1064px] xl:h-[580px] lg:h-[540px] md:h-[400px] sm:h-[383px] h-[186px] md:rounded-[25px] rounded-xl overflow-hidden md:ml-[27px] ml-4">
                    {isVideoPlaying ? (
                        <iframe className='w-full h-full' src="https://www.youtube.com/embed/pX0jXyuj7QE?autoplay=1" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                    ) : (
                        <img
                            className='md:rounded-[25px] rounded-xl cursor-pointer'
                            src="/assets/images/webp/works-image.webp"
                            alt="work"
                            onClick={handleImageClick}
                        />
                    )}
                    <div className='bg-dark-orange lg:max-w-[372px] md:max-w-[244px] max-w-[150px] md:px-2 px-1 lg:py-[22px] md:py-3 py-1 absolute md:top-[5%] top-[2%] left-[2%] md:left-[3%] z-10'>
                        <p className='max-w-[372px] font-bold lg:text-[21px] md:leading-[21px] leading-3 md:text-base text-[10px] text-center'>
                            VIDEO CAN BE EXCHANGED FOR CAMPAIGNS.
                        </p>
                        <p className='font-bold lg:text-[21px] md:text-base md:leading-[21px] leading-3 text-[10px] max-w-[300px] mx-auto text-center lg:pt-4 md:pt-2 pt-1'>
                            -Title: Name of Campaign <br /> -Button: Join the campaign!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;
