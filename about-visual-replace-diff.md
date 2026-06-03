# Replace 3D Cube → Animated Visual for About Section

Hapus DarkCubeCanvas, ganti dengan animated floating skill cards + big kinetic typography.

---

## 1. Hapus file lama

```diff
- components/DarkCubeCanvas.tsx   ← DELETE
- npm uninstall three @types/three ← optional, bersihkan
```

---

## 2. Buat `components/AboutVisual.tsx` (file baru)

```diff
+ 'use client'
+ import { useEffect, useRef } from 'react'
+ import anime from 'animejs'
+
+ const SKILLS = [
+   { label: 'Go',         color: '#00ADD8', x: '15%',  y: '12%',  delay: 0   },
+   { label: 'Docker',     color: '#2496ED', x: '62%',  y: '6%',   delay: 80  },
+   { label: 'JavaScript', color: '#F7DF1E', x: '78%',  y: '30%',  delay: 160 },
+   { label: 'Linux',      color: '#ffffff', x: '8%',   y: '45%',  delay: 240 },
+   { label: 'Python',     color: '#3776AB', x: '55%',  y: '52%',  delay: 320 },
+   { label: 'PHP',        color: '#777BB4', x: '25%',  y: '68%',  delay: 400 },
+   { label: 'CI/CD',      color: '#a8e063', x: '72%',  y: '72%',  delay: 480 },
+   { label: 'REST API',   color: '#ff6b6b', x: '40%',  y: '85%',  delay: 560 },
+ ]
+
+ export default function AboutVisual() {
+   const containerRef = useRef<HTMLDivElement>(null)
+
+   useEffect(() => {
+     /* === Entrance: cards fly in from random directions === */
+     anime({
+       targets: '.skill-float-card',
+       opacity: [0, 1],
+       scale: [0.4, 1],
+       duration: 600,
+       delay: anime.stagger(80, { start: 300 }),
+       easing: 'easeOutBack(1.4)',
+     })
+
+     /* === Big letters draw in === */
+     anime({
+       targets: '.big-letter',
+       opacity: [0, 1],
+       translateY: [40, 0],
+       duration: 700,
+       delay: anime.stagger(60, { start: 200 }),
+       easing: 'easeOutExpo',
+     })
+
+     /* === Floating loop — each card bobs independently === */
+     document.querySelectorAll<HTMLElement>('.skill-float-card').forEach((el, i) => {
+       anime({
+         targets: el,
+         translateY: [0, -10 - (i % 3) * 4],
+         duration: 2200 + i * 300,
+         direction: 'alternate',
+         loop: true,
+         easing: 'easeInOutSine',
+       })
+     })
+
+     /* === Rotating ring === */
+     anime({
+       targets: '.ring-slow',
+       rotate: '1turn',
+       duration: 18000,
+       loop: true,
+       easing: 'linear',
+     })
+     anime({
+       targets: '.ring-fast',
+       rotate: '-1turn',
+       duration: 9000,
+       loop: true,
+       easing: 'linear',
+     })
+
+     /* === Pulse dot === */
+     anime({
+       targets: '.pulse-dot',
+       scale: [1, 1.8],
+       opacity: [0.6, 0],
+       duration: 1500,
+       loop: true,
+       easing: 'easeOutExpo',
+     })
+   }, [])
+
+   return (
+     <div
+       ref={containerRef}
+       className="relative w-full h-full select-none"
+       style={{ minHeight: 420 }}
+     >
+       {/* ── Background grid lines (CSS only) ── */}
+       <div className="absolute inset-0 opacity-[0.04]"
+         style={{
+           backgroundImage:
+             'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
+           backgroundSize: '48px 48px',
+         }}
+       />
+
+       {/* ── Rotating rings (decorative) ── */}
+       <div className="ring-slow absolute"
+         style={{
+           width: 320, height: 320,
+           top: '50%', left: '50%',
+           transform: 'translate(-50%, -50%)',
+           border: '1px solid rgba(0,255,100,0.06)',
+           borderRadius: '50%',
+           borderTopColor: 'rgba(0,255,100,0.25)',
+         }}
+       />
+       <div className="ring-fast absolute"
+         style={{
+           width: 200, height: 200,
+           top: '50%', left: '50%',
+           transform: 'translate(-50%, -50%)',
+           border: '1px solid rgba(0,255,100,0.04)',
+           borderRadius: '50%',
+           borderBottomColor: 'rgba(168,224,99,0.2)',
+         }}
+       />
+
+       {/* ── BIG kinetic letters behind everything ── */}
+       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
+         <div className="flex gap-1 overflow-hidden">
+           {'BACKEND'.split('').map((char, i) => (
+             <span
+               key={i}
+               className="big-letter opacity-0 font-black text-[clamp(4rem,9vw,7rem)]
+                 tracking-tight leading-none"
+               style={{
+                 color: 'transparent',
+                 WebkitTextStroke: '1px rgba(255,255,255,0.04)',
+                 fontFamily: 'var(--font-display, Georgia)',
+               }}
+             >
+               {char}
+             </span>
+           ))}
+         </div>
+       </div>
+
+       {/* ── Floating skill cards ── */}
+       {SKILLS.map((skill) => (
+         <div
+           key={skill.label}
+           className="skill-float-card absolute opacity-0 cursor-default
+             group flex items-center gap-2
+             bg-white/[0.03] backdrop-blur-sm
+             border border-white/[0.07] rounded-full
+             px-4 py-2
+             hover:border-white/20 hover:bg-white/[0.06]
+             transition-colors duration-300"
+           style={{ left: skill.x, top: skill.y }}
+         >
+           {/* Color dot */}
+           <span
+             className="w-2 h-2 rounded-full flex-shrink-0"
+             style={{ backgroundColor: skill.color, boxShadow: `0 0 6px ${skill.color}` }}
+           />
+           <span className="text-xs font-medium text-white/60
+             group-hover:text-white/90 transition-colors tracking-wide">
+             {skill.label}
+           </span>
+         </div>
+       ))}
+
+       {/* ── Center accent: glowing dot with pulse ── */}
+       <div className="absolute" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
+         <div className="pulse-dot absolute w-12 h-12 rounded-full bg-[#a8e063]/20"
+           style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
+         <div className="w-3 h-3 rounded-full bg-[#a8e063]"
+           style={{ boxShadow: '0 0 12px #a8e063, 0 0 24px #a8e06366' }} />
+       </div>
+
+       {/* ── Small decorative corner label ── */}
+       <div className="absolute bottom-4 right-4 text-[10px] tracking-widest
+         text-white/20 uppercase font-mono">
+         rifki · se · 2025
+       </div>
+     </div>
+   )
+ }
```

