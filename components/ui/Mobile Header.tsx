"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
 
import React, { useRef, useState } from "react";
 
 
interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}
 
interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}
 
interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}
 
interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}
 
interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}
 
interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}
 

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: "none",
        width: "100%",
        paddingRight: 0,
        paddingLeft: 0,
        borderRadius: 0,
        y: visible ? 0 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 flex w-full flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
        visible && "bg-neutral-950/80",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};
 
export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};
 
export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={cn(
            "absolute top-full left-1/2 -translate-x-1/2 w-64 z-40 flex flex-col items-start justify-start gap-4 rounded-b-lg bg-white px-6 py-8 dark:bg-neutral-950",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
 
export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX className="text-black dark:text-white" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-black dark:text-white" onClick={onClick} />
  );
};
 