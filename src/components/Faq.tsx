import React, { useState, useRef } from "react";
import Image from "next/image";
import { ACCORDION_DATA } from "../utils/helper";
import CommonHeading from "./common/CommonHeading";

interface AccordionItem {
    heading: string;
    description?: string;
}
const Faq: React.FC = () => {
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
    const toggleAccordion = (index: number): void => {
        setOpenAccordion((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className=" lg:pb-[146px] lg:pt-[128px] md:py-20 py-12 bg-light-grey">
            <div className="container max-w-[1140px] mx-auto px-4">
                <CommonHeading text="FAQs" />
                <div className="pt-5 max-w-[1080px] mx-auto">
                    {ACCORDION_DATA.map((item: AccordionItem, index: number) => (
                        <div
                            key={index}
                            className="relative mb-4 pb-[14px] border-b border-grey"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="font-semibold md:text-customSm text-lg leading-customSm text-black font-pinky flex justify-between items-center text-start w-full"
                            >
                                {item.heading}
                                <Image
                                    src="/assets/images/svg/faq-arrow.svg"
                                    alt={openAccordion === index ? "Collapse" : "Expand"}
                                    width={21}
                                    height={21}
                                    className={`transition-transform duration-500 transform ${openAccordion === index ? "rotate-90" : "rotate-0"
                                        }`}
                                />
                            </button>
                            <div
                                ref={(el) => {
                                    if (el) contentRefs.current[index] = el;
                                }}
                                className="transition-all duration-500 ease-in-out overflow-hidden"
                                style={{
                                    maxHeight:
                                        openAccordion === index
                                            ? `${contentRefs.current[index]?.scrollHeight || 0}px`
                                            : "0",
                                }}
                            >
                                <div>
                                    {item.description && (
                                        <p className="font-light md:text-customSm -tracking-customXmd text-lg leading-custom-2sm pt-4 text-light-black/70">
                                            {item.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;
