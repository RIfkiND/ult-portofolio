"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa"

export default function Footer() {
  const pathname = usePathname();
  // Use light background for contact page to seamlessly blend in
  const bgClass = pathname === "/contact" ? "bg-[#f5f5f5]" : "bg-[#111111]";
  
  const navRows = [
    { left: { label: "About", href: "/about" }, right: { label: "Projects", href: "/project" } },
    { left: { label: "Experience", href: "/experience" }, right: { label: "Contact", href: "mailto:rifkinauvaldzaki08@gmail.com" } },
  ];

  const socialLinks = [
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/rifki-nd", label: "LinkedIn" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FaGithub, href: "https://github.com/RIfkiND", label: "GitHub" },
  ];

  return (
    <section className={`${bgClass} w-full pb-8 transition-colors duration-300`}>
      <footer className="w-full max-w-[1400px] mx-auto pt-24 sm:pt-32 px-4 md:px-8">
        <div className="bg-[#111111] border border-white/5 shadow-2xl rounded-[10px] px-8 py-16 md:px-16 md:py-24 lg:px-24">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-16">
            {/* Left Section - Logo and Tagline */}
            <div className="flex flex-col gap-10 lg:max-w-md">
              {/* Logo */}
              <div className="flex items-center gap-3">
                {/* Text Logo for Rifki */}
                <span className="text-white text-4xl md:text-5xl font-extrabold tracking-tight select-none font-serif">Rifki</span>
                <div className="h-8 w-px bg-white/40 mx-2" />
                <div className="flex items-center gap-1">
                  <span className="text-white text-base md:text-lg font-medium leading-tight">
                    ND
                    <br />
                  </span>
                  <span className="text-white/50 text-xs ml-1 self-start mt-0.5">®</span>
                </div>
              </div>

              {/* Tagline */}
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] text-[#d4d4d4] font-serif leading-[1.15] tracking-tight">
                Software engineered for the modern web.
              </h2>
            </div>

            {/* Center Section - Navigation in horizontal rows */}
            <div className="flex items-center gap-6 md:gap-10">
              <div className="hidden lg:block h-36 w-px bg-[#333]" />
              
              <nav className="flex flex-col gap-10">
                {navRows.map((row, index) => (
                  <div key={index} className="flex items-center gap-10">
                    <Link
                      href={row.left.href}
                      className="text-[#9a9a9a] hover:text-white transition-colors text-sm w-24"
                    >
                      {row.left.label}
                    </Link>
                    <div className="h-4 w-px bg-[#333]" />
                    <Link
                      href={row.right.href}
                      className="text-[#9a9a9a] hover:text-white transition-colors text-sm w-24"
                    >
                      {row.right.label}
                    </Link>
                  </div>
                ))}
              </nav>

              <div className="hidden lg:block h-36 w-px bg-[#333]" />
            </div>

            {/* Right Section - Social Links */}
            <div className="flex lg:flex-col gap-5">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-[#4a4a4a] flex items-center justify-center text-[#141414] hover:bg-[#5a5a5a] transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        </div>

        {/* Bottom Legal Link */}
        <div className="text-center mt-8">
          <Link
            href="/privacy-policy"
            className="text-[#6a6a6a] hover:text-[#8a8a8a] transition-colors text-sm"
          >
            Privacy Policy
          </Link>
        </div>
      </footer>
    </section>
  )
}