---

## 3. Update `components/AboutSection.tsx`

```diff
- import dynamic from 'next/dynamic'
- const DarkCubeCanvas = dynamic(() => import('./DarkCubeCanvas'), { ssr: false })
+ import AboutVisual from './AboutVisual'

  export default function AboutSection() {
    ...
    return (
      <section ...>
        {/* LEFT visual */}
-       <div className="w-full lg:w-1/2 h-[420px] lg:h-[520px] relative">
-         <div className="absolute inset-0 rounded-3xl border border-white/5 overflow-hidden">
-           <DarkCubeCanvas />
-         </div>
-         <div className="absolute bottom-5 left-5 ... text-xs text-white/60">
-           Interactive · move mouse
-         </div>
-       </div>
+       <div className="w-full lg:w-1/2 h-[420px] lg:h-[480px] relative
+         rounded-3xl border border-white/[0.06] overflow-hidden bg-white/[0.01]">
+         <AboutVisual />
+       </div>

        {/* RIGHT text — tidak berubah */}
        ...
      </section>
    )
  }
```

---

## Hasil Visual

```
┌─────────────────────────────────────┐
│  · · grid lines sangat faint · ·   │
│                                     │
│   [Go ●]      [Docker ●]            │
│                    [JavaScript ●]   │
│ [Linux ●]                           │
│           B A C K E N D             │  ← ghost text, stroke only
│        ○  ●  ○                      │  ← rotating rings + green dot
│   [Python ●]    [PHP ●]             │
│                       [CI/CD ●]     │
│      [REST API ●]                   │
│                    rifki · se · 2025│
└─────────────────────────────────────┘
```

Cards melayang naik-turun sendiri-sendiri.
Ring luar berputar pelan searah jarum jam.
Ring dalam berputar berlawanan, lebih cepat.
Titik hijau di tengah pulse keluar.

---

## Kenapa Ini Lebih Baik dari 3D Cube

| 3D Cube | Floating Cards |
|---------|---------------|
| Warna jelek, sulit dikontrol | Warna per card, presisi |
| Berat (Three.js ~600KB) | Ringan, pure CSS + anime.js |
| Terlihat tidak professional | Clean, modern, relevan |
| Tidak nyambung sama konten | Langsung show skills |
| Sulit di-maintain | Tinggal edit array SKILLS |
