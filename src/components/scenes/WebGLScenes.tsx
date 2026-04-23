'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/* Shared mouse vector (normalized -1..1) */
function useMouseRef() {
  const m = useRef({ x: 0, y: 0, sx: 0, sy: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      m.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      m.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);
  return m;
}

function resizeRenderer(
  renderer: THREE.WebGLRenderer,
  canvas: HTMLCanvasElement,
  camera: THREE.PerspectiveCamera
) {
  const parent = canvas.parentElement;
  if (!parent) return;
  const w = parent.clientWidth;
  const h = parent.clientHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}

/* =========================================================
   HERO — distorted obsidian icosahedron w/ rim light + particles
   ========================================================= */
export function HeroScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useMouseRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 3.6;

    /* environment dome */
    const envMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      uniforms: { uTime: { value: 0 } },
      vertexShader: `varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }`,
      fragmentShader: `
        varying vec3 vP;
        void main(){
          float y = normalize(vP).y;
          vec3 top = vec3(0.04,0.04,0.05);
          vec3 mid = vec3(0.02,0.02,0.03);
          vec3 bot = vec3(0.0);
          vec3 col = mix(bot, mid, smoothstep(-1., 0.2, y));
          col = mix(col, top, smoothstep(0., 1., y));
          float glow = pow(max(0., dot(normalize(vP), normalize(vec3(-1.,0.2,0.3)))), 8.);
          col += vec3(1.0,0.35,0.12) * glow * 0.3;
          gl_FragColor = vec4(col,1.);
        }`,
    });
    scene.add(new THREE.Mesh(new THREE.SphereGeometry(40, 32, 32), envMat));

    /* main icosahedron */
    const uniforms = {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2() },
      uDistort: { value: 0.35 },
      uAccent: { value: new THREE.Color(0xff5a1f) },
    };
    const mat = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `
        uniform float uTime; uniform vec2 uMouse; uniform float uDistort;
        varying vec3 vN; varying vec3 vP; varying float vD;
        vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
        vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
        vec4 permute(vec4 x){return mod289(((x*34.)+1.)*x);}
        vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
        float snoise(vec3 v){
          const vec2 C = vec2(1./6.,1./3.);
          const vec4 D = vec4(0.,.5,1.,2.);
          vec3 i = floor(v + dot(v,C.yyy));
          vec3 x0 = v - i + dot(i,C.xxx);
          vec3 g = step(x0.yzx,x0.xyz);
          vec3 l = 1. - g;
          vec3 i1 = min(g.xyz, l.zxy);
          vec3 i2 = max(g.xyz, l.zxy);
          vec3 x1 = x0 - i1 + C.xxx;
          vec3 x2 = x0 - i2 + C.yyy;
          vec3 x3 = x0 - D.yyy;
          i = mod289(i);
          vec4 p = permute(permute(permute(
            i.z + vec4(0., i1.z, i2.z, 1.))
            + i.y + vec4(0., i1.y, i2.y, 1.))
            + i.x + vec4(0., i1.x, i2.x, 1.));
          float n_ = 0.142857142857;
          vec3 ns = n_*D.wyz - D.xzx;
          vec4 j = p - 49.*floor(p*ns.z*ns.z);
          vec4 x_ = floor(j*ns.z);
          vec4 y_ = floor(j - 7.*x_);
          vec4 x = x_*ns.x + ns.yyyy;
          vec4 y = y_*ns.x + ns.yyyy;
          vec4 h = 1. - abs(x) - abs(y);
          vec4 b0 = vec4(x.xy,y.xy);
          vec4 b1 = vec4(x.zw,y.zw);
          vec4 s0 = floor(b0)*2. + 1.;
          vec4 s1 = floor(b1)*2. + 1.;
          vec4 sh = -step(h, vec4(0.));
          vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
          vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
          vec3 p0 = vec3(a0.xy, h.x);
          vec3 p1 = vec3(a0.zw, h.y);
          vec3 p2 = vec3(a1.xy, h.z);
          vec3 p3 = vec3(a1.zw, h.w);
          vec4 norm = taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
          p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
          vec4 m = max(0.6 - vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)), 0.);
          m = m*m;
          return 42.*dot(m*m, vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
        }
        void main(){
          vec3 pos = position;
          float t = uTime * 0.25;
          float n = snoise(pos * 1.4 + vec3(t, t*1.3, t*0.7));
          float n2 = snoise(pos * 3.0 + vec3(-t, t*0.4, t));
          float d = n * 0.25 + n2 * 0.1;
          vD = d;
          pos += normal * d * uDistort;
          pos.x += uMouse.x * 0.08 * (1. + n*0.5);
          pos.y += uMouse.y * 0.08 * (1. + n*0.5);
          vN = normalize(normalMatrix * normal);
          vec4 mv = modelViewMatrix * vec4(pos, 1.);
          vP = mv.xyz;
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: `
        varying vec3 vN; varying vec3 vP; varying float vD;
        uniform float uTime; uniform vec3 uAccent;
        void main(){
          vec3 V = normalize(-vP);
          float fresnel = pow(1. - max(0., dot(V, vN)), 3.);
          vec3 base = mix(vec3(0.02,0.02,0.025), vec3(0.08,0.08,0.1), fresnel);
          vec3 rim = uAccent * pow(fresnel, 1.8) * 1.4;
          vec3 L = normalize(vec3(0.7, 0.8, 0.6));
          float diff = max(0., dot(vN, L));
          float spec = pow(max(0., dot(reflect(-L, vN), V)), 48.);
          vec3 col = base + rim + vec3(0.9,0.88,0.85) * spec * 0.8;
          float stripe = sin(vP.y * 8. + uTime * 1.5) * 0.5 + 0.5;
          col += vec3(0.9,0.3,0.1) * pow(stripe, 20.) * 0.15 * fresnel;
          col *= 1. + vD * 0.6;
          gl_FragColor = vec4(col, 1.);
        }`,
    });
    const mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(1.1, 64), mat);
    scene.add(mesh);

    /* orbit particles */
    const pCount = 600;
    const pGeo = new THREE.BufferGeometry();
    const pos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      const r = 1.8 + Math.random() * 2.2;
      const t = Math.random() * Math.PI * 2;
      const p = (Math.random() - 0.5) * Math.PI * 0.6;
      pos[i * 3] = r * Math.cos(p) * Math.cos(t);
      pos[i * 3 + 1] = r * Math.sin(p);
      pos[i * 3 + 2] = r * Math.cos(p) * Math.sin(t);
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const points = new THREE.Points(
      pGeo,
      new THREE.PointsMaterial({
        size: 0.012,
        color: 0xf3f0ea,
        transparent: true,
        opacity: 0.7,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    );
    scene.add(points);

    resizeRenderer(renderer, canvas, camera);
    const onResize = () => resizeRenderer(renderer, canvas, camera);
    window.addEventListener('resize', onResize);

    const clock = new THREE.Clock();
    let raf = 0;
    const tick = () => {
      const t = clock.getElapsedTime();
      mouse.current.sx += (mouse.current.x - mouse.current.sx) * 0.06;
      mouse.current.sy += (mouse.current.y - mouse.current.sy) * 0.06;
      uniforms.uTime.value = t;
      uniforms.uMouse.value.set(mouse.current.sx, mouse.current.sy);
      mesh.rotation.y = t * 0.15 + mouse.current.sx * 0.3;
      mesh.rotation.x = mouse.current.sy * 0.25;
      points.rotation.y = t * 0.05;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      mat.dispose();
      envMat.dispose();
      mesh.geometry.dispose();
      pGeo.dispose();
    };
  }, [mouse]);

  return <canvas ref={canvasRef} />;
}

/* =========================================================
   ABOUT — particle lattice assembling
   ========================================================= */
export function AboutScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useMouseRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.z = 6;

    const N = 3200;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(N * 3);
    const targets = new Float32Array(N * 3);
    const speeds = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      const gx = (i % 80) - 40;
      const gy = Math.floor(i / 80) - 20;
      targets[i * 3] = gx * 0.22;
      targets[i * 3 + 1] = gy * 0.22;
      targets[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
      speeds[i] = 0.002 + Math.random() * 0.008;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const points = new THREE.Points(
      geo,
      new THREE.PointsMaterial({
        size: 0.025,
        color: 0xf3f0ea,
        transparent: true,
        opacity: 0.5,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    );
    scene.add(points);

    resizeRenderer(renderer, canvas, camera);
    const onResize = () => resizeRenderer(renderer, canvas, camera);
    window.addEventListener('resize', onResize);

    const clock = new THREE.Clock();
    let raf = 0;
    const tick = () => {
      const t = clock.getElapsedTime();
      mouse.current.sx += (mouse.current.x - mouse.current.sx) * 0.06;
      const arr = geo.attributes.position.array as Float32Array;
      for (let i = 0; i < arr.length / 3; i++) {
        arr[i * 3] += (targets[i * 3] - arr[i * 3]) * speeds[i];
        arr[i * 3 + 1] += (targets[i * 3 + 1] - arr[i * 3 + 1]) * speeds[i];
        arr[i * 3 + 2] += (targets[i * 3 + 2] - arr[i * 3 + 2]) * speeds[i];
        arr[i * 3 + 2] += Math.sin(t * 0.6 + i * 0.05) * 0.0015;
      }
      geo.attributes.position.needsUpdate = true;
      points.rotation.z = mouse.current.sx * 0.05;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      geo.dispose();
      (points.material as THREE.Material).dispose();
    };
  }, [mouse]);

  return <canvas ref={canvasRef} />;
}

/* =========================================================
   STACK — glowing torus knot w/ wireframe overlay
   ========================================================= */
export function StackScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useMouseRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 5;

    const geo = new THREE.TorusKnotGeometry(1.1, 0.28, 220, 32);
    const mat = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        uTime: { value: 0 },
        uAccent: { value: new THREE.Color(0xff5a1f) },
      },
      vertexShader: `
        varying vec3 vN; varying vec3 vP; uniform float uTime;
        void main(){
          vec3 p = position;
          p += normal * sin(uTime*1.2 + p.x*4.) * 0.03;
          vN = normalize(normalMatrix * normal);
          vec4 mv = modelViewMatrix * vec4(p,1.);
          vP = mv.xyz;
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: `
        varying vec3 vN; varying vec3 vP;
        uniform float uTime; uniform vec3 uAccent;
        void main(){
          vec3 V = normalize(-vP);
          float fres = pow(1.-max(0.,dot(V,vN)), 2.2);
          vec3 col = mix(vec3(0.05,0.05,0.07), uAccent, fres);
          float s = sin(vP.y*40. + uTime*2.) * 0.5 + 0.5;
          col += vec3(0.8,0.8,0.82) * pow(s, 18.) * 0.2;
          gl_FragColor = vec4(col, fres * 0.9 + 0.1);
        }`,
    });
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);

    const wire = new THREE.LineSegments(
      new THREE.WireframeGeometry(geo),
      new THREE.LineBasicMaterial({
        color: 0xf3f0ea,
        transparent: true,
        opacity: 0.15,
      })
    );
    mesh.add(wire);

    resizeRenderer(renderer, canvas, camera);
    const onResize = () => resizeRenderer(renderer, canvas, camera);
    window.addEventListener('resize', onResize);

    const clock = new THREE.Clock();
    let raf = 0;
    const tick = () => {
      const t = clock.getElapsedTime();
      mouse.current.sy += (mouse.current.y - mouse.current.sy) * 0.06;
      mat.uniforms.uTime.value = t;
      mesh.rotation.y = t * 0.4;
      mesh.rotation.x = t * 0.2 + mouse.current.sy * 0.3;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      mat.dispose();
      geo.dispose();
    };
  }, [mouse]);

  return <canvas ref={canvasRef} />;
}

