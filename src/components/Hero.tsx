
import React from 'react'
import Header from "./common/NavBar"
import CustomButton from './common/CommonButton'
import Image from 'next/image'
const Hero = () => {
    return (
        <div id='home' className='bg-center  bg-cover  bg-no-repeat relative pb-16 overflow-hidden bg-hero-bg-image max-sm:bg-black/20' >
            <Header />
            <Image data-aos="fade-right" className=' absolute xl:z-30 lg:top-[47%] md:top-[36%] top-[47%] xl:size-[402px] lg:size-[300px] md:size-[280px] size-[200px]' width={402} height={402} src="/assets/images/webp/dustbin.webp" alt="dustbin" />
            <div className="container max-w-[1172px] mx-auto px-4 relative z-20">
                <div className="flex flex-col xl:pt-[350px] lg:pt-[330px] md:pt-[185px] pt-[150px] pl-7 relative z-20 ">
                    <p className='font-bold text-customSm [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] text-white text-left leading-customSm '>Shape the future of Implenia!</p>
                    <h1 className="relative !leading-customMd z-40 tracking-customSm md:pt-[15px] lg:text-customMd md:text-6xl text-customXxsm [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] font-bold text-white lg:max-w-[700px] max-w-[550px]">
                        WE ARE LOOKING
                        FOR YOUR IDEA
                    </h1>
                </div>
                <CustomButton text="Bring your idea to life!" myClass="!mt-[25px] md:!mb-[120px] md:!mb-[100px] !ml-7  hover:!text-black hover:!bg-white" />
            </div>
        </div>
    )
}

export default Hero