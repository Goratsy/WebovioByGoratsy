'use client';

import { FunctionComponent } from "react";
import { motion } from "motion/react";

const HR: FunctionComponent<{ bgColor?: string, className?: string }> = ({ bgColor = 'bg-hr', className }) => {
    return (
        <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className={`w-full ${className}`}
        >
            <div className={`w-full h-px ${bgColor} mx-auto`}></div>
        </motion.div>
    );
}

export default HR;