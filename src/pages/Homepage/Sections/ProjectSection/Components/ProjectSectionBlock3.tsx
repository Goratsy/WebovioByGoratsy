'use client';

import Image from "next/image";
import { FunctionComponent, useRef } from "react";
import image2 from '../../../../../../public/homepage/project/Image2.jpg';
import oval2 from '../../../../../../public/homepage/project/Oval2.png';
import CustomLink from "@/components/UI/CustomLink/CustomLink";
import { CardBody, CardContainer, CardItem } from "@/components/Effects/Card3dEffect/Card3dEffect";
import SplitText from "@/components/Animation/SplitText/SplitText";
import { useInView } from "framer-motion";

const ProjectSectionBlock3: FunctionComponent = () => {
    const refBlock3 = useRef<HTMLDivElement>(null);
    const isInViewBlock3 = useInView(refBlock3, { amount: 0.7, once: true });

    return (
        <div ref={refBlock3} className="flex justify-left items-center">
            <div className="relative w-1/2">
                <Image src={image2} alt="image1" className="w-full" />
                <CardContainer containerClassName="absolute translate-x-[4rem] translate-y-[6.5rem] bottom-0 right-0">
                    <CardBody>
                        <div className="w-[45.3rem] rounded-xl bg-white shadow-[50px_50px_100px_rgba(0,0,0,0.15)] py-[3rem] px-[3rem] z-50">
                            <CardItem translateZ={40}><p className="text-quote mb-[2.5rem]">“Exhibit Systems is not a provider. They are not a supplier. They are a partner with expertise in making trade shows effective.”</p></CardItem>
                            <CardItem translateZ={30} className="flex justify-start items-center gap-[1.4rem]">
                                <Image src={oval2} alt="image-quote" width={46} height={46} className="shadow-[20px_25px_43px_rgba(0,0,0,0.15)] rounded-full" />
                                <div>
                                    <p className="text-quote-title text-nowrap mb-[4px]">Eunice Oliver</p>
                                    <p className="text-quote-body text-nowrap">Founder & CEO, Zeem</p>
                                </div>
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-start pl-[6.25%]">
                <div className="mb-[2.4rem]">
                    <SplitText isInView={isInViewBlock3} duration={0.5} delay={0} text="Is this the future of" className="h2 text-nowrap" />
                    <SplitText isInView={isInViewBlock3} duration={0.5} delay={0.5} text="Online Booking" className="h2 text-nowrap" />
                </div>
                <div className="mb-[9rem]">
                    <SplitText isInView={isInViewBlock3} duration={0.5} delay={1} text="You should be able to find several indispensable facts about motivation in the following paragraphs." className="text-paragraph w-[78%] mb-5" />
                    <SplitText isInView={isInViewBlock3} duration={0.5} delay={1.5} text="If there’s at least one fact you didn’t know before, imagine the difference it might make" className="text-paragraph w-[78%]" />
                </div>
                <CustomLink isInView={isInViewBlock3} delay={2} href="#">See Case Study</CustomLink>
            </div>
        </div>
    );
}

export default ProjectSectionBlock3;