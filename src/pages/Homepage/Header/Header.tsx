import { FunctionComponent } from "react";
import Navbar from "../Navbar/Navbar";
import CustomLink from "@/components/UI/CustomLink/CustomLink";
import Image from "next/image";
import brand1 from '../../../../public/homepage/header/brand1.png';
import brand2 from '../../../../public/homepage/header/brand2.png';
import brand3 from '../../../../public/homepage/header/brand3.png';
import brand4 from '../../../../public/homepage/header/brand4.png';
import brand5 from '../../../../public/homepage/header/brand5.png';

const Header: FunctionComponent = () => {
    return (
        <header className="relative h-[86.7vh] min-h-[80rem] ">
            <div className="relative flex flex-col justify-center h-full bg-header overflow-hidden">
                <Navbar />
                <div className="w-5/12 pl-[11.5%] flex flex-col justify-center items-start gap-4">
                    <p className="text-section text-white">A place where</p>
                    <h1 className="h1 text-nowrap">A creative agency<br />for redemptive<br />brands</h1>
                    <p className="text-paragraph text-white">Anteelo is a leading strategic design firm that builds powerful digital solutions for startups and enterprises.</p>
                    <CustomLink id='link_header' className="text-link-hover" href="#">Get in touch</CustomLink>
                </div>
            </div>
            <div className="absolute bottom-0 right-0 w-[88.5%] translate-y-1/2 overflow-hidden z-50">
                <div className="bg-[#FBFBFB] pl-[6.5rem] pr-[6.5rem] py-[6rem] flex justify-start items-center gap-[6.6rem]">
                    <Image src={brand1} alt="brand1" />
                    <Image src={brand2} alt="brand2" />
                    <Image src={brand3} alt="brand3" />
                    <Image src={brand4} alt="brand4" />
                    <Image src={brand5} alt="brand5" />
                </div>
            </div>
        </header>
    );
}

export default Header;