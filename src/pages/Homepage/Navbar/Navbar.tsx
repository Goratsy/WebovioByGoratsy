import BurgerMenu from "@/components/UI/BurgerMenu/BurgerMenu";
import Logo from "@/SVGcomponents/Homepage/Logo/Logo";
import NameCompony from "@/SVGcomponents/Homepage/Logo/NameCompany";
import { FC } from "react";
 
const Navbar: FC = () => {


    return ( 
        <div className="absolute top-0 left-0 flex justify-between items-center w-full px-[11.5%] max-tablet:px-[5%] mt-[30px]">
            <div className="flex justify-center items-center gap-[11px] ">
                <Logo />
                <NameCompony className='-translate-y-2'/>
            </div>
           <BurgerMenu />
        </div>
     );
}
 
export default Navbar;