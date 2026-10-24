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
    scene.fog = new THREE.FogExp2(0x060907, 0.022);

    const camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 100);
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
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    // 3. Lighting (Full-bleed civic illumination)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const emeraldLight = new THREE.PointLight(0x10b981, 9, 50);
    emeraldLight.position.set(8, 7, 7);
    scene.add(emeraldLight);

    const goldLight = new THREE.PointLight(0xf59e0b, 7, 45);
    goldLight.position.set(-9, -6, 6);
    scene.add(goldLight);

    const cyanLight = new THREE.PointLight(0x06b6d4, 6, 40);
    cyanLight.position.set(0, -8, 5);
    scene.add(cyanLight);

    const topLight = new THREE.PointLight(0x34d399, 5, 35);
    topLight.position.set(0, 9, 4);
    scene.add(topLight);

    // 4. Create Card Texture (High-res legislative document texture)
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
      grad.addColorStop(0, 'rgba(12, 22, 17, 0.95)');
      grad.addColorStop(1, 'rgba(5, 10, 7, 0.97)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1024, 1440);

      // Luminous Glass Border
      ctx.strokeStyle = isGoldAccent ? '#f59e0b' : '#10b981';
      ctx.lineWidth = 14;
      ctx.strokeRect(16, 16, 992, 1408);

      // Inner hairline
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.16)';
      ctx.lineWidth = 3;
      ctx.strokeRect(36, 36, 952, 1368);

      // Header Tag
      ctx.fillStyle = isGoldAccent ? '#d97706' : '#059669';
      ctx.fillRect(60, 68, 420, 56);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 26px sans-serif';
      ctx.fillText(category, 80, 106);

      // Jurisdiction Pill
      ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.fillRect(600, 68, 360, 56);
      ctx.fillStyle = isGoldAccent ? '#fbbf24' : '#34d399';
      ctx.font = 'bold 22px monospace';
      ctx.fillText(jurisdiction, 620, 104);

      // Resolution Number
      ctx.fillStyle = isGoldAccent ? '#fbbf24' : '#34d399';
      ctx.font = 'bold 36px monospace';
      ctx.fillText(resolution, 60, 185);

      // Ordinance Title
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 44px sans-serif';
      ctx.fillText(title, 60, 248);

      // Decorative divider
      ctx.strokeStyle = isGoldAccent ? 'rgba(245, 158, 11, 0.45)' : 'rgba(16, 185, 129, 0.45)';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(60, 285);
      ctx.lineTo(964, 285);
      ctx.stroke();

      // Faux text paragraphs
      ctx.fillStyle = 'rgba(248, 250, 252, 0.88)';
      const lines = [
        'SECTION 1. Policy Declaration & Sovereign Municipal Mandate.',
        'SECTION 2. Scope Across 89 Barangays of Cabanatuan City.',
        'SECTION 3. Community Compliance & Regulatory Enforcement.',
        'SECTION 4. Penalties, Graduated Fines & Community Service.',
        'SECTION 5. Barangay LGU Executive Coordination Protocol.',
        'SECTION 6. Repealing Clause, Penal Sanctions & Effectivity.',
      ];
      lines.forEach((line, i) => {
        ctx.font = '27px monospace';
        ctx.fillText(line, 60, 355 + i * 85);
        // Faux content lines
        ctx.fillStyle = 'rgba(148, 163, 184, 0.42)';
        ctx.fillRect(60, 385 + i * 85, 780, 14);
        ctx.fillRect(60, 410 + i * 85, 600, 14);
        ctx.fillStyle = 'rgba(248, 250, 252, 0.88)';
      });

      // Municipal seal badge representation at bottom right
      ctx.fillStyle = isGoldAccent ? 'rgba(245, 158, 11, 0.28)' : 'rgba(16, 185, 129, 0.28)';
      ctx.beginPath();
      ctx.arc(840, 1250, 85, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = isGoldAccent ? '#f59e0b' : '#10b981';
      ctx.lineWidth = 6;
      ctx.stroke();
      ctx.fillStyle = isGoldAccent ? '#f59e0b' : '#10b981';
      ctx.font = 'bold 24px sans-serif';
      ctx.fillText('SEAL', 810, 1258);

      // Official Stamp Banner at bottom left
      ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.fillRect(60, 1210, 520, 80);
      ctx.fillStyle = isGoldAccent ? '#fbbf24' : '#34d399';
      ctx.font = 'bold 24px monospace';
      ctx.fillText('ENACTED · CABANATUAN CITY COUNCIL', 80, 1258);

      const texture = new THREE.CanvasTexture(canvas);
      texture.generateMipmaps = true;
      return texture;
    };

    // 5. Floating Translucent Ordinance Cards — Full Background Canopy
    const cardsGroup = new THREE.Group();
    const cardGeom = new THREE.PlaneGeometry(4.2, 5.8);

    const cardData = [
      // Left Flank (Prominent, frames the text on the left)
      { title: 'Solid Waste Act', res: 'ORD-2023-014', cat: 'CITY ORDINANCE', jur: 'CITY-WIDE', x: -8.8, y: 1.2, z: 2.2, rotY: 0.38, rotX: 0.08, gold: false },
      { title: 'Road Clearance Act', res: 'ORD-2023-021', cat: 'PUBLIC SAFETY', jur: 'CITY-WIDE', x: -7.5, y: -3.8, z: 1.6, rotY: 0.28, rotX: 0.16, gold: true },
      // Right Flank (Prominent, frames the text on the right)
      { title: 'Public Safety & Peace', res: 'ORD-2022-008', cat: 'CITY ORDINANCE', jur: 'CITY-WIDE', x: 8.8, y: -0.6, z: 2.4, rotY: -0.38, rotX: -0.06, gold: true },
      { title: 'Environmental Code', res: 'ORD-2024-003', cat: 'ENVIRONMENTAL', jur: 'CITY-WIDE', x: 7.6, y: 3.8, z: 1.8, rotY: -0.3, rotX: -0.12, gold: false },
      // Top Spread (Peeking above headline)
      { title: 'Anti-Noise & Peace', res: 'ORD-2023-019', cat: 'MUNICIPAL CODE', jur: 'CITY-WIDE', x: -3.5, y: 5.6, z: 0.8, rotY: 0.18, rotX: -0.22, gold: false },
      { title: 'Barangay Health Code', res: 'ORD-2024-009', cat: 'BARANGAY LEVEL', jur: 'ADUAS CENTRO', x: 3.8, y: 5.4, z: 1.0, rotY: -0.2, rotX: -0.2, gold: true },
      // Bottom Spread (Floating beneath subtext)
      { title: 'Barangay Sanitation', res: 'ORD-2024-012', cat: 'BARANGAY LEVEL', jur: 'SAN JOSE SUR', x: -2.8, y: -5.4, z: 1.4, rotY: 0.15, rotX: 0.22, gold: false },
      { title: 'Revenue & Local Taxes', res: 'ORD-2023-005', cat: 'FISCAL ORDINANCE', jur: 'CITY-WIDE', x: 3.2, y: -5.2, z: 1.2, rotY: -0.14, rotX: 0.2, gold: false },
      // Mid-Depth Floating Ambient (Far left/right edges)
      { title: 'Traffic Management Code', res: 'ORD-2022-015', cat: 'TRANSPORTATION', jur: 'CITY-WIDE', x: -11.5, y: -1.2, z: -0.5, rotY: 0.45, rotX: 0.05, gold: false },
      { title: 'Civic Transparency Act', res: 'ORD-2024-001', cat: 'GOVERNANCE', jur: 'CITY-WIDE', x: 11.5, y: 1.8, z: -0.2, rotY: -0.45, rotX: -0.08, gold: true },
      // Deep Background Layer (Behind text)
      { title: 'Charter of Cabanatuan', res: 'REPUBLIC ACT 526', cat: 'LEGISLATIVE CHARTER', jur: 'CITY GOVT', x: 0, y: 0.2, z: -3.2, rotY: 0.03, rotX: 0.02, gold: true },
    ];

    const cardMeshes: THREE.Mesh[] = [];

    cardData.forEach((d) => {
      const mat = new THREE.MeshPhysicalMaterial({
        map: createCardTexture(d.title, d.res, d.cat, d.jur, d.gold),
        transparent: true,
        opacity: 0.95,
        roughness: 0.16,
        metalness: 0.15,
        transmission: 0.22,
        ior: 1.35,
        side: THREE.DoubleSide,
      });

      const mesh = new THREE.Mesh(cardGeom, mat);
      mesh.position.set(d.x, d.y, d.z);
      mesh.rotation.set(d.rotX, d.rotY, 0);
      cardsGroup.add(mesh);
      cardMeshes.push(mesh);
    });

    scene.add(cardsGroup);

    // 6. Barangay Node Network (Exactly 89 barangays across Cabanatuan City!)
    const nodeCount = 89;
    const nodePositions: THREE.Vector3[] = [];
    const nodeGroup = new THREE.Group();

    const nodeGeom = new THREE.SphereGeometry(0.2, 16, 16);
    const emeraldMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      emissive: 0x10b981,
      emissiveIntensity: 0.9,
      roughness: 0.2,
    });
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      emissive: 0xf59e0b,
      emissiveIntensity: 0.85,
      roughness: 0.2,
    });
    const cyanMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.9,
      roughness: 0.2,
    });

    for (let i = 0; i < nodeCount; i++) {
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * 28,
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 9
      );
      nodePositions.push(pos);

      let mat = emeraldMat;
      if (i % 4 === 0) mat = goldMat;
      else if (i % 6 === 0) mat = cyanMat;

      const nodeMesh = new THREE.Mesh(nodeGeom, mat);
      nodeMesh.position.copy(pos);
      nodeGroup.add(nodeMesh);
    }

    // Connect close nodes with lines (Cyber filaments)
    const lineCoords: number[] = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = nodePositions[i].distanceTo(nodePositions[j]);
        if (dist < 5.0) {
          lineCoords.push(
            nodePositions[i].x, nodePositions[i].y, nodePositions[i].z,
            nodePositions[j].x, nodePositions[j].y, nodePositions[j].z
          );
        }
      }
    }

    const lineGeom = new THREE.BufferGeometry();
    lineGeom.setAttribute('position', new THREE.Float32BufferAttribute(lineCoords, 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.38,
    });
    const lineSegments = new THREE.LineSegments(lineGeom, lineMat);
    nodeGroup.add(lineSegments);

    scene.add(nodeGroup);

    // 7. Ambient Data Particle Field
    const particleCount = 260;
    const particleCoords = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particleCoords[i] = (Math.random() - 0.5) * 34;
      particleCoords[i + 1] = (Math.random() - 0.5) * 22;
      particleCoords[i + 2] = (Math.random() - 0.5) * 15;
    }
    const particleGeom = new THREE.BufferGeometry();
    particleGeom.setAttribute('position', new THREE.BufferAttribute(particleCoords, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x34d399,
      size: 0.065,
      transparent: true,
      opacity: 0.6,
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
      targetX = x * 2.8;
      targetY = -y * 1.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize handler
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

        // Smooth mouse lerp
        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;

        camera.position.x = mouseX * 2.2;
        camera.position.y = mouseY * 1.6;
        camera.lookAt(0, 0, 0);

        // Gentle floating cards oscillation
        cardMeshes.forEach((card, idx) => {
          const offset = idx * 0.95;
          card.position.y += Math.sin(time * 0.85 + offset) * 0.0028;
          card.rotation.z = Math.sin(time * 0.55 + offset) * 0.03;
        });

        // Network subtle drift
        nodeGroup.rotation.y = time * 0.025;
        nodeGroup.rotation.x = Math.sin(time * 0.018) * 0.04;

        // Particles slow drift
        particles.rotation.y = time * 0.018;
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

      // Dispose Three.js objects
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
        opacity: 0.98,
      }}
      aria-hidden="true"
    />
  );
}
