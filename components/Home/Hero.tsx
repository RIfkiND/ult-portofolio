"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full min-h-screen  relative">
      <div className="container mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0 min-h-[80vh] items-center relative">
          {/* Left Side - Image/Badge */}
          <div className="flex items-center justify-center lg:justify-end lg:pr-16 relative">
            <div className="relative w-[300px] h-[500px] lg:w-[350px] lg:h-[550px] rounded-[150px] overflow-hidden shadow-2xl">
              <Image
                src="/photos/rifki-profile.jpg"
                alt="Profile"
                fill
                className="object-cover rounded-[150px]"
                priority
              />
            </div>
          </div>

          {/* Vertical divider line - taller */}
          <div className="hidden lg:block absolute left-1/2 top-[-5%] bottom-[-5%] w-px bg-white/20 -translate-x-1/2 z-10" />

          {/* Right Side - Content */}
          <div className="flex flex-col justify-center lg:pl-16 space-y-8">
            {/* Top tagline */}
            <p className="text-[#7ec47e] text-sm lg:text-base tracking-wide">
              Hi, I'm Rifki — Backend & DevOps Engineer
            </p>

            {/* Main heading */}
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-[0.95] tracking-tight">
              Building scalable
              <br />
              & reliable systems
            </h1>

            {/* Bottom content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              {/* Left description */}
              <div>
                <p className="text-white text-base lg:text-lg leading-relaxed">
                  I specialize in architecting robust backends,
                  <br />
                  automating cloud infrastructure, and
                  <br />
                  delivering high-performance web solutions.
                </p>
              </div>

              {/* Right description */}
              <div>
                <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                  From APIs to CI/CD, I turn ideas into production-ready apps.
                  <br />
                  Let's build something impactful together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
