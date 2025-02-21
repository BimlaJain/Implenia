
import React from 'react'
import Header from "./common/NavBar"
import CustomButton from './common/CommonButton'
const Hero = () => {
    return (
        <div id='home' className='bg-center  bg-cover  bg-no-repeat relative pb-16 overflow-hidden bg-hero-bg-image max-sm:bg-black/20' >
            <Header />
            <img data-aos="fade-right" className=' absolute  lg:top-[47%] md:top-[36%] top-[47%] xl:size-[402px] lg:size-[340px] md:size-[350px] size-[200px]' src="../assets/images/webp/dustbin.webp" alt="dustbin" />
            <div className="container max-w-[1172px] mx-auto px-4 relative z-20">
                <div className="flex flex-col xl:pt-[350px] lg:pt-[330px] md:pt-[185px] pt-[150px] xl:pl-5 relative z-20 ">
                    <p className='font-bold text-customSm [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] text-white text-left leading-customSm '>Shape the future of Implenia!</p>
                    <h1 className="relative leading-customMd tracking-customSm lg:text-customMd md:text-6xl text-customXxsm [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] font-bold md:pt-[15px] text-white lg:max-w-[700px] max-w-[550px]">
                        WE ARE LOOKING
                        FOR YOUR IDEA
                    </h1>
                </div>
                <CustomButton text="Bring your idea to life!" myClass="!mt-[25px] md:!mb-[120px] md:!mb-[100px] !ml-5  !relative !z-20 hover:!text-black hover:!bg-white" />
            </div>
        </div>
    )
}

export default Hero