"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Template({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // GSAP Enter Animation
    const ctx = gsap.context(() => {
      gsap.fromTo(containerRef.current, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div id="page-transition-container" ref={containerRef} className="will-change-transform">
      {children}
    </div>
  )
}
