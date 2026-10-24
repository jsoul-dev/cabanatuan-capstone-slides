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
    scene.fog = new THREE.FogExp2(0x060907, 0.035);

    const camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 100);
    camera.position.set(0, 0, 14);

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

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const emeraldLight = new THREE.PointLight(0x10b981, 3, 25);
    emeraldLight.position.set(4, 5, 4);
    scene.add(emeraldLight);

    const goldLight = new THREE.PointLight(0xf59e0b, 2, 20);
    goldLight.position.set(-5, -4, 3);
    scene.add(goldLight);

    // 4. Create Card Texture (Legislation mock texture)
    const createCardTexture = (title: string, resolution: string) => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 720;
      const ctx = canvas.getContext('2d');
      if (!ctx) return new THREE.CanvasTexture(canvas);

      // Card Background
      ctx.fillStyle = 'rgba(10, 18, 14, 0.82)';
      ctx.fillRect(0, 0, 512, 720);

      // Card Border Accent
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 6;
      ctx.strokeRect(8, 8, 496, 704);

      // Header Tag
      ctx.fillStyle = '#059669';
      ctx.fillRect(36, 40, 180, 32);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 16px sans-serif';
      ctx.fillText('CITY ORDINANCE', 48, 62);

      // Resolution Number
      ctx.fillStyle = '#f59e0b';
      ctx.font = '600 20px monospace';
      ctx.fillText(resolution, 36, 115);

      // Title
      ctx.fillStyle = '#f8fafc';
      ctx.font = 'bold 24px sans-serif';
      ctx.fillText(title, 36, 155);

      // Decorative divider
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(36, 180);
      ctx.lineTo(476, 180);
      ctx.stroke();

      // Faux text paragraphs
      ctx.fillStyle = 'rgba(148, 163, 184, 0.65)';
      const lines = [
        'SECTION 1. Short Title and Policy Mandate.',
        'SECTION 2. Scope and Jurisdictional Applicability.',
        'SECTION 3. Community Compliance & Enforcement.',
        'SECTION 4. Penalties and Corrective Actions.',
        'SECTION 5. Barangay LGU Coordination Protocol.',
      ];
      lines.forEach((line, i) => {
        ctx.font = '16px monospace';
        ctx.fillText(line, 36, 225 + i * 42);
        // Faux content lines
        ctx.fillStyle = 'rgba(148, 163, 184, 0.35)';
        ctx.fillRect(36, 240 + i * 42, 380, 8);
        ctx.fillRect(36, 254 + i * 42, 290, 8);
        ctx.fillStyle = 'rgba(148, 163, 184, 0.65)';
      });

      // Municipal seal badge representation at bottom
      ctx.fillStyle = 'rgba(16, 185, 129, 0.15)';
      ctx.beginPath();
      ctx.arc(420, 630, 40, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.fillStyle = '#10b981';
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText('CABANATUAN', 380, 634);

      const texture = new THREE.CanvasTexture(canvas);
      texture.generateMipmaps = true;
      return texture;
    };

    // 5. Floating Translucent Ordinance Cards
    const cardsGroup = new THREE.Group();
    const cardGeom = new THREE.PlaneGeometry(2.3, 3.2);

    const cardData = [
      { title: 'Solid Waste Act', res: 'ORD-2023-014', x: -3.8, y: 1.2, z: 1.2, rotY: 0.28, rotX: 0.08 },
      { title: 'Public Safety & Peace', res: 'ORD-2022-008', x: 3.6, y: -0.6, z: 1.8, rotY: -0.32, rotX: -0.05 },
      { title: 'Traffic & Obstruction', res: 'ORD-2023-021', x: -2.2, y: -2.4, z: 0.5, rotY: 0.18, rotX: 0.12 },
      { title: 'Environmental Code', res: 'ORD-2024-003', x: 2.4, y: 2.2, z: -0.5, rotY: -0.22, rotX: -0.1 },
      { title: 'Barangay Health Code', res: 'ORD-2024-019', x: 0.2, y: -2.8, z: 2.2, rotY: 0.05, rotX: 0.15 },
    ];

    const cardMeshes: THREE.Mesh[] = [];

    cardData.forEach((d) => {
      const mat = new THREE.MeshPhysicalMaterial({
        map: createCardTexture(d.title, d.res),
        transparent: true,
        opacity: 0.88,
        roughness: 0.2,
        metalness: 0.1,
        transmission: 0.35,
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

    // 6. Barangay Node Network (89 barangays conceptual web)
    const nodeCount = 28;
    const nodePositions: THREE.Vector3[] = [];
    const nodeGroup = new THREE.Group();

    const nodeGeom = new THREE.SphereGeometry(0.12, 16, 16);
    const emeraldMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      emissive: 0x10b981,
      emissiveIntensity: 0.6,
      roughness: 0.3,
    });
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      emissive: 0xf59e0b,
      emissiveIntensity: 0.5,
      roughness: 0.3,
    });

    for (let i = 0; i < nodeCount; i++) {
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 8.5,
        (Math.random() - 0.5) * 5
      );
      nodePositions.push(pos);

      const isGold = i % 4 === 0;
      const nodeMesh = new THREE.Mesh(nodeGeom, isGold ? goldMat : emeraldMat);
      nodeMesh.position.copy(pos);
      nodeGroup.add(nodeMesh);
    }

    // Connect close nodes with lines
    const lineCoords: number[] = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = nodePositions[i].distanceTo(nodePositions[j]);
        if (dist < 4.2) {
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
      opacity: 0.22,
    });
    const lineSegments = new THREE.LineSegments(lineGeom, lineMat);
    nodeGroup.add(lineSegments);

    scene.add(nodeGroup);

    // 7. Ambient Particle Field
    const particleCount = 120;
    const particleCoords = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particleCoords[i] = (Math.random() - 0.5) * 20;
      particleCoords[i + 1] = (Math.random() - 0.5) * 12;
      particleCoords[i + 2] = (Math.random() - 0.5) * 10;
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
      targetX = x * 1.8;
      targetY = -y * 1.2;
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

        camera.position.x = mouseX * 1.5;
        camera.position.y = mouseY * 1.2;
        camera.lookAt(0, 0, 0);

        // Gentle floating cards
        cardMeshes.forEach((card, idx) => {
          const offset = idx * 1.2;
          card.position.y += Math.sin(time * 0.8 + offset) * 0.0018;
          card.rotation.z = Math.sin(time * 0.5 + offset) * 0.03;
        });

        // Network subtle drift
        nodeGroup.rotation.y = time * 0.02;
        nodeGroup.rotation.x = Math.sin(time * 0.015) * 0.04;

        // Particles slow drift
        particles.rotation.y = time * 0.015;
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

      // Dispose Three.js objects to avoid memory leaks
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
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.9,
      }}
      aria-hidden="true"
    />
  );
}
