
import { FunctionComponent } from "react";
import style from './Footer.module.css';
import HeadingWithLink from "./Components/HeadingWithLink";
import InformationAndLinks from "./Components/InformationAndLinks";

const Footer: FunctionComponent = () => {
    return (
        <footer className={`relative px-[11.5%] max-tablet:px-[5%] pt-[31rem] pb-[3rem] mt-[32rem] bg-background-primary ${style.bg_footer}`}>
            <HeadingWithLink />
            <InformationAndLinks />
        </footer>
    );
}

export default Footer;