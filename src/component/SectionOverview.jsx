import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import OnScrollFade from '../Animation/OnScrollFade'
const IMG_PADDING = 12;

const SectionOverview = ({ imgUrl, subheading, heading, descriptionHeading, descriptionPara1, descriptionPara2, learnMorePath }) => {
    return (
        <div className="bg-background">
            <div className="relative h-[150vh]">
                <StickyImage imgUrl={imgUrl} />
                <OverlayCopy heading={heading} subheading={subheading} />
            </div>
            <OnScrollFade>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
                    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
                        {descriptionHeading}
                    </h2>
                    <div className="col-span-1 md:col-span-8">
                        <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
                            {descriptionPara1}
                        </p>
                        <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
                            {descriptionPara2}
                        </p>
                        <button
                            onClick={() => window.location.href = learnMorePath}
                            className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit"
                        >
                            Learn more <FiArrowUpRight className="inline" />
                        </button>
                    </div>
                </div>
            </OnScrollFade>
        </div>
    );
};

const StickyImage = ({ imgUrl }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <motion.div
            style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: `calc(100vh - ${IMG_PADDING * 2}px)`,
                top: IMG_PADDING,
                scale,
            }}
            ref={targetRef}
            className="sticky z-0 overflow-hidden rounded-3xl"
        >
            <motion.div
                className="absolute inset-0 bg-neutral-950/70"
                style={{
                    opacity,
                }}
            />
        </motion.div>
    );
};

const OverlayCopy = ({ subheading, heading }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

    return (
        <motion.div
            style={{
                y,
                opacity,
            }}
            ref={targetRef}
            className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
        >
            <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">{subheading}</p>
            <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
        </motion.div>
    );
};

export default SectionOverview;
