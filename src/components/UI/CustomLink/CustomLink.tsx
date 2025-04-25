'use client'

import SplitText from "@/components/Animation/SplitText/SplitText";
import MagneticEffect from "@/components/Effects/MagneticEffect/MagneticEffect";
import { FunctionComponent, use, useEffect } from "react";

interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    isInView?: boolean;
}

const CustomLink: FunctionComponent<CustomLinkProps> = ({ children, className, delay, isInView}) => {

    return (
        <MagneticEffect className="inline-block">
            <SplitText isInView={isInView} delay={delay} text={String(children)} tag="a" className={`${className} inline-block relative text-[1.6rem] font-bold text-link hover:text-link-hover active:text-link-active visited:text-link-visited selection:bg-link-selection selection:text-white cursor-pointer duration-500 ease-out-cubic
                        before:absolute before:top-1/2 before:-left-5 before:rounded-full before:origin-center before:w-0 before:h-0 hover:before:w-2 hover:before:h-2 before:bg-link-hover before:content-[''] before:ease-in-out before:duration-[250ms] before:-translate-y-1/2`} />

        </MagneticEffect>
    );
}

export default CustomLink;