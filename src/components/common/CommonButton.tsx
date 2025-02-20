import React from "react";

interface CommonButtonProps {
    text: string;
    myClass?: string;
    customOnClick?: () => void;

}

const CommonButton: React.FC<CommonButtonProps> = ({ text, myClass = "", customOnClick, }) => {
    return (
        <button
            onClick={customOnClick}
            className={`text-customSm leading-customSm font-bold lg:py-[22px] lg:px-[52.4px] py-[10px] md:px-8  px-6 border border-white rounded-[47px] text-white transition-all duration-500  ${myClass}
`}
        >
            {text}
        </button >
    );
};

export default CommonButton;