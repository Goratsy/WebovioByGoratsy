import CustomLink from "@/components/UI/CustomLink/CustomLink";
import { FunctionComponent } from "react";
import style from './ServicesSection.module.css'
import Image from "next/image";
import manImage from '../../../../../public/homepage/deation/Oval.png';

const ServicesSection: FunctionComponent = () => {
    return (
        <>
            <section className="px-[11.5%] flex flex-row justify-between items-end mb-[15rem]">
                <div className="inline-flex w-[57.3%] mb-[3.4rem] flex-col justify-center items-start pr-[14.4%]">
                    <p className="text-section">What we do for you</p>
                    <h2 className="h2 text-nowrap my-[3.2rem]">Strategy. Design<br />Content. <span className={`${style.bg_text_h2}`}>Technology</span><br />Development </h2>
                    <p className="text-paragraph mb-[4.2rem]">There’s no secret sauce, no wizard behind the curtain. What makes Aerolab tick is an interdisciplinary team with a framework that fosters candid collaboration.</p>
                    <CustomLink id="link_deation_section" href="#">More know About us</CustomLink>
                </div>
                <div className="inline-flex flex-col justify-end relative w-[42.7%] bg-white shadow-[0px_100px_100px_rgba(0,0,0,0.15)] pb-[6rem] px-[4rem] h-[64.4rem]">
                    <p className="text-quote mb-[5rem]" style={{ fontSize: '2.4rem', lineHeight: '4rem' }}>With More than 10 Years of Knowledge and Expertise we Design and Code Websites and Apps, We Build Brands and Help Them Succeed</p>
                    <div className=" flex justify-start items-center gap-[3rem]">
                        <Image src={manImage} alt="image-quote" width={90} height={90} />
                        <div>
                            <p className="text-quote-title text-nowrap mb-[6px]" style={{ fontSize: '2.2rem' }}>Genevieve Rodriquez</p>
                            <p className="text-quote-body text-nowrap" style={{ fontSize: '1.6rem' }}>Founder & CEO, Webovio</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ServicesSection;