import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface OrdinanceNetworkSceneProps {
  isActive?: boolean;
}

export default function OrdinanceNetworkScene({ isActive = true }: OrdinanceNetworkSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive || !mountRef.current) return;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const container = mountRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060907, 0.03);

    const camera = new THREE.PerspectiveCamera(46, width / height, 0.1, 100);
    camera.position.set(0, 0, 16);

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // 3. Lighting (Atmospheric peripheral lighting)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
    scene.add(ambientLight);

    const emeraldLight = new THREE.PointLight(0x10b981, 6, 45);
    emeraldLight.position.set(10, 6, 6);
    scene.add(emeraldLight);

    const goldLight = new THREE.PointLight(0xf59e0b, 5, 40);
    goldLight.position.set(-10, -5, 5);
    scene.add(goldLight);

    const cyanLight = new THREE.PointLight(0x06b6d4, 4, 35);
    cyanLight.position.set(0, -9, 4);
    scene.add(cyanLight);

    // 4. Create Card Texture (Clean legislative document texture)
    const createCardTexture = (
      title: string,
      resolution: string,
      category: string,
      jurisdiction: string,
      isGoldAccent = false
    ) => {
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 1440;
      const ctx = canvas.getContext('2d');
      if (!ctx) return new THREE.CanvasTexture(canvas);

      // Card Background (Translucent Obsidian Glass)
      const grad = ctx.createLinearGradient(0, 0, 1024, 1440);
      grad.addColorStop(0, 'rgba(10, 18, 14, 0.88)');
      grad.addColorStop(1, 'rgba(4, 8, 6, 0.92)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1024, 1440);

      // Luminous Glass Border
      ctx.strokeStyle = isGoldAccent ? '#f59e0b' : '#10b981';
      ctx.lineWidth = 12;
      ctx.strokeRect(16, 16, 992, 1408);

      // Inner hairline
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.lineWidth = 2;
      ctx.strokeRect(34, 34, 956, 1372);

      // Header Tag
      ctx.fillStyle = isGoldAccent ? '#d97706' : '#059669';
      ctx.fillRect(60, 68, 400, 56);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 26px sans-serif';
      ctx.fillText(category, 80, 106);

      // Jurisdiction Pill
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(620, 68, 340, 56);
      ctx.fillStyle = isGoldAccent ? '#fbbf24' : '#34d399';
      ctx.font = 'bold 22px monospace';
      ctx.fillText(jurisdiction, 640, 104);

      // Resolution Number
      ctx.fillStyle = isGoldAccent ? '#fbbf24' : '#34d399';
      ctx.font = 'bold 34px monospace';
      ctx.fillText(resolution, 60, 185);

      // Ordinance Title
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 42px sans-serif';
      ctx.fillText(title, 60, 248);

      // Decorative divider
      ctx.strokeStyle = isGoldAccent ? 'rgba(245, 158, 11, 0.35)' : 'rgba(16, 185, 129, 0.35)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(60, 285);
      ctx.lineTo(964, 285);
      ctx.stroke();

      // Faux text paragraphs
      ctx.fillStyle = 'rgba(248, 250, 252, 0.75)';
      const lines = [
        'SECTION 1. Policy Declaration & Sovereign Mandate.',
        'SECTION 2. Scope Across 89 Barangays of Cabanatuan.',
        'SECTION 3. Community Standards & Regulatory Compliance.',
        'SECTION 4. Penalties, Graduated Fines & Sanctions.',
        'SECTION 5. Barangay LGU Executive Enforcement Mandate.',
        'SECTION 6. Repealing Clause, Penal Sanctions & Effectivity.',
      ];
      lines.forEach((line, i) => {
        ctx.font = '26px monospace';
        ctx.fillText(line, 60, 355 + i * 85);
        ctx.fillStyle = 'rgba(148, 163, 184, 0.35)';
        ctx.fillRect(60, 385 + i * 85, 780, 12);
        ctx.fillRect(60, 408 + i * 85, 580, 12);
        ctx.fillStyle = 'rgba(248, 250, 252, 0.75)';
      });

      // Municipal seal badge representation at bottom right
      ctx.fillStyle = isGoldAccent ? 'rgba(245, 158, 11, 0.2)' : 'rgba(16, 185, 129, 0.2)';
      ctx.beginPath();
      ctx.arc(840, 1250, 80, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = isGoldAccent ? '#f59e0b' : '#10b981';
      ctx.lineWidth = 5;
      ctx.stroke();
      ctx.fillStyle = isGoldAccent ? '#f59e0b' : '#10b981';
      ctx.font = 'bold 22px sans-serif';
      ctx.fillText('SEAL', 812, 1258);

      // Official Stamp Banner at bottom left
      ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
      ctx.fillRect(60, 1210, 520, 80);
      ctx.fillStyle = isGoldAccent ? '#fbbf24' : '#34d399';
      ctx.font = 'bold 22px monospace';
      ctx.fillText('ENACTED · CABANATUAN CITY COUNCIL', 80, 1258);

      const texture = new THREE.CanvasTexture(canvas);
      texture.generateMipmaps = true;
      return texture;
    };

    // 5. Floating Translucent Ordinance Cards — PERIPHERAL FRAMING (Center Cleared)
    const cardsGroup = new THREE.Group();
    const cardGeom = new THREE.PlaneGeometry(3.6, 5.0);

    // Cards are positioned on the outer perimeter so the center title is completely clear
    const cardData = [
      // Left Flank (Outside the center reading column)
      { title: 'Solid Waste Act', res: 'ORD-2023-014', cat: 'CITY ORDINANCE', jur: 'CITY-WIDE', x: -8.6, y: 1.0, z: 1.5, rotY: 0.38, rotX: 0.06, gold: false },
      { title: 'Road Clearance Act', res: 'ORD-2023-021', cat: 'PUBLIC SAFETY', jur: 'CITY-WIDE', x: -7.6, y: -4.0, z: 1.0, rotY: 0.28, rotX: 0.14, gold: true },
      { title: 'Traffic Management', res: 'ORD-2022-015', cat: 'TRANSPORTATION', jur: 'CITY-WIDE', x: -11.2, y: -1.0, z: -0.8, rotY: 0.45, rotX: 0.04, gold: false },

      // Right Flank (Outside the center reading column)
      { title: 'Public Safety & Peace', res: 'ORD-2022-008', cat: 'CITY ORDINANCE', jur: 'CITY-WIDE', x: 8.6, y: -0.6, z: 1.6, rotY: -0.38, rotX: -0.05, gold: true },
      { title: 'Environmental Code', res: 'ORD-2024-003', cat: 'ENVIRONMENTAL', jur: 'CITY-WIDE', x: 7.6, y: 3.8, z: 1.2, rotY: -0.3, rotX: -0.1, gold: false },
      { title: 'Civic Transparency', res: 'ORD-2024-001', cat: 'GOVERNANCE', jur: 'CITY-WIDE', x: 11.2, y: 1.6, z: -0.6, rotY: -0.45, rotX: -0.06, gold: true },

      // Top Periphery (Above the kicker)
      { title: 'Anti-Noise & Peace', res: 'ORD-2023-019', cat: 'MUNICIPAL CODE', jur: 'CITY-WIDE', x: -4.5, y: 6.4, z: 0.4, rotY: 0.16, rotX: -0.25, gold: false },
      { title: 'Barangay Health Code', res: 'ORD-2024-009', cat: 'BARANGAY LEVEL', jur: 'ADUAS CENTRO', x: 4.6, y: 6.2, z: 0.5, rotY: -0.18, rotX: -0.22, gold: true },

      // Bottom Periphery (Below the university footer)
      { title: 'Barangay Sanitation', res: 'ORD-2024-012', cat: 'BARANGAY LEVEL', jur: 'SAN JOSE SUR', x: -4.4, y: -6.4, z: 0.8, rotY: 0.14, rotX: 0.24, gold: false },
      { title: 'Revenue & Local Taxes', res: 'ORD-2023-005', cat: 'FISCAL ORDINANCE', jur: 'CITY-WIDE', x: 4.5, y: -6.2, z: 0.6, rotY: -0.12, rotX: 0.22, gold: false },

      // Outer Deep Flanks (Behind fog, completely away from center reading column)
      { title: 'Charter of Cabanatuan', res: 'REPUBLIC ACT 526', cat: 'LEGISLATIVE CHARTER', jur: 'CITY GOVT', x: -12.5, y: 3.5, z: -4.5, rotY: 0.42, rotX: 0.05, gold: true },
      { title: 'Cabanatuan City Code', res: 'ADMIN-CODE-2022', cat: 'MUNICIPAL GOVERNANCE', jur: 'CITY GOVT', x: 12.5, y: -3.5, z: -4.5, rotY: -0.42, rotX: -0.05, gold: false },
    ];

    const cardMeshes: THREE.Mesh[] = [];

    cardData.forEach((d) => {
      const mat = new THREE.MeshPhysicalMaterial({
        map: createCardTexture(d.title, d.res, d.cat, d.jur, d.gold),
        transparent: true,
        opacity: d.z < -4 ? 0.35 : 0.82,
        roughness: 0.22,
        metalness: 0.1,
        transmission: 0.28,
        ior: 1.3,
        side: THREE.DoubleSide,
      });

      const mesh = new THREE.Mesh(cardGeom, mat);
      mesh.position.set(d.x, d.y, d.z);
      mesh.rotation.set(d.rotX, d.rotY, 0);
      cardsGroup.add(mesh);
      cardMeshes.push(mesh);
    });

    scene.add(cardsGroup);

    // 6. Barangay Node Network (89 nodes with CENTER EXCLUSION ZONE)
    const nodeCount = 89;
    const nodePositions: THREE.Vector3[] = [];
    const nodeGroup = new THREE.Group();

    // Small, refined star-like nodes
    const nodeGeom = new THREE.SphereGeometry(0.1, 14, 14);
    const emeraldMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      emissive: 0x10b981,
      emissiveIntensity: 0.7,
      roughness: 0.3,
    });
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      emissive: 0xf59e0b,
      emissiveIntensity: 0.65,
      roughness: 0.3,
    });
    const cyanMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.7,
      roughness: 0.3,
    });

    for (let i = 0; i < nodeCount; i++) {
      let x = (Math.random() - 0.5) * 30;
      let y = (Math.random() - 0.5) * 20;
      let z = (Math.random() - 0.5) * 8;

      // EXCLUSION ZONE: If point is in center reading box, push it outward
      if (Math.abs(x) < 6.5 && Math.abs(y) < 3.8) {
        if (Math.random() > 0.5) {
          x = (x >= 0 ? 1 : -1) * (6.8 + Math.random() * 7.5);
        } else {
          y = (y >= 0 ? 1 : -1) * (4.2 + Math.random() * 5.5);
        }
      }

      const pos = new THREE.Vector3(x, y, z);
      nodePositions.push(pos);

      let mat = emeraldMat;
      if (i % 5 === 0) mat = goldMat;
      else if (i % 7 === 0) mat = cyanMat;

      const nodeMesh = new THREE.Mesh(nodeGeom, mat);
      nodeMesh.position.copy(pos);
      nodeGroup.add(nodeMesh);
    }

    // Connect close nodes with lines (Exclude connecting through the center reading area)
    const lineCoords: number[] = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const p1 = nodePositions[i];
        const p2 = nodePositions[j];
        const dist = p1.distanceTo(p2);

        // Check midpoint isn't in center reading zone
        const midX = (p1.x + p2.x) * 0.5;
        const midY = (p1.y + p2.y) * 0.5;
        const inCenter = Math.abs(midX) < 6.2 && Math.abs(midY) < 3.6;

        if (dist < 4.6 && !inCenter) {
          lineCoords.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
        }
      }
    }

    const lineGeom = new THREE.BufferGeometry();
    lineGeom.setAttribute('position', new THREE.Float32BufferAttribute(lineCoords, 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.22,
    });
    const lineSegments = new THREE.LineSegments(lineGeom, lineMat);
    nodeGroup.add(lineSegments);

    scene.add(nodeGroup);

    // 7. Ambient Data Particle Field (Soft starfield)
    const particleCount = 200;
    const particleCoords = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particleCoords[i] = (Math.random() - 0.5) * 36;
      particleCoords[i + 1] = (Math.random() - 0.5) * 24;
      particleCoords[i + 2] = (Math.random() - 0.5) * 14;
    }
    const particleGeom = new THREE.BufferGeometry();
    particleGeom.setAttribute('position', new THREE.BufferAttribute(particleCoords, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x34d399,
      size: 0.045,
      transparent: true,
      opacity: 0.45,
    });
    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);

    // 8. Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 2.2;
      targetY = -y * 1.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // 9. Animation Loop
    let animId: number;
    const startTime = performance.now();

    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (!prefersReducedMotion) {
        const time = (performance.now() - startTime) * 0.001;

        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;

        camera.position.x = mouseX * 1.8;
        camera.position.y = mouseY * 1.3;
        camera.lookAt(0, 0, 0);

        // Gentle floating cards oscillation
        cardMeshes.forEach((card, idx) => {
          const offset = idx * 0.9;
          card.position.y += Math.sin(time * 0.75 + offset) * 0.0022;
          card.rotation.z = Math.sin(time * 0.45 + offset) * 0.02;
        });

        // Network subtle drift
        nodeGroup.rotation.y = time * 0.018;
        nodeGroup.rotation.x = Math.sin(time * 0.015) * 0.03;

        particles.rotation.y = time * 0.014;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 10. Cleanup & Full Resource Disposal
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }

      scene.clear();
      renderer.dispose();
      cardGeom.dispose();
      nodeGeom.dispose();
      lineGeom.dispose();
      particleGeom.dispose();
      cardMeshes.forEach((mesh) => {
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((m) => m.dispose());
        } else {
          mesh.material.dispose();
        }
      });
      emeraldMat.dispose();
      goldMat.dispose();
      cyanMat.dispose();
      lineMat.dispose();
      particleMat.dispose();
    };
  }, [isActive]);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.88,
      }}
      aria-hidden="true"
    />
  );
}
