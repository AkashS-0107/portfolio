"use client";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HalomotButton } from "./halomot-button";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
  link?: string;
};

type ProjectShowcaseProps = {
  testimonials: Testimonial[];
  autoplay?: boolean;
  colors?: { name?: string; position?: string; testimony?: string };
  fontSizes?: { name?: string; position?: string; testimony?: string };
  spacing?: {
    top?: string;
    bottom?: string;
    lineHeight?: string;
    nameTop?: string;
    nameBottom?: string;
    positionTop?: string;
    positionBottom?: string;
    testimonyTop?: string;
    testimonyBottom?: string;
  };
  desktopVersionBottomThreshold?: number;
  maxImageWidth?: number;
  imageWidthPercentage?: number;
  mobile?: {
    fontSizes?: { name?: string; position?: string; testimony?: string };
    spacing?: {
      top?: string;
      bottom?: string;
      lineHeight?: string;
      nameTop?: string;
      nameBottom?: string;
      positionTop?: string;
      positionBottom?: string;
      testimonyTop?: string;
      testimonyBottom?: string;
    };
  };
  imageAspectRatio?: number;
  isRTL?: boolean;
  onItemClick?: (link: string) => void;
  outerRounding?: string;
  innerRounding?: string;
  outlineColor?: string;
  hoverOutlineColor?: string;
  buttonInscriptions?: {
    previousButton: string;
    nextButton: string;
    openWebAppButton: string;
  };
  halomotButtonGradient?: string;
  halomotButtonBackground?: string;
  halomotButtonTextColor?: string;
  halomotButtonOuterBorderRadius?: string;
  halomotButtonInnerBorderRadius?: string;
  halomotButtonHoverTextColor?: string;
};

