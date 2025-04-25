'use client';

import Image from "next/image";
import { FunctionComponent, useRef } from "react";
import image0 from '../../../../../../public/homepage/project/Image0.jpg';
import oval0 from '../../../../../../public/homepage/project/Oval0.png';
import CustomLink from "@/components/UI/CustomLink/CustomLink";
import { CardBody, CardContainer, CardItem } from "@/components/Effects/Card3dEffect/Card3dEffect";
import SplitText from "@/components/Animation/SplitText/SplitText";
import { useInView } from "framer-motion";


const ProjectSectionBlock1: FunctionComponent = () => {
    const refBlock1 = useRef<HTMLDivElement>(null);
    const isInViewBlock1 = useInView(refBlock1, { amount: 0.5, once: true });

    return (
        <div ref={refBlock1} className="flex justify-left items-center">
            <div className="relative w-1/2">
                <Image src={image0} alt="image1" className="w-full" />
                <CardContainer containerClassName="absolute translate-x-[4rem] translate-y-[6.5rem] bottom-0 right-0">
                    <CardBody>
                        <div className="w-[45.3rem] rounded-xl bg-white shadow-[50px_50px_100px_rgba(0,0,0,0.15)] py-[3rem] px-[3rem] z-50">
                            <CardItem translateZ={40}><p className="text-quote mb-[2.5rem]">“In my history of working with trade show vendors, I can honestly say that there is not one company that I've ever worked with that has better service than Exhibit Systems.”</p></CardItem>
                            <CardItem translateZ={30} className="flex justify-start items-center gap-[1.4rem]">
                                <Image src={oval0} alt="image-quote" width={46} height={46} className="shadow-[20px_25px_43px_rgba(0,0,0,0.15)] rounded-full" />
                                <div>
                                    <p className="text-quote-title text-nowrap mb-[4px]">Genevieve Rodriquez</p>
                                    <p className="text-quote-body text-nowrap">Founder & CEO, Webovio</p>
                                </div>
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-start pl-[6.25%]">
                <div className="mb-[2.4rem]">
                    <SplitText isInView={isInViewBlock1} duration={0.5} delay={0} text="The wall new" className="h2 text-nowrap"  />
                    <SplitText isInView={isInViewBlock1} duration={0.5} delay={0.5} text="Balenciaga.com" className="h2 text-nowrap " />
                </div>
                <div className="mb-[9rem]">
                    <SplitText isInView={isInViewBlock1} duration={0.5} delay={1} text="This article is floated online with an aim to help you find the best dvd printing solution." className="text-paragraph w-[78%] mb-5" />
                    <SplitText isInView={isInViewBlock1} duration={0.5} delay={1.5} text="Dvd printing is an important feature used by large and small DVD production houses to print information on DVDs." className="text-paragraph w-[78%]" />
                </div>
                <CustomLink isInView={isInViewBlock1} delay={2} href="#">See Case Study</CustomLink>
            </div>
        </div>
    );
}

export default ProjectSectionBlock1;