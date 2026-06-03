Completely rewrite `DarkCubeCanvas` using Three.js.
Make it visually DRAMATIC and impressive — like a AAA game loading screen.
The cubes must be clearly visible, brightly glowing from inside,
with lots of dynamic motion and green atmospheric effects.

---

RENDERER:
- WebGLRenderer: antialias true, alpha false
- renderer.setClearColor(0x060e06)
- renderer.shadowMap.enabled = true, PCFSoftShadowMap
- renderer.toneMapping = THREE.ReinhardToneMapping
- renderer.toneMappingExposure = 2.2   ← HIGH exposure so glow is very bright
- renderer.outputColorSpace = THREE.SRGBColorSpace

SCENE FOG:
- scene.fog = new THREE.FogExp2(0x071007, 0.055)

CAMERA:
- PerspectiveCamera(50, aspect, 0.1, 100)
- position: (0, 2.5, 10)
- lookAt: (0, 0.5, 0)

---

LIGHTING:
1. AmbientLight(0x112211, 0.5)
2. DirectionalLight(0xffffff, 0.4) at (-5, 8, 3), castShadow true
3. PointLight(0x00ff44, 0.6, 25) at (0, 8, 0)   ← green top fill
4. PointLight(0x00cc33, 0.3, 15) at (0, -1, -3)  ← green back rim
5. Each cube has its OWN 3 internal lights (spec below)

---

FLOOR:
- PlaneGeometry(40, 40), y = -2.2, rotation.x = -PI/2
- MeshStandardMaterial: color #050e05, roughness 1, metalness 0
- receiveShadow: true
- REFLECTIVE FLOOR: second plane at y = -2.18
  MeshStandardMaterial: color #0a1f0a, transparent true, opacity 0.5, roughness 0

---

CUBE CONFIGS (3 cubes):
[
  { x: -2.8, h: 1.4, rotY:  0.4,  amber: 0xff7700, speed: 1.0,  amp: 0.25, phase: 0           },
  { x:  0.0, h: 1.0, rotY: -0.2,  amber: 0xff9933, speed: 0.75, amp: 0.30, phase: 2.09        },
  { x:  2.8, h: 1.7, rotY:  0.25, amber: 0xff5500, speed: 1.25, amp: 0.20, phase: 4.18        },
]

---

