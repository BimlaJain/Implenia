
import React from 'react'
import Header from "./common/Header"
import CustomButton from './common/CommonButton'
const Hero = () => {
    return (
        <div id='home' className='bg-center hero-bg-image bg-cover bg-no-repeat relative pb-20 overflow-hidden' style={{ backgroundImage: `url(/assets/images/webp/hero-bg.webp)` }}>
            <Header />
            <img data-aos="fade-right" className=' absolute  md:top-[45%] top-[49%] lg:w-[450px] lg:h-[402px] md:size-[350px] size-[200px]' src="../assets/images/webp/dustbin.webp" alt="dustbin" />
            <div className="container max-w-[1140px] mx-auto">
                <div className="flex flex-col max-xl:justify-center max-xl:items-center lg:pt-[350px] md:pt-[290px] pt-[150px] xl:pl-14 relative z-20 ">
                    <h2 className='font-bold text-customSm [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] text-white text-left'>Shape the future of Implenia!</h2>
                    <h1 className="relative lg:text-customMd text-5xl [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] max-xl:text-center font-bold md:pt-[15px] text-white lg:max-w-[700px] max-w-[450px]">
                        WE ARE LOOKING
                        FOR YOUR IDEA
                    </h1>
                </div>
                <CustomButton text="Bring your idea to life!" myClass="!mt-[25px] md:!mb-[120px] md:!mb-[100px] !ml-[52px] max-xl:!flex max-xl:!mx-auto  !relative !z-20 hover:!text-black hover:!bg-white" />
            </div>
        </div>
    )
}

export default Hero