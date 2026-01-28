import Link from "next/link"
import { FaInstagram, FaBehance, FaLinkedinIn } from "react-icons/fa"

export default function Footer() {
  const navRows = [
    { left: { label: "Branding", href: "/branding" }, right: { label: "Réalisations", href: "/realisations" } },
    { left: { label: "Site web", href: "/site-web" }, right: { label: "Ressources", href: "/ressources" } },
    { left: { label: "Campagne", href: "/campagne" }, right: { label: "Contact", href: "/contact" } },
  ]

  const socialLinks = [
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FaBehance, href: "https://behance.net", label: "Behance" },
    { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  ]

  return (
    <section className="bg-white w-full">
      <footer className="w-full max-w-5xl mx-auto pt-24 sm:pt-32 px-4 md:px-8">
        <div className="bg-[#141414] rounded-sm px-20 py-14 md:px-16 md:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
            {/* Left Section - Logo and Tagline */}
            <div className="flex flex-col gap-8 lg:max-w-xs">
              {/* Logo */}
              <div className="flex items-center gap-3">
                {/* Stylized 13g Logo */}
                <svg
                  width="52"
                  height="28"
                  viewBox="0 0 52 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  {/* "1" - dot and stem */}
                  <circle cx="6" cy="5" r="5" fill="currentColor" />
                  <rect x="3" y="10" width="6" height="16" rx="3" fill="currentColor" />
                  {/* "0" - circle */}
                  <circle cx="24" cy="14" r="9" stroke="currentColor" strokeWidth="5" />
                  {/* "0" - second circle */}
                  <circle cx="44" cy="14" r="9" stroke="currentColor" strokeWidth="5" />
                </svg>
                <div className="h-7 w-px bg-white/40 mx-1" />
                <div className="flex items-center gap-1">
                  <span className="text-white text-sm font-medium leading-tight">
                    Treize
                    <br />
                    grammes
                  </span>
                  <span className="text-white/50 text-[10px] ml-1 self-start mt-0.5">®</span>
                </div>
              </div>

              {/* Tagline */}
              <h2 className="text-[1.75rem] md:text-[2rem] text-[#a8a8a8] font-serif italic leading-[1.2] tracking-tight">
                Esprits créatifs
                <br />
                pour marques
                <br />
                créatives
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
            href="/mentions-legales"
            className="text-[#6a6a6a] hover:text-[#8a8a8a] transition-colors text-sm"
          >
            Mentions légales
          </Link>
        </div>
      </footer>
    </section>
  )
}
