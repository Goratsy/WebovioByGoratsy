'use client';

import { FunctionComponent, useRef } from "react";
import SplitText from "@/components/Animation/SplitText/SplitText";
import { useInView } from "framer-motion";


const ProjectSectionHeading: FunctionComponent = () => {
    const refHeading = useRef<HTMLDivElement>(null);
    const isInViewHeading = useInView(refHeading, { amount: 0.5, once: true });

    return (

        <div ref={refHeading} className="pl-[11.5%] max-tablet:pl-[5%] mb-[10.4rem] flex flex-row justify-start items-center gap-[10.6%]">
            <h2 className="h2">
                <SplitText isInView={isInViewHeading} tag='span' text="We Have Some" className="block" duration={0.5} delay={0} />
                <SplitText isInView={isInViewHeading} tag='span' text="Awesomr Project." className="block" duration={0.5} delay={0.5} />
            </h2>
            <SplitText isInView={isInViewHeading} text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," className="text-paragraph w-2/5" />
        </div>

    );
}

export default ProjectSectionHeading;