/* =========================================================
   CTA — morphing plane with orange ripples
   ========================================================= */
export function CtaScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 4);

    const geo = new THREE.PlaneGeometry(10, 6, 140, 80);
    const mat = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        uTime: { value: 0 },
        uAccent: { value: new THREE.Color(0xff5a1f) },
      },
      vertexShader: `
        uniform float uTime;
        varying vec2 vUv; varying float vH;
        void main(){
          vUv = uv;
          vec3 p = position;
          float d = distance(uv, vec2(0.5));
          float wave = sin(d*22. - uTime*2.) * 0.12;
          wave += sin(uv.x*8. + uTime) * 0.04;
          p.z += wave;
          vH = wave;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p,1.);
        }`,
      fragmentShader: `
        varying vec2 vUv; varying float vH;
        uniform vec3 uAccent; uniform float uTime;
        void main(){
          float d = distance(vUv, vec2(0.5));
          vec3 col = mix(vec3(0.0), uAccent, smoothstep(0.1, 0.5, vH + 0.2) * 0.6);
          float ring = abs(sin(d*22. - uTime*2.));
          col += uAccent * pow(ring, 16.) * 0.8;
          col *= smoothstep(0.9, 0.3, d);
          gl_FragColor = vec4(col, 1.);
        }`,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.rotation.x = -0.8;
    mesh.position.y = -0.5;
    scene.add(mesh);

    resizeRenderer(renderer, canvas, camera);
    const onResize = () => resizeRenderer(renderer, canvas, camera);
    window.addEventListener('resize', onResize);

    const clock = new THREE.Clock();
    let raf = 0;
    const tick = () => {
      const t = clock.getElapsedTime();
      mat.uniforms.uTime.value = t;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      mat.dispose();
      geo.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} />;
}
