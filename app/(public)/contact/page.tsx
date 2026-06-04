"use client";

import { Globe3D, type GlobeMarker } from "@/components/ui/3d-globe";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";

// Location pin SVG as data URI
const PIN_ICON = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23ef4444"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>')}`;

// Single marker: "I'm here" at Indonesia
const locationMarker: GlobeMarker[] = [
  {
    lat: -6.9733,
    lng: 107.6304,
    src: PIN_ICON,
    label: "I'm here 📍",
  },
];


const contactLinks = [
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/RIfkiND",
    username: "@RIfkiND",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rifki-nd",
    username: "rifki-nd",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://instagram.com",
    username: "@rifki",
  },
  {
    icon: HiOutlineMail,
    label: "Email",
    href: "mailto:rifkinauvaldzaki08@gmail.com",
    username: "rifkinauvaldzaki08@gmail.com",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full pt-48 md:pt-56 pb-20 px-6 md:px-10 lg:px-20 overflow-hidden relative bg-[#f5f5f5]">
      <div className="max-w-[1400px] mx-auto">
        {/* Main Layout: Text Left + Globe Right */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-4">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 z-10 flex flex-col gap-14">
            <h1 className="font-serif text-[3.5rem] sm:text-[5.5rem] lg:text-[6.5rem] leading-[0.9] text-[#111111] tracking-tight">
              Ready to<br />
              integrate APIs<br />
              &amp; AI?
            </h1>

            <div className="h-px w-full max-w-xl bg-black/10" />

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-12 sm:gap-20">
              {/* First Action */}
              <div className="flex items-center gap-6 group cursor-pointer">
                <p className="text-xl sm:text-2xl text-black/70 max-w-[200px] font-sans leading-tight">
                  Let&apos;s take 30 minutes to talk about your challenges!
                </p>
                <AnimatedButton
                  width="140px"
                  height="48px"
                  text=""
                  iconSize="40px"
                  defaultBg="#5ceb5c"
                  hoverBg="#171717"
                  iconDefaultBg="#1a1a1a"
                  iconHoverBg="#5ceb5c"
                  iconDefaultColor="#5ceb5c"
                  iconHoverColor="#1a1a1a"
                />
              </div>

              {/* Second Action */}
              <div className="flex items-center gap-6 group cursor-pointer">
                <p className="text-xl sm:text-2xl text-black/70 max-w-[140px] font-sans leading-tight">
                  No time?<br />
                  Write to us.
                </p>
                <AnimatedButton
                  width="140px"
                  height="48px"
                  text=""
                  iconSize="40px"
                  defaultBg="#5ceb5c"
                  hoverBg="#171717"
                  iconDefaultBg="#1a1a1a"
                  iconHoverBg="#5ceb5c"
                  iconDefaultColor="#5ceb5c"
                  iconHoverColor="#1a1a1a"
                />
              </div>
            </div>

            {/* Social Contact Links */}
            <div className="flex flex-wrap gap-4 mt-2">
              {contactLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="group flex items-center gap-3 px-5 py-3 rounded-full border border-black/10 bg-white/60 backdrop-blur-sm hover:bg-primary hover:border-transparent transition-all duration-300"
                >
                  <link.icon className="w-5 h-5 text-[#111111] group-hover:text-[#5ceb5c] transition-colors duration-300" />
                  <span className="text-sm font-medium text-[#111111] group-hover:text-white transition-colors duration-300">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side: 3D Globe */}
          <div className="hidden lg:flex w-full lg:w-1/2 items-center justify-center lg:justify-end">
            <div className="w-full max-w-[600px] aspect-square relative">
              <Globe3D
                className="h-full w-full"
                markers={locationMarker}
                config={{
                  textureUrl: "https://unpkg.com/three-globe@2.31.0/example/img/earth-day.jpg",
                  showAtmosphere: false,
                  bumpScale: 2,
                  autoRotateSpeed: 0.3,
                  enableZoom: false,
                  enablePan: false,
                  backgroundColor: null,
                  ambientIntensity: 3.0,
                  pointLightIntensity: 1.0,
                  showWireframe: false,
                  markerSize: 0.03,
                  initialRotation: { x: 0.12, y: -1.88 },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

