'use client';

import { motion } from 'framer-motion'

const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.03, delayChildren: 0.04 * i }
    })
}

const child = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100
        }
    },
    hidden: {
        opacity: 0,
        y: 20,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100
        }
    }
}

const SplitText = ({ texts, className }: { texts: string[], className: string }) => (
    <>
        {texts.map((text, indexP) => {
            return (
                <motion.div
                    key={`${text}_p_${indexP}`}
                    style={{ display: "flex", overflow: "hidden" }}
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className={`${className}`}
                >
                    {text.split("").map((char, index) => (
                        <motion.span key={`${text}_${index}`} variants={child}>
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.div>
            );
        })}
    </>
)

export default SplitText;