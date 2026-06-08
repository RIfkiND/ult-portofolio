"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import React from "react";

interface AnimatedButtonProps extends HTMLMotionProps<"div"> {
  text?: string;
  defaultBg?: string;
  hoverBg?: string;
  defaultTextColor?: string;
  hoverTextColor?: string;
  iconDefaultBg?: string;
  iconHoverBg?: string;
  iconDefaultColor?: string;
  iconHoverColor?: string;
  width?: string;
  height?: string;
  iconSize?: string;
}

export const AnimatedButton = React.forwardRef<HTMLDivElement, AnimatedButtonProps>(({
  text = "Contact",
  defaultBg = "#171717",
  hoverBg = "#8ddd8d",
  defaultTextColor = "#fff",
  hoverTextColor = "#1a1a1a",
  iconDefaultBg = "#8ddd8d",
  iconHoverBg = "#1a1a1a",
  iconDefaultColor = "#1a1a1a",
  iconHoverColor = "#fff",
  width = "190px",
  height = "54px",
  iconSize = "46px",
  className = "",
  ...props
}, ref) => {
  const [isHovered, setIsHovered] = useState(false);

  const padding = 8;
  const numWidth = parseInt(width);
  const numIconSize = parseInt(iconSize);
  
  // Dynamically calculate positions so the button works at any size
  const iconDefaultX = padding;
  const iconHoverX = numWidth - numIconSize - padding;

  const textDefaultX = numIconSize + padding * 2;
  const textHoverX = padding * 3;

  return (
    <motion.div
      ref={ref}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative cursor-pointer rounded-full overflow-hidden shrink-0 ${className}`}
      style={{ width, height }}
      tabIndex={0}
      role="button"
      {...props}
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{ backgroundColor: isHovered ? hoverBg : defaultBg }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <motion.span
        className="absolute top-1/2 -translate-y-1/2 uppercase text-base font-normal tracking-wider z-10 whitespace-nowrap"
        animate={{ x: isHovered ? textHoverX : textDefaultX, color: isHovered ? hoverTextColor : defaultTextColor }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {text}
      </motion.span>
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 rounded-full flex items-center justify-center z-10"
        style={{ width: iconSize, height: iconSize }}
        animate={{ x: isHovered ? iconHoverX : iconDefaultX, backgroundColor: isHovered ? iconHoverBg : iconDefaultBg }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <ArrowRight className="h-6 w-6" strokeWidth={2.5} style={{ color: isHovered ? iconHoverColor : iconDefaultColor }} />
      </motion.div>
    </motion.div>
  );
});

AnimatedButton.displayName = "AnimatedButton";
