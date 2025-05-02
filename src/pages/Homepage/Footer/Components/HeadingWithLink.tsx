'use client';

import CustomLink from "@/components/UI/CustomLink/CustomLink";
import { FunctionComponent, useRef } from "react";
import { useInView } from "framer-motion";
import SplitText from "@/components/Animation/SplitText/SplitText";

const HeadingWithLink: FunctionComponent = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { amount: 0.5, once: true });

    return (
        <div ref={ref} className="w-[88.5%] pl-[11.5%] py-[7rem] absolute top-0 left-0 bg-background-secondary z-50 -translate-y-1/2 shadow-[50px_130px_100px_rgba(0,0,0,0.15)]">
            <div className="mb-[5rem]">
                <SplitText isInView={isInView} duration={0.5} delay={0} text="Let’s make something" className="h1 text-text-primary" />
                <SplitText isInView={isInView} duration={0.5} delay={0.5} text="amazing together." className="h1 text-text-primary" />
            </div>
            <CustomLink isInView={isInView}>LET&apos;S GET STARTED</CustomLink>
        </div>
    );
}

export default HeadingWithLink;