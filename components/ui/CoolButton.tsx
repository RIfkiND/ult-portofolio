import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

interface CoolButtonProps {
  label: string;
  color?: string; // e.g. '#8ddd8d', '#e6e66d', '#6366f1'
  textColor?: string;
  onClick?: () => void;
  className?: string;
}

export default function CoolButton({
  label,
  color = "#8ddd8d",
  textColor = "#1a1a1a",
  onClick,
  className = "",
}: CoolButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: "0 4px 24px 0 rgba(0,0,0,0.12)" }}
      whileTap={{ scale: 0.97 }}
      className={`flex items-center gap-2 rounded-full px-6 py-3 font-bold text-lg transition-colors duration-300 focus:outline-none ${className}`}
      style={{ background: color, color: textColor, position: "relative" }}
      onClick={onClick}
    >
      <span className="flex items-center justify-center rounded-full bg-black/90 mr-2" style={{ width: 36, height: 36 }}>
        <ArrowRight className="w-6 h-6" color={color} />
      </span>
      <span className="z-10" style={{ color: textColor }}>{label}</span>
    </motion.button>
  );
}
