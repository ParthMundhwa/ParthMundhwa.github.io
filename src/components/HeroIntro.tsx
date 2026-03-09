"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function HeroIntro() {
    const { scrollYProgress } = useScroll();

    // Map 0 to 0.25 of global scroll
    const opacity1 = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.05], [0, -100]);

    const opacity2 = useTransform(scrollYProgress, [0.05, 0.1, 0.15, 0.2], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.05, 0.1, 0.15, 0.2], [100, 0, 0, -100]);

    return (
        <div className="relative h-[200vh] w-full z-10">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-none p-8">

                {/* Section 1 */}
                <motion.div
                    style={{ opacity: opacity1, y: y1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center"
                >
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-2xl">
                        Parth Mundhwa.
                    </h1>
                    <p className="mt-6 text-2xl md:text-3xl text-gray-200 font-light tracking-wide drop-shadow-lg">
                        Data Engineer/Analytics Engineer
                    </p>
                </motion.div>

                {/* Section 2 */}
                <motion.div
                    style={{ opacity: opacity2, y: y2 }}
                    className="absolute inset-0 flex flex-col items-start justify-center max-w-6xl mx-auto px-8 w-full"
                >
                    <h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-white max-w-2xl drop-shadow-2xl leading-tight">
                        I build scalable data pipelines that drive insights and innovation.
                    </h2>
                </motion.div>

            </div>
        </div>
    );
}
