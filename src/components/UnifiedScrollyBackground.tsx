"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const FRAME_COUNT = 120; // 1 to 120 frames

export function UnifiedScrollyBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    // Track the global window scroll
    const { scrollYProgress } = useScroll();

    // Mapping logic:
    // 0.00 to 0.25 -> Animate Forward (Frame 0 to 119)
    // 0.25 to 0.75 -> Hold (Frame 119)
    // 0.75 to 1.00 -> Animate Backward (Frame 119 to 0)

    // We can compute the frame dynamically in the render loop without useTransform interpolating an array of 4 points.
    // Framer motion's useTransform supports array mapping:
    const frameIndex = useTransform(
        scrollYProgress,
        [0, 0.25, 0.75, 1],
        [0, FRAME_COUNT - 1, FRAME_COUNT - 1, 0]
    );

    // Dim the background slightly when reading the main content (25% to 75%)
    const opacityOverlay = useTransform(
        scrollYProgress,
        [0.2, 0.25, 0.75, 0.8],
        [0, 0.85, 0.85, 0]
    );

    useEffect(() => {
        let isMounted = true;
        // const loadedImages: HTMLImageElement[] = [];
        // let loadedCount = 0;

        const loadSequence = async () => {
            const imagePromises = Array.from({ length: FRAME_COUNT }, (_, i) => {
                const img = new Image();
                img.src = `/sequence/frame_${String(i + 1).padStart(3, "0")}.jpg`;
                return img.decode().then(() => img).catch(() => img);
            });

            const loadedImagesArray = await Promise.all(imagePromises);

            if (isMounted) {
                setImages(loadedImagesArray);
                setImagesLoaded(true);
            }
        };

        loadSequence();

        return () => {
            isMounted = false;
        };
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !imagesLoaded || images.length === 0) return;

        const context = canvas.getContext("2d");
        if (!context) return;

        // Render initial frame
        renderFrame(0);

        const unsubscribe = frameIndex.on("change", (latest) => {
            renderFrame(Math.round(latest));
        });

        return () => unsubscribe();

        function renderFrame(index: number) {
            const safeIndex = Math.min(Math.max(index, 0), FRAME_COUNT - 1);
            if (!canvas || !context || !images[safeIndex]) return;

            const img = images[safeIndex];
            const canvasRatio = canvas.width / canvas.height;
            const imgRatio = img.width / img.height;

            let drawWidth = canvas.width;
            let drawHeight = canvas.height;
            let offsetX = 0;
            let offsetY = 0;

            if (canvasRatio > imgRatio) {
                drawHeight = canvas.width / imgRatio;
            } else {
                drawWidth = canvas.height * imgRatio;
            }

            // Apply a 1.05x zoom (5% overshoot) to slightly crop the edges. 
            // This is helps hide the 'Veo' watermark visible in the bottom right corner of the source imagery.
            const watermarkCropZoom = 1.05;
            drawWidth *= watermarkCropZoom;
            drawHeight *= watermarkCropZoom;

            offsetX = (canvas.width - drawWidth) / 2;
            offsetY = (canvas.height - drawHeight) / 2;

            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        }
    }, [frameIndex, images, imagesLoaded]);

    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                // Determine a safe pixel ratio (cap at 2 to avoid mobile GPU overload on 3x screens)
                const dpr = Math.min(window.devicePixelRatio || 1, 2);

                const width = window.innerWidth;
                const height = window.innerHeight;

                canvasRef.current.width = width * dpr;
                canvasRef.current.height = height * dpr;

                // Force a re-render on resize if frames are already loaded
                if (imagesLoaded) {
                    // Frame re-render is handled by standard scroll detection, 
                    // but we ensure the canvas size is cleanly mapped.
                }
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [imagesLoaded]);

    return (
        <div className="fixed inset-0 z-0 bg-[#121212] pointer-events-none">
            <canvas
                ref={canvasRef}
                className="w-full h-full block"
            />
            {/* Dark overlay for readability during the middle sections */}
            <motion.div
                style={{ opacity: opacityOverlay }}
                className="absolute inset-0 bg-black"
            />
        </div>
    );
}
