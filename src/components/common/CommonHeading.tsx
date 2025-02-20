import React from 'react'
interface headingProps {
    myClass?: string;
    text: string;
}
const CommonHeading = ({ myClass, text }: headingProps) => {
    return (
        <h2
            className={`${myClass} text-light-black font-bold lg:text-customXsm text-3xl tracking-customMd leading-customXmd`}
        >
            {text}
        </h2>
    );
};

export default CommonHeading