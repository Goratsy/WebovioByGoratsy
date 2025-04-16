import { FunctionComponent } from "react";
import Navbar from "../Navbar/Navbar";
import CustomLink from "@/components/UI/CustomLink/CustomLink";
import Image from "next/image";
import brand1 from '../../../../public/homepage/header/brand1.png';
import brand2 from '../../../../public/homepage/header/brand2.png';
import brand3 from '../../../../public/homepage/header/brand3.png';
import brand4 from '../../../../public/homepage/header/brand4.png';
import brand5 from '../../../../public/homepage/header/brand5.png';
import SplitText from "@/components/Animation/SplitText/SplitText";

const Header: FunctionComponent = () => {
    return (
        <header className="relative h-[86.7vh] min-h-[80rem] ">
            <div className="relative flex flex-col justify-center h-full bg-header overflow-hidden">
                <Navbar />
                <div className="-translate-y-6 pl-[11.5%] flex flex-col justify-center items-start">
                    <SplitText
                        className="text-section text-white mb-[2.2rem]"
                        tag="p"
                        text="A place where"
                    />
                    <SplitText
                        className="h1 text-white w-[50%]"
                        tag="h1"
                        text="A creative agency for redemptive brands"
                    />
                    <SplitText
                        className="text-paragraph mb-[4.5rem] w-5/12 mt-[2.4rem]"
                        style={{ color: "white" }}
                        tag="p"
                        text="Anteelo is a leading strategic design firm that builds powerful digital solutions for startups and enterprises."
                    />
                    
                    <CustomLink className="text-link-hover" href="#">Get in touch</CustomLink>
                </div>
            </div>
            <div className="absolute bottom-0 right-0 w-[88.5%] translate-y-1/2 overflow-hidden z-50 shadow-[50px_50px_100px_rgba(0,0,0,0.15)]">
                <div className="bg-background-secondary pl-[6.5rem] pr-[6.5rem] py-[6rem] flex justify-start items-center gap-[6.6rem]">
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