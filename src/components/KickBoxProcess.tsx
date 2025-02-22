import React from "react";
import CommonHeading from "./common/CommonHeading";
import { KICKBOX_PROCESS_LIST } from "@/utils/helper";
import Image from "next/image";
import CommonButton from "./common/CommonButton";

interface KickboxProcessItem {
    image: string;
    imageAlt: string;
    subTitle: string;
    title: string;
    description: string;
    boxDuration: string;
    budget: string;
}

const KickboxProcess = () => {
    return (
        <div className="xl:pt-[129px] xl:pb-36 lg:py-28 md:py-20 py-12">
            <div className="max-w-[1172px] mx-auto px-4">
                <CommonHeading text="KICKBOX PROCESS" myClass="pb-[17px]" />
                <p className="max-w-[1090px] text-left font-light -tracking-customXmd md:text-customSm text-base leading-customXmd lg:pt-4 pt-2 text-light-black">The Kickbox program at Implenia guides participants through three key phases to turn their ideas into impactful solutions: 1. RedBox for validation, 2. BlueBox for piloting, and 3. GoldBox for implementation. To progress through each phase, you’ll work to continuously optimize your idea and demonstrate its potential to internal Implenia sponsors.</p>
                <div className="flex items-center xl:gap-[51px] lg:gap-2 lg:pt-16 max-lg:flex-wrap -mx-3 xl:justify-center max-sm:justify-center">
                    {KICKBOX_PROCESS_LIST.map((obj: KickboxProcessItem, i: number) => (
                        <div
                            key={i}
                            className="h-full max-lg:w-1/2 max-sm:w-full max-lg:pt-12 max-md:pt-10"
                        >
                            <Image
                                src={obj.image}
                                width={227}
                                height={92}
                                alt={obj.imageAlt}
                                className="mx-auto max-md:w-[150px] w-[227px] h-[92px] max-md:h-[60px] pointer-events-none object-cover"
                            />
                            <div className="border border-black max-sm:mx-auto max-w-[323px] max-h-[457px] max-md:max-h-[334px] rounded-[28px] px-6 pt-8 max-sm:p-4 pb-[19px] mt-[39px] max-md:mt-7 max-sm:mt-4 flex flex-col">
                                <p
                                    className={`${i === 0
                                            ? "text-red"
                                            : i === 1
                                                ? "text-blue"
                                                : "text-light-orange"
                                        } font-semibold text-customSm max-sm:text-lg leading-customSm`}
                                >
                                    {obj.subTitle}
                                </p>
                                <h4 className="font-semibold text-customXxmd text-light-black max-md:text-3xl max-sm:text-2xl leading-customXmd py-2 max-sm:pt-0 max-sm:pb-1 -tracking-customMd">
                                    {obj.title}
                                </h4>

                                <div className="overflow-auto flex-grow scrollbar-hide">
                                    <p className="font-light text-customSm max-md:text-lg max-sm:text-base -tracking-customXmd leading-customXmd text-light-black pb-7 max-sm:pb-5">
                                        {obj.description}
                                    </p>
                                    </div>
                                    <p className="font-light text-customSm max-md:text-lg max-sm:text-base -tracking-customXmd leading-customXmd text-light-black">
                                        {obj.boxDuration}
                                    </p>
                                    <p className="font-light text-customSm max-md:text-lg max-sm:text-base -tracking-customXmd leading-customXmd text-light-black">
                                        {obj.budget}
                                    </p>
                                
                            </div>

                        </div>
                    ))}
                </div>
                <CommonButton
                    myClass="!border-red !text-red hover:bg-red hover:!text-white md:!px-[44.9px] xl:!ml-8 md:!py-[15.9px] mt-[39px] max-sm:mt-7 !flex  max-sm:!mx-auto"
                    text="Start your RedBox!"
                />
            </div>
        </div>
    );
};

export default KickboxProcess;
