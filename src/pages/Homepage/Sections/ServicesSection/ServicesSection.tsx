'use client';

import CustomLink from "@/components/UI/CustomLink/CustomLink";
import { FunctionComponent, useRef } from "react";
import style from './ServicesSection.module.css'
import Image from "next/image";
import manImage from '../../../../../public/homepage/deation/Oval.png';
import { CardBody, CardContainer, CardItem } from "@/components/Effects/Card3dEffect/Card3dEffect";
import SplitText from "@/components/Animation/SplitText/SplitText";
import { useInView } from "framer-motion";

const ServicesSection: FunctionComponent = () => {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, {amount: 0.5, once: true});

    return (
        <>
            <section ref={ref} className="px-[11.5%] flex flex-row justify-between items-end mb-[15rem]">
                <div className="inline-flex w-[57.3%] mb-[3.4rem] flex-col justify-center items-start pr-[14.4%]">
                    <SplitText isInView={isInView} text="What we do for you" className="text-section" />
                    <h2 className="h2 my-[3.2rem]">
                        <SplitText isInView={isInView} text="Strategy. Design" tag="span" className="block" duration={0.25} delay={0}/>
                        <SplitText isInView={isInView} text="Content. " tag="span" duration={0.25} delay={0.25}/>
                        <SplitText isInView={isInView} text="Technology" tag="span" className={`${style.bg_text_h2}`} duration={0.25} delay={0.5}/>
                        <SplitText isInView={isInView} text="Development" tag="span" duration={0.25} delay={0.75}/>
                    </h2>
                    <SplitText isInView={isInView} delay={1} text="There’s no secret sauce, no wizard behind the curtain. What makes Aerolab tick is an interdisciplinary team with a framework that fosters candid collaboration." className="text-paragraph mb-[4.2rem]" />
                    <CustomLink isInView={isInView} delay={1.25} id="link_deation_section" href="#">More know About us</CustomLink>
                </div>
                <CardContainer containerClassName="w-[42.7%]" className="inline-flex flex-col justify-end relative bg-white shadow-[0px_100px_100px_rgba(0,0,0,0.15)] pb-[6rem] px-[4rem] h-[64.4rem]">
                    <CardBody>
                        <CardItem translateZ={40}><p className="text-quote mb-[5rem]" style={{ fontSize: '2.4rem', lineHeight: '4rem' }}>With More than 10 Years of Knowledge and Expertise we Design and Code Websites and Apps, We Build Brands and Help Them Succeed</p></CardItem>
                        <CardItem translateZ={30} className="flex justify-start items-center gap-[3rem]">
                            <Image src={manImage} alt="image-quote" width={90} height={90} />
                            <div>
                                <p className="text-quote-title text-nowrap mb-[6px]" style={{ fontSize: '2.2rem' }}>Genevieve Rodriquez</p>
                                <p className="text-quote-body text-nowrap" style={{ fontSize: '1.6rem' }}>Founder & CEO, Webovio</p>
                            </div>
                        </CardItem>
                    </CardBody>
                </CardContainer>
            </section>
        </>
    );
}

export default ServicesSection;