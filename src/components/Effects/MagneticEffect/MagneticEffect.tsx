'use client';

import { motion } from "framer-motion";
import { FunctionComponent, ReactNode, useRef, useState } from "react";

interface MagneticEffectProps {
    children: ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const MagneticEffect: FunctionComponent<MagneticEffectProps> = ({children, className, style}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState<{x: number, y: number}>({x:0,y:0});

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {

        const { clientX, clientY } = e;

        if (ref.current) {
            const {height, width, left, top} = ref.current.getBoundingClientRect();
    
            const middleX = clientX - (left + width / 2);
            const middleY = clientY - (top + height / 2);
    
            setPosition({x: middleX, y: middleY});
        }

    }

    const reset = () => {
        setPosition({x:0, y:0})
    }

    const { x, y } = position;

    return (

        <motion.div
            style={{position: "relative", ...style}}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{x, y}}
            transition={{type: "spring", stiffness: 150, damping: 15, mass: 0.1}}
            className={className}
        >

            {children}

        </motion.div>

    )
}
 
export default MagneticEffect;