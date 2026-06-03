# 3D Dark Cube v4 — FINAL FIX

Masalah v3: warna terlalu orange/solid, hollow tidak keliatan, toneMapping bikin flat.
v4 ini fix semua dari scratch dengan pendekatan berbeda.

---

## PROMPT

```
Completely rewrite `DarkCubeCanvas` using Three.js from scratch.
Fix these problems from the previous version:
1. Cubes looked solid orange/brown — they must look like DARK METAL with subtle inner glow
2. Hollow open-top effect was not visible — the inside tunnel must be clearly visible
3. Colors were too warm/flat — use cool dark steel with only a THIN line of color glow at edges

TARGET AESTHETIC: Dark souls / cyberpunk — very dark metallic cubes,
almost black, with a thin neon green glow at the TOP OPENING EDGE only,
and a faint warm core light visible deep inside when you look in from top.

---

RENDERER (critical fixes):
- WebGLRenderer: antialias true, alpha true  ← alpha TRUE so bg is transparent
- renderer.setClearColor(0x000000, 0)        ← fully transparent background
- renderer.shadowMap.enabled = true, PCFSoftShadowMap
- renderer.toneMapping = THREE.NoToneMapping  ← NO tone mapping, control colors manually
- renderer.outputColorSpace = THREE.SRGBColorSpace
- NO toneMappingExposure

SCENE:
- scene.background = null  ← transparent
- scene.fog = new THREE.FogExp2(0x0a0f0a, 0.035)  ← very subtle, barely there

CAMERA:
- PerspectiveCamera(42, aspect, 0.1, 100)
- position: (0, 4, 11)
- lookAt: (0, 0.5, 0)

---

LIGHTING (minimal — let materials do the work):
1. AmbientLight(0x111411, 0.8)   ← neutral dark ambient
2. DirectionalLight(0x8899aa, 0.5) position(-4, 6, 3)  ← cool blue-grey key light
3. PointLight(0x00ff66, 0.2, 20) at (0, 6, 0)  ← very faint green from above
NO other global lights

---

FLOOR:
- PlaneGeometry(30, 30), y = -2.2, rotation.x = -PI/2
- MeshStandardMaterial: color #070707, roughness 1
- receiveShadow true

---

CUBE CONFIGS:
[
  { x: -2.6, h: 1.15, rotY: 0.35,  accentColor: 0x00ff88, phase: 0           },
  { x:  0.0, h: 0.85, rotY: -0.15, accentColor: 0x00ffaa, phase: 2.09        },
  { x:  2.6, h: 1.4,  rotY: 0.22,  accentColor: 0x00ff66, phase: 4.18        },
]

---

BUILD EACH CUBE — function buildCube(cfg):
  W = 1.75
  H = 1.75 * cfg.h
  T = 0.11 (wall thickness)

  === DARK METAL MATERIAL ===
  Use ONE shared material for all outer surfaces:
  MeshStandardMaterial {
    color: #0c0c0c        ← almost black
    roughness: 0.55
    metalness: 0.85       ← high metalness for steel look
    envMapIntensity: 0.3
  }
  Add PMREMGenerator with a simple dark environment:
    const envTexture = new THREE.PMREMGenerator(renderer)
    scene.environment = pmremGenerator.fromScene(new THREE.RoomEnvironment()).texture

  === 5 WALLS (outer shell) ===
  All use dark metal material, castShadow true:
  - Front:  BoxGeometry(W, H, T),        z = +(W/2 - T/2)
  - Back:   BoxGeometry(W, H, T),        z = -(W/2 - T/2)
  - Left:   BoxGeometry(T, H, W - T*2),  x = -(W/2 - T/2)
  - Right:  BoxGeometry(T, H, W - T*2),  x = +(W/2 - T/2)
  - Bottom: BoxGeometry(W-T*2, T, W-T*2), y = -(H/2 - T/2)

  === TOP EDGE NEON LINE (most important visual) ===
  Create a thin frame at the very top opening edge:
  4 thin rectangular bars forming a square frame:
  Bar geometry: BoxGeometry(W, 0.025, 0.025)
  Material: MeshStandardMaterial {
    color: cfg.accentColor
    emissive: cfg.accentColor
    emissiveIntensity: 4.0    ← bright neon line
    roughness: 0
    metalness: 0
  }
  Place all 4 bars at y = H/2 (top of cube), forming square outline
  Store refs as cube.userData.topEdge (array of 4)

  === INNER TUNNEL (clearly visible from above) ===
  Inner wall material (what you see when looking DOWN inside):
  MeshStandardMaterial {
    color: #080808
    roughness: 0.9
    metalness: 0.1
    emissive: #1a0a00    ← very faint warm tint on inner walls
    emissiveIntensity: 1.0
    side: THREE.BackSide
  }

  Inner shell (slightly smaller, BackSide so visible from inside):
  innerW = W - T*2 - 0.02
  innerH = H - T
  - Front inner:  BoxGeometry(innerW, innerH, T*0.5), z = +(innerW/2)
  - Back inner:   BoxGeometry(innerW, innerH, T*0.5), z = -(innerW/2)
  - Left inner:   BoxGeometry(T*0.5, innerH, innerW), x = -(innerW/2)
  - Right inner:  BoxGeometry(T*0.5, innerH, innerW), x = +(innerW/2)

  === 4 CONCENTRIC INNER RINGS (tunnel depth) ===
  Loop i = 1 to 4:
    s = 1 - i * 0.18
    rW = innerW * s
    rY = -H/2 + H * s * 0.75
    geometry: BoxGeometry(rW, 0.018, rW)
    material: MeshStandardMaterial {
      color: #0a0a0a
      emissive: cfg.accentColor
      emissiveIntensity: 0.06 * (5-i)  ← ring 1 barely glows, ring 4 dark
      roughness: 1.0
    }
  Store refs as cube.userData.rings

  === CORE GLOW (at bottom of tunnel, visible from top) ===
  SphereGeometry(0.06, 12, 12)
  MeshStandardMaterial {
    color: #ff6600
    emissive: #ff6600
    emissiveIntensity: 6    ← warm amber deep inside
    roughness: 0
  }
  position y = -(H/2 - 0.2)
  Store ref as cube.userData.core

  === INTERNAL LIGHTS ===
  Light A: PointLight(0xff6600, 1.2, 3.0) y = -(H/2 - 0.3)  ← amber CORE light, dim
  Light B: PointLight(cfg.accentColor, 0.3, 4.0) y = H/2     ← faint green spill at top

  === FLOOR REFLECTION GLOW ===
  CircleGeometry(0.6, 32)
  MeshBasicMaterial {
    color: cfg.accentColor
    transparent: true
    opacity: 0.04
    blending: THREE.AdditiveBlending
    depthWrite: false
  }
  rotation.x = -PI/2, y = -H/2 - 0.01 (just above bottom of group)

  === GROUP SETUP ===
  group.position.set(cfg.x, -8, 0)
  group.rotation.y = cfg.rotY
  group.userData = { baseY: 0, cfg, coreLight: lightA, accentLight: lightB }

---

ENTRANCE ANIMATION (animejs):
  proxy = { y: -8, scale: 0.2, opacity: 0 }
  anime({
    targets: proxy,
    y: 0,
    scale: 1.0,
    duration: 1600,
    delay: index * 180,
    easing: 'easeOutElastic(1, 0.6)',
    update: () => {
      group.position.y = proxy.y
      group.scale.setScalar(proxy.scale)
    }
  })

---

ANIMATION LOOP:
  t += 0.009 per frame

  PER CUBE each frame:
  1. FLOAT:
     group.position.y = sin(t * cfg.speed + cfg.phase) * cfg.amp
     (speed from cfg, amp = 0.18–0.25)

  2. GENTLE TILT:
     group.rotation.x = sin(t * 0.45 + cfg.phase) * 0.02
     group.rotation.z = cos(t * 0.35 + cfg.phase) * 0.015

  3. TOP EDGE PULSE (neon glow breathes):
     intensity = 4.0 + sin(t * 1.8 + cfg.phase) * 1.5
     topEdge[i].material.emissiveIntensity = intensity (all 4 bars)

  4. CORE PULSE:
     core.material.emissiveIntensity = 6 + sin(t * 2.2 + cfg.phase) * 2.5

  5. CORE LIGHT PULSE:
     coreLight.intensity = 1.2 + sin(t * 2.2 + cfg.phase) * 0.5

  6. SCALE BREATHE:
     s = 1 + sin(t * cfg.speed * 0.4 + cfg.phase) * 0.008
     group.scale.set(s, s, s)

---

PARTICLES:
  150 particles total, 2 layers:

  Layer 1 — Green mist (100 pts):
  positions: x∈[-9,9], y∈[-2,7], z∈[-4,2]
  PointsMaterial {
    color: #00ff66
    size: 0.022
    transparent: true
    opacity: 0.4
    sizeAttenuation: true
    depthWrite: false
    blending: THREE.AdditiveBlending
  }
  Per frame: y += 0.003, if y > 7 reset to -2

  Layer 2 — Amber embers (50 pts):
  positions: x∈[-4,4], y∈[-2,4], z∈[-3,1]
  PointsMaterial {
    color: #ff8800
    size: 0.018
    transparent: true
    opacity: 0.25
    depthWrite: false
    blending: THREE.AdditiveBlending
  }
  Per frame: y += 0.005, x += sin(t + i) * 0.001 (gentle drift)
  if y > 4 reset to -2

---

MOUSE PARALLAX (lerp each frame):
  lerp = 0.022
  camera.position.x += (mouseNX * 1.8 - camera.position.x) * lerp
  camera.position.y += (4.0 + mouseNY * -0.8 - camera.position.y) * lerp
  camera.lookAt(0, 0.5, 0)

---

RULES:
- TypeScript, no comments
- Imports: three, react, animejs, three/examples/jsm/environments/RoomEnvironment
- Export default DarkCubeCanvas
- Mount div: width 100%, height 100%
- alpha: true on renderer so it blends with page background
- NO React Three Fiber
```

---

## Perbedaan Kunci v3 → v4

| Problem v3 | Fix v4 |
|---|---|
| Orange/brown solid look | `NoToneMapping` + dark #0c0c0c metal |
| Hollow tidak keliatan | Inner BackSide walls + 4 concentric rings |
| Terlalu banyak warm light | Minimal lights, cool blue-grey key |
| alpha false — kotak putih | alpha true — blend ke page bg |
| Warna kuning-oranye dominan | Neon GREEN top edge, amber hanya di core (deep inside) |
| Terlihat seperti solid box | High metalness 0.85 + PMREMGenerator env |