BUILD EACH CUBE — function buildCube(cfg, index):
  W = 1.8, H = 1.8 * cfg.h, T = 0.12 (wall thickness)

  Group contains:

  === OUTER SHELL ===
  Material A (outer faces): MeshStandardMaterial
    color: #1a1a1a
    roughness: 0.6
    metalness: 0.7
    envMapIntensity: 1.0

  Material B (inner faces): MeshStandardMaterial
    color: #0a0a0a
    roughness: 0.9
    metalness: 0.2
    emissive: cfg.amber
    emissiveIntensity: 0.15   ← inner walls tinted by glow

  Use THREE.MeshStandardMaterial array [matA, matB] per wall:
  Each wall BoxGeometry groups face 0–3 = outer mat, face 4–5 = inner mat
  (simpler: just use DoubleSide with inner mat for all 4 walls + separate outer shell)

  WALLS (all castShadow true, DoubleSide):
  - Front:  BoxGeometry(W, H, T),        z = +(W/2 - T/2)
  - Back:   BoxGeometry(W, H, T),        z = -(W/2 - T/2)
  - Left:   BoxGeometry(T, H, W-T*2),    x = -(W/2 - T/2)
  - Right:  BoxGeometry(T, H, W-T*2),    x = +(W/2 - T/2)
  - Bottom: BoxGeometry(W-T*2, T, W-T*2), y = -(H/2 - T/2)

  All walls material:
    MeshStandardMaterial {
      color: #141414,
      roughness: 0.65,
      metalness: 0.6,
      side: DoubleSide,
      emissive: cfg.amber,
      emissiveIntensity: 0.08
    }

  EDGE LINES (EdgesGeometry on each wall):
    LineSegments with LineBasicMaterial color #224422, opacity 0.6, transparent true

  === INNER TUNNEL — 5 RINGS ===
  Loop i = 1 to 5:
    s = 1 - i * 0.14
    rw = (W - T*2) * s
    rh = H * s * 0.85
    geometry: BoxGeometry(rw, T*0.25, rw)
    y = -H/2 + rh * 0.6
    material: MeshStandardMaterial {
      color: lerp(#1f1f1f → #080808) based on i
      emissive: cfg.amber
      emissiveIntensity: 0.04 * (6 - i)  ← ring 1 = 0.20, ring 5 = 0.04
      roughness: 0.95
    }

  === 3 INTERNAL LIGHTS ===
  Light 1: PointLight(cfg.amber, 5.0, 5.0) at y = -(H/2 - 0.5)  ← main core glow
  Light 2: PointLight(cfg.amber, 2.0, 8.0) at y = H/2 + 0.4     ← spills out top
  Light 3: PointLight(0xffcc44, 1.5, 3.5)  at y = -(H/2 - 0.2)  ← warm yellow secondary

  === GLOW CORE ===
  SphereGeometry(0.15, 16, 16)
  MeshStandardMaterial {
    color: cfg.amber
    emissive: cfg.amber
    emissiveIntensity: 12    ← VERY bright
    roughness: 0
    metalness: 0
  }
  y = -(H/2 - 0.3)
  Store ref as cube.userData.glowCore

  === LIGHT SHAFT (fake volumetric) ===
  ConeGeometry(W * 0.45, H * 1.2, 8, 1, true)
  MeshBasicMaterial {
    color: cfg.amber
    transparent: true
    opacity: 0.06
    side: DoubleSide
    depthWrite: false
    blending: THREE.AdditiveBlending
  }
  rotation.x = Math.PI (point downward)
  y = H/2
  Store ref as cube.userData.lightShaft

  === OUTER GLOW HALO ===
  RingGeometry(W*0.5, W*0.9, 32)
  MeshBasicMaterial {
    color: cfg.amber
    transparent: true
    opacity: 0.12
    side: DoubleSide
    depthWrite: false
    blending: THREE.AdditiveBlending
  }
  rotation.x = -Math.PI/2
  y = -(H/2)      ← glow pool on floor under cube
  Store ref as cube.userData.floorGlow

  Initial state:
  group.position.set(cfg.x, -10, 0)
  group.rotation.y = cfg.rotY
  group.userData = { cfg, index, baseY: 0 }

---

ENTRANCE ANIMATION (animejs, on mount):
  Each cube animates from y=-10 to y=0:
  - duration: 2000ms
  - delay: index * 250ms
  - easing: 'spring(1, 80, 10, 0)'  ← anime.js spring — bouncy entrance
  - Simultaneously:
    scale from 0.3 to 1.0 (group.scale.setScalar)
    rotationY from (cfg.rotY + PI) to cfg.rotY
    glowCore.material.emissiveIntensity from 0 to 12

---

ANIMATION LOOP (rAF):
  t variable, increment 0.01 per frame

  PER CUBE:
  1. FLOAT:
     y = sin(t * cfg.speed + cfg.phase) * cfg.amp
     group.position.y = baseY + y

  2. TILT ROCK:
     group.rotation.x = sin(t * 0.5 + cfg.phase) * 0.03
     group.rotation.z = cos(t * 0.4 + cfg.phase) * 0.02

  3. SLOW Y SPIN:
     group.rotation.y = cfg.rotY + sin(t * 0.25 + cfg.phase) * 0.12

  4. GLOW PULSE (main light):
     light1.intensity = 5.0 + sin(t * 2.5 + cfg.phase) * 2.0
     ← swings between 3.0 and 7.0

  5. CORE PULSE:
     glowCore.material.emissiveIntensity = 12 + sin(t * 2.5 + cfg.phase) * 5
     ← swings between 7 and 17

  6. SHAFT PULSE:
     lightShaft.material.opacity = 0.06 + sin(t * 2.5 + cfg.phase) * 0.03

  7. FLOOR GLOW PULSE:
     floorGlow.material.opacity = 0.12 + sin(t * 1.5 + cfg.phase) * 0.06

  8. SCALE BREATHE:
     s = 1.0 + sin(t * cfg.speed * 0.5 + cfg.phase) * 0.012
     group.scale.set(s, s, s)

---

PARTICLES SYSTEM:
  Create 120 particles:
  - Positions: x∈[-10,10], y∈[-3,6], z∈[-5,3] random
  - Split into 2 types:
    Type A (80 particles): green dust
      PointsMaterial { color: #00ff55, size: 0.025, transparent, opacity: 0.5,
        sizeAttenuation: true, depthWrite: false,
        blending: THREE.AdditiveBlending }
    Type B (40 particles): amber sparks (same position array, separate geometry)
      PointsMaterial { color: #ff8800, size: 0.04, transparent, opacity: 0.3,
        sizeAttenuation: true, depthWrite: false,
        blending: THREE.AdditiveBlending }

  In loop per frame:
    Green particles: y += 0.004, if y > 6 reset to -3
    Amber sparks: drift toward nearest cube x, y += 0.006, if y > cubeTop reset
    geometry.attributes.position.needsUpdate = true

---

MOUSE PARALLAX (smooth lerp, every frame):
  lerpFactor = 0.025
  camTargetX = mouseNX * 2.0
  camTargetY = 2.5 + mouseNY * -1.0
  camera.position.x += (camTargetX - camera.position.x) * lerpFactor
  camera.position.y += (camTargetY - camera.position.y) * lerpFactor
  camera.lookAt(0, 0.5, 0)

---

RESIZE, CLEANUP: standard (update camera aspect, renderer.dispose, remove canvas)

---

RULES:
- TypeScript, no comments in output
- Only: three, react, animejs
- Export default DarkCubeCanvas
- Mount div: width 100%, height 100%
- NO React Three Fiber