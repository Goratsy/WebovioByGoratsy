'use client';

import { FunctionComponent } from "react";
import Image from "next/image";
import brand1 from '../../../../../public/homepage/header/brand1.png';
import brand2 from '../../../../../public/homepage/header/brand2.png';
import brand3 from '../../../../../public/homepage/header/brand3.png';
import brand4 from '../../../../../public/homepage/header/brand4.png';
import brand5 from '../../../../../public/homepage/header/brand5.png';
import { motion } from "motion/react";

const Partnerships: FunctionComponent = () => {
    return (
        <motion.div
            className="absolute bottom-0 right-0 w-[88.5%] h-[23.4rem] translate-y-1/2 overflow-hidden z-50 shadow-[50px_50px_100px_rgba(0,0,0,0.15)]"
            initial={{ width: 0 }}
            animate={{ width: '88.5%' }}
            style={{ transformOrigin: "right" }}
            transition={{
                duration: 0.8,
                // duration: 10,
                ease: [0.83, 0, 0.17, 1],
            }}
        >
            <div className="w-full h-full overflow-x-hidden bg-background-secondary pl-[6.5rem] py-[6rem] flex justify-start items-center gap-[6.6rem]">
                <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{delay: 0.8}}><Image src={brand1} alt="brand1" className="h-[11.4rem] w-[15.6rem]" /></motion.div>
                <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{delay: 0.9}}><Image src={brand2} alt="brand2" className="h-[11.4rem] w-[15.6rem]" /></motion.div>
                <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{delay: 1}}><Image src={brand3} alt="brand3" className="h-[11.4rem] w-[15.6rem]" /></motion.div>
                <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{delay: 1.1}}><Image src={brand4} alt="brand4" className="h-[11.4rem] w-[15.6rem]" /></motion.div>
                <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{delay: 1.2}}><Image src={brand5} alt="brand5" className="h-[11.4rem] w-[15.6rem]" /></motion.div>
            </div>
        </motion.div>
    );
}

export default Partnerships;