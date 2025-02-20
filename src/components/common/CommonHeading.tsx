import React from 'react'
interface headingProps {
    myClass?: string;
    text: string;
}
const CommonHeading = ({ myClass, text }: headingProps) => {
    return (
        <h2
            className={`${myClass} text-black font-bold md:text-customXsm text-4xl`}
        >
            {text}
        </h2>
    );
};

export default CommonHeading