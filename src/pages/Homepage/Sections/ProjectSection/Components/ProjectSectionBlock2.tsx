'use client';

import Image from "next/image";
import { FunctionComponent, useRef } from "react";
import image1 from '../../../../../../public/homepage/project/Image1.jpg';
import oval1 from '../../../../../../public/homepage/project/Oval1.png';
import CustomLink from "@/components/UI/CustomLink/CustomLink";
import { CardBody, CardContainer, CardItem } from "@/components/Effects/Card3dEffect/Card3dEffect";
import SplitText from "@/components/Animation/SplitText/SplitText";
import { useInView } from "framer-motion";

const ProjectSectionBlock2: FunctionComponent = () => {
    const refBlock2 = useRef<HTMLDivElement>(null);
    const isInViewBlock2 = useInView(refBlock2, { amount: 0.7, once: true });

    return (
        <div ref={refBlock2} className="flex justify-left items-center flex-row-reverse my-[16.5rem]">
            <div className="relative w-1/2">
                <Image src={image1} alt="image1" className="w-full" />
                <CardContainer containerClassName="absolute -translate-x-[4rem] translate-y-[6.5rem] bottom-0 left-0 ">
                    <CardBody>
                        <div className="w-[45.3rem] rounded-xl bg-white shadow-[50px_50px_100px_rgba(0,0,0,0.15)] py-[3rem] px-[3rem] z-50">
                            <CardItem translateZ={40}><p className="text-quote mb-[2.5rem]">“I know they are going to be honest with me. I am not going to get a subpar product; I know it is going to be good. That is the number one advantage of working with Exhibit Systems.</p></CardItem>
                            <CardItem translateZ={30} className="flex justify-start items-center gap-[1.4rem]">
                                <Image src={oval1} alt="image-quote" width={46} height={46} className="shadow-[20px_25px_43px_rgba(0,0,0,0.15)] rounded-full" />
                                <div>
                                    <p className="text-quote-title text-nowrap mb-[4px]">Lina Hart</p>
                                    <p className="text-quote-body text-nowrap">Founder & CEO, Jico</p>
                                </div>
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-start pl-[11.5%]">
            <div className="mb-[2.4rem]">
                <SplitText isInView={isInViewBlock2} text="Is this the future of 3D model?" className="h2 text-nowrap" />
            </div>
            <div className="mb-[9rem]">
                <SplitText isInView={isInViewBlock2} duration={0.5} delay={1}  text="While it was just a TV show, that little speech at the beginning of the original Star Trek show really did do a good job of capturing our feelings about space." className="text-paragraph w-[78%] mb-5" />
                <SplitText isInView={isInViewBlock2} duration={0.5} delay={1.5}  text="It is those feelings that drive our love of astronomy and our desire to learn more and more about it. " className="text-paragraph w-[78%]" />
            </div>
                <CustomLink isInView={isInViewBlock2} delay={2} href="#">See Case Study</CustomLink>
            </div>
        </div>
    );
}

export default ProjectSectionBlock2;