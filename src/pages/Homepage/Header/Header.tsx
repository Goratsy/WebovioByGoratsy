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
import Partnerships from "./Components/Partnerships";


const Header: FunctionComponent = () => {
    return (
        <header className="relative h-[88vh] min-h-[80rem] ">
            <div className="relative flex flex-col justify-center h-full bg-header overflow-hidden">
                <Navbar />
                <div className="-translate-y-6 pl-[11.5%] flex flex-col justify-center items-start">
                    <SplitText
                        isInView
                        className="text-section text-white mb-[2.2rem]"
                        tag="p"
                        delay={0.1}
                        text="A place where"
                    />
                    <SplitText
                        isInView
                        className="h1 text-white w-[50%]"
                        tag="h1"
                        delay={0.4}
                        text="A creative agency for redemptive brands"
                    />
                    <SplitText
                        isInView
                        className="text-paragraph mb-[4.5rem] w-5/12 mt-[2.4rem]"
                        style={{ color: "white" }}
                        tag="p"
                        delay={0.8}
                        text="Anteelo is a leading strategic design firm that builds powerful digital solutions for startups and enterprises."
                    />

                    <CustomLink delay={1} className="text-link-hover" href="#">Get in touch</CustomLink>
                </div>
            </div>
            <Partnerships />
        </header>
    );
}

export default Header;