export const ProjectShowcase = ({
  testimonials,
  autoplay = false,
  colors = { name: "#fff", position: "#f43f5e", testimony: "#94a3b8" },
  fontSizes = { name: "2xl", position: "sm", testimony: "lg" },
  spacing = {
    top: "12",
    bottom: "12",
    lineHeight: "1.5",
    nameTop: "0",
    nameBottom: "0.5em",
    positionTop: "0",
    positionBottom: "0.25em",
    testimonyTop: "1em",
    testimonyBottom: "1em"
  },
  desktopVersionBottomThreshold = 1024,
  mobile = {},
  imageAspectRatio = 1.37,
  isRTL = false,
  onItemClick,
  outerRounding = "18.2px",
  innerRounding = "18px",
  outlineColor = "#381a20",
  hoverOutlineColor = "#be123c",
  buttonInscriptions = {
    previousButton: "Previous",
    nextButton: "Next",
    openWebAppButton: "Open Project"
  },
  halomotButtonGradient = "linear-gradient(to right, #be123c, #9f1239)",
  halomotButtonBackground = "#140b0d",
  halomotButtonTextColor = "#fff",
  halomotButtonOuterBorderRadius = "6.34px",
  halomotButtonInnerBorderRadius = "6px",
  halomotButtonHoverTextColor
}: ProjectShowcaseProps) => {
  const [active, setActive] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);
  const [componentWidth, setComponentWidth] = useState(0);
  const componentRef = useRef<HTMLDivElement>(null);

  const currentFontSizes =
    isMobileView && mobile.fontSizes ? mobile.fontSizes : fontSizes;
  const currentSpacing = {
    ...spacing,
    ...(isMobileView && mobile.spacing ? mobile.spacing : {})
  };

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const handleResize = useCallback(() => {
    if (componentRef.current) {
      setComponentWidth(componentRef.current.offsetWidth);
      setIsMobileView(
        componentRef.current.offsetWidth < desktopVersionBottomThreshold
      );
    }
  }, [desktopVersionBottomThreshold]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(handleResize);
    if (componentRef.current) {
      resizeObserver.observe(componentRef.current);
    }
    handleResize();
    return () => {
      if (componentRef.current) {
        resizeObserver.unobserve(componentRef.current);
      }
    };
  }, [handleResize]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  const calculateGap = (width: number) => {
    const minWidth = 1024;
    const maxWidth = 1456;
    const minGap = 40;
    const maxGap = 60;
    if (width <= minWidth) return minGap;
    if (width >= maxWidth) return maxGap;
    return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
  };

  return (
    <div
      ref={componentRef}
      className="w-full mx-auto antialiased font-sans py-8"
      style={{
        lineHeight: currentSpacing.lineHeight,
        backgroundColor: "transparent",
        direction: isRTL ? "rtl" : "ltr"
      }}
    >
      <div
        className="relative"
        style={{
          display: "grid",
          gridTemplateColumns: isMobileView ? "1fr" : "1fr 1fr",
          gap: `${calculateGap(componentWidth)}px`
        }}
      >
        <div className="w-full">
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{ paddingTop: `${(1 / imageAspectRatio) * 100}%` }}
          >
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => (
                isActive(index) && (
                  <motion.div
                    key={testimonial.src}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      rotate: randomRotateY()
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                      zIndex: 10
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      rotate: randomRotateY()
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <ImageContainer
                      src={testimonial.src}
                      alt={testimonial.name}
                      outerRounding={outerRounding}
                      innerRounding={innerRounding}
                      outlineColor={outlineColor}
                      hoverOutlineColor={hoverOutlineColor}
                    />
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex justify-between flex-col py-4 w-full">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3
              className="font-bold text-2xl text-white"
              style={{
                marginTop: currentSpacing.nameTop,
                marginBottom: currentSpacing.nameBottom
              }}
            >
              {testimonials[active].name}
            </h3>
            <p
              className="text-xs uppercase tracking-wider text-rose-400 font-mono font-semibold"
              style={{
                marginTop: currentSpacing.positionTop,
                marginBottom: currentSpacing.positionBottom
              }}
            >
              {testimonials[active].designation}
            </p>
            <motion.p
              className="text-slate-300 text-sm leading-relaxed mt-4"
            >
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          <div className="flex flex-wrap gap-3 pt-6 w-full">
            <HalomotButton
              inscription={buttonInscriptions.previousButton}
              onClick={handlePrev}
              fixedWidth="120px"
              gradient={halomotButtonGradient}
              backgroundColor={halomotButtonBackground}
              textColor={halomotButtonTextColor}
              innerBorderRadius={halomotButtonInnerBorderRadius}
              outerBorderRadius={halomotButtonOuterBorderRadius}
            />
            <HalomotButton
              inscription={buttonInscriptions.nextButton}
              onClick={handleNext}
              fixedWidth="120px"
              gradient={halomotButtonGradient}
              backgroundColor={halomotButtonBackground}
              textColor={halomotButtonTextColor}
              innerBorderRadius={halomotButtonInnerBorderRadius}
              outerBorderRadius={halomotButtonOuterBorderRadius}
            />
            {testimonials[active].link && (
              <HalomotButton
                inscription={buttonInscriptions.openWebAppButton}
                onClick={() =>
                  onItemClick && onItemClick(testimonials[active].link || "")
                }
                fixedWidth="140px"
                gradient={halomotButtonGradient}
                backgroundColor={halomotButtonBackground}
                textColor={halomotButtonTextColor}
                innerBorderRadius={halomotButtonInnerBorderRadius}
                outerBorderRadius={halomotButtonOuterBorderRadius}
                href={testimonials[active].link}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

type ImageContainerProps = {
  src: string;
  alt: string;
  outerRounding: string;
  innerRounding: string;
  outlineColor: string;
  hoverOutlineColor: string;
};

const ImageContainer = ({
  src,
  alt,
  outerRounding,
  innerRounding,
  outlineColor,
  hoverOutlineColor
}: ImageContainerProps) => (
  <div
    className="relative h-full w-full project-showcase-image-container"
    style={{
      borderRadius: outerRounding,
      padding: "1px",
      backgroundColor: outlineColor,
      transition: "background-color 0.3s ease-in-out"
    }}
  >
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        borderRadius: innerRounding
      }}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover object-center"
      />
    </div>
  </div>
);
