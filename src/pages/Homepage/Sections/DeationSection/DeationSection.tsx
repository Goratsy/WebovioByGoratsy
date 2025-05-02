'use client';

import SplitText from "@/components/Animation/SplitText/SplitText";
import CustomLink from "@/components/UI/CustomLink/CustomLink";
import HR from "@/components/UI/HR/HR";
import { useInView } from "framer-motion";
import { FunctionComponent, useRef } from "react";

const DeationSection: FunctionComponent = () => {
    const cards: { title: string, text: string, link: string }[] = [
        { title: "Product<br/>Design Sprint", text: 'A five-day workshop that will help you answer crucial business questions', link: '#' },
        { title: "Scoping<br/> Session", text: 'A workshop aimed at shaping your business idea, answering questions regarding project planning', link: '#' },
        { title: "UX<br/>Review", text: 'An evaluation which will help you radically improve your product.', link: '#' },
        { title: "Code<br/>Review", text: 'Do you know what one of the key secrets of success is what makes people successful in business', link: '#' },
    ];

    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { amount: 0.5, once: true });

    return (
        <>
            <HR className="px-[11.5%] max-tablet:px-[5%]" />

            <section ref={ref} className="pt-[15rem]">
                <div className="pl-[11.5%] max-tablet:pl-[5%] mb-[10.4rem]">
                    <SplitText isInView={isInView} duration={0.5} delay={0} text='Deation & Evaluation - Best Way' className="h2" />
                    <SplitText isInView={isInView} duration={0.5} delay={0.5} text='to Kick off Your Product Idea' className="h2" />
                </div>
                <div className="relative px-[11.5%] max-tablet:px-[5%] grid grid-cols-4 grid-rows-1 justify-between items-center gap-[2.7%] ">
                    {cards.map((card, index) => {
                        const animationDelay = String(`animate-delay-[${(index + 1) * 100}ms]`)

                        return (
                            <div key={index} className={`relative rounded-xl h-[31rem] p-[3rem] duration-500 ${animationDelay} ${isInView ? `opacity-100  animate-fade-up` : 'opacity-0'}`}>
                                <p dangerouslySetInnerHTML={{ __html: card.title }} className="text-card-title mb-[2rem]"></p>
                                <p className="text-card">{card.text}</p>
                                <div className="absolute bottom-[3rem] left-[3rem]">
                                    <CustomLink id={`CL_services_${index}`} href={card.link}>Read More</CustomLink>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </section>
        </>
    );
}

export default DeationSection;