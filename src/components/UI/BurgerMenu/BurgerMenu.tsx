'use client'

import { FunctionComponent, useState } from "react";
import style from './BurgerMenu.module.css'

interface BurgerMenuProps {

}

const BurgerMenu: FunctionComponent<BurgerMenuProps> = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`bg-white rounded-[20px] w-[40px] h-[40px] flex flex-col justify-center items-center cursor-pointer ${style.burgerMenu} ${isOpen ? ` ${style.open}` : `${style.close}`}`} onClick={() => setIsOpen(!isOpen)}>
            <div className="absolute m-auto flex flex-col justify-center items-center gap-[3.6px]">
                <div className="w-[18px] h-[1.8px] bg-black"></div>
                <div className="w-[18px] h-[1.8px] bg-black"></div>
                <div className="w-[18px] h-[1.8px] bg-black"></div>
            </div>
        </div>
    );
}

export default BurgerMenu;