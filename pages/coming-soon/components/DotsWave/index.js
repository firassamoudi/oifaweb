import React from "react";
import { motion } from "framer-motion";

const loadingContainerVariants = {
    initial: {

    },
    animate: {
        transition: {
            staggerChildren: .4,
        }
    },

};
const loadingCircleVariants = {
    initial: {
        y: "50%",
    },
    animate: {
        y: "150%",
        transition: {
            yoyo: Infinity
        }
    }
};

const DotsWave = (props) => {

    return (
        <motion.div className='dotsWave'
            variants={loadingContainerVariants}
            initial='initial'
            animate="animate"
        >
            <motion.div
                className='dotsWave__container'
            >
                <motion.span
                    className='dotsWave__dot'
                    variants={loadingCircleVariants}
                />
                <motion.span
                    className='dotsWave__dot'
                    variants={loadingCircleVariants}
                />
                <motion.span
                    className='dotsWave__dot'
                    variants={loadingCircleVariants}
                />
            </motion.div>
        </motion.div >

    )
}

export default DotsWave
