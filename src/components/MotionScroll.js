import { motion, useScroll, useAnimation, useInView  } from "framer-motion";
import { useEffect, useRef } from "react";

export const FadeInDown = {
    initial: {
        opacity: 0
    },
    show: {
        y: ["-50%", "0%"],
        opacity: [0,1],
    },
}

export const FadeInUp = {
    initial: {
        opacity: 0
    },
    show: {
        y: ["50%", "0%"],
        opacity: [0,1],
    },
}

export const FadeIn = {
    initial: {
        opacity: 0
    },
    show: {
        opacity: [0,1],
    },
}

export const MotionScroll = ({ children, ...props }) => {

    const ref = useRef(null);
    const controls = useAnimation();
    const inView = useInView(ref, { once: true });
    // const { scrollYProgress } = useScroll({
    //     target: ref,
    //     offset: ["start end", "start center"]
    // });
    

    useEffect(() => {
        
        if (inView) {
            controls.start("show");
        }
    }, [controls, inView, props]);
    
    return (
        <motion.div
            {...props}
            ref={ref}
            initial="initial"
            // whileInView={props.trigger && "show"}
            animate={controls}
            transition={{
                ease: "easeOut", 
                delay: props.delay || .25 , 
                duration: props.duration || .75 ,
            }}
        >
            {children}
        </motion.div>
    )
}

