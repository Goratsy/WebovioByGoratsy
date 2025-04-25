'use client';

import { motion, useInView } from 'framer-motion';
import { JSX, useRef } from 'react';

type SplitTextProps = {
    className?: string;
    tag?: keyof JSX.IntrinsicElements;
    text: string;
    delay?: number;
    style?: React.CSSProperties;
    duration?: number;
    isInView: boolean;
};

const SplitText = ({ className, style, tag = 'p', text, duration = 1, delay = 0, isInView }: SplitTextProps) => {
    const ref = useRef<HTMLElement>(null);

    const MotionTag = motion.create(tag) as React.ElementType;

    const numberOfChars = text.length;

    return (
        <>
            <MotionTag
                ref={ref}

                initial="hidden"
                animate={isInView ? "visible" : "hidden"}

                className={`${className}`}
                style={style}

                variants={{
                    hidden: { opacity: 0 },
                    visible: (i = 1) => ({
                        opacity: 1,
                        transition: { staggerChildren: duration / numberOfChars, delayChildren: 0.04 * i + delay },
                    }),
                }}
            >
                {text.split(" ").map((word, indexblock) => (
                    <span className='inline-block' key={`${text}_block_${indexblock}`}>
                        {word.split("").map((char, index) => (
                            <motion.span
                                key={`${text}_${index}`}
                                className='inline-block'

                                variants={{
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: "spring",
                                            damping: 12,
                                            stiffness: 150
                                        }
                                    },
                                    hidden: {
                                        opacity: 0,
                                        y: ref.current ? ref.current.offsetHeight * 0.1 : 0,
                                        transition: {
                                            type: "spring",
                                            damping: 12,
                                            stiffness: 100
                                        }
                                    }
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    {indexblock === text.split(" ").length - 1 ? null : `\u00A0`}
                    </span>
                ))}


            </MotionTag>
        </>
    );
};

export default SplitText;