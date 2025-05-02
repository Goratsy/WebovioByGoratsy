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
                ease: [0.83, 0, 0.17, 1],
            }}
        >
            <div className="w-full h-full overflow-x-hidden max-tablet:overflow-x-scroll bg-background-secondary pl-[6.5rem] py-[6rem] flex justify-start items-center gap-[6.6rem]">
                {[brand1, brand2, brand3, brand4, brand5].map((brand, index) => (
                    <motion.div
                        key={`brand-${index}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        className="flex-shrink-0 h-[11.4rem] w-[15.6rem]"
                    >
                        <Image
                            src={brand}
                            alt={`brand${index + 1}`}
                            className="h-full w-full object-contain"
                        />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export default Partnerships;