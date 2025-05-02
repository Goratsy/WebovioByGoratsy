import { FunctionComponent } from "react";
import Navbar from "../Navbar/Navbar";
import CustomLink from "@/components/UI/CustomLink/CustomLink";
import SplitText from "@/components/Animation/SplitText/SplitText";
import Partnerships from "./Components/Partnerships";


const Header: FunctionComponent = () => {
    return (
        <header className="relative h-[88vh] min-h-[80rem] ">
            <div className="relative flex flex-col justify-center h-full bg-header overflow-hidden">
                <Navbar />
                <div className="-translate-y-6 pl-[11.5%] max-tablet:pl-[5%] flex flex-col justify-center items-start">
                    <SplitText
                        isInView
                        className="text-section text-white mb-[2.2rem] text-nowrap"
                        tag="p"
                        delay={0.1}
                        text="A place where"
                    />
                    <h1 className="w-[45%]">
                        <SplitText
                            isInView
                            className="h1 text-white w-full text-nowrap"
                            tag="span"
                            delay={0.4}
                            duration={0.33}
                            text="A creative agency"
                        />
                        <SplitText
                            isInView
                            className="h1 text-white w-full text-nowrap"
                            tag="span"
                            delay={0.73}
                            duration={0.33}
                            text="for redemptive"
                        />
                        <SplitText
                            isInView
                            className="h1 text-white w-full text-nowrap"
                            tag="span"
                            delay={1.06}
                            duration={0.33}
                            text="brands"
                        />

                    </h1>
                    <SplitText
                        isInView
                        className="text-paragraph mb-[4.5rem] w-5/12 mt-[2.4rem]"
                        style={{ color: "white" }}
                        tag="p"
                        delay={0.8}
                        text="Anteelo is a leading strategic design firm that builds powerful digital solutions for startups and enterprises."
                    />

                    <CustomLink isInView delay={1} className="text-link-hover" href="#">Get in touch</CustomLink>
                </div>
            </div>
            <Partnerships />
        </header>
    );
}

export default Header;