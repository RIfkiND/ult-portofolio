'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface NavItemProps {
  label: string;
  href: string;
  hasDropdown?: boolean;
  onClick?: () => void;
}

export function NavItem({ label, href, hasDropdown, onClick }: NavItemProps) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className='group relative px-8 py-3.5 rounded-full border border-white/10 bg-[#0a0a0a] hover:bg-white/5 hover:border-white/20 transition-all duration-300'
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className='flex items-center gap-2 text-white text-sm uppercase tracking-wide font-normal'>
        {label}
        {hasDropdown && (
          <ChevronDown className='w-4 h-4 group-hover:translate-y-0.5 transition-transform' />
        )}
      </span>
    </motion.a>
  );
}

interface CircleButtonProps {
  label: string;
  href: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export function CircleButton({ label, href, icon, onClick }: CircleButtonProps) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className='group flex items-center gap-4 rounded-full hover:bg-[#8bc399]/10 transition-all duration-300 pr-1'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className='text-white font-normal text-sm uppercase tracking-wide'>{label}</span>
      <span className='flex items-center justify-center w-12 h-12 bg-[#9FD3A5] rounded-full group-hover:bg-[#8bc399] transition-all duration-300'>
        {icon}
      </span>
    </motion.a>
  );
}
