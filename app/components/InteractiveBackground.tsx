"use client";

import React, { useEffect, useRef } from "react";

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 170, // Repulsion influence radius
    };

    // Star particle density
    const starCount = Math.min(Math.floor((width * height) / 10000), 100);
    const stars: Array<{
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
      baseVx: number;
      baseVy: number;
      radius: number;
      baseAlpha: number;
      twinkleSpeed: number;
      twinklePhase: number;
      hasCrossGlow: boolean;
    }> = [];

    for (let i = 0; i < starCount; i++) {
      const rx = Math.random() * width;
      const ry = Math.random() * height;
      const bVx = (Math.random() - 0.5) * 0.25;
      const bVy = (Math.random() - 0.5) * 0.25;
      const rad = Math.random() * 1.6 + 0.6;

      stars.push({
        x: rx,
        y: ry,
        baseX: rx,
        baseY: ry,
        vx: bVx,
        vy: bVy,
        baseVx: bVx,
        baseVy: bVy,
        radius: rad,
        baseAlpha: Math.random() * 0.5 + 0.25,
        twinkleSpeed: Math.random() * 0.025 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
        hasCrossGlow: Math.random() > 0.85 && rad > 1.4,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const render = () => {
      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;

      ctx.clearRect(0, 0, width, height);

      // Subtle ambient cursor starlight glow
      if (mouse.x > -500 && mouse.y > -500) {
        const cursorGlow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouse.radius * 1.4
        );
        cursorGlow.addColorStop(0, "rgba(16, 185, 129, 0.06)");
        cursorGlow.addColorStop(0.5, "rgba(6, 182, 212, 0.02)");
        cursorGlow.addColorStop(1, "rgba(5, 7, 12, 0)");

        ctx.fillStyle = cursorGlow;
        ctx.fillRect(0, 0, width, height);
      }

      // Update and draw each star
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        // 1. Mouse Repulsion Force (Floating away when hovered)
        const dx = s.x - mouse.x;
        const dy = s.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius && dist > 1) {
          // Repulsion intensity inversely proportional to distance
          const repelFactor = (1 - dist / mouse.radius);
          const force = repelFactor * 1.8;
          const angle = Math.atan2(dy, dx);

          // Push star away from mouse
          s.vx += Math.cos(angle) * force;
          s.vy += Math.sin(angle) * force;
        }

        // 2. Physics damping & gentle return towards base drift speed
        s.vx += (s.baseVx - s.vx) * 0.035;
        s.vy += (s.baseVy - s.vy) * 0.035;

        // Apply velocity
        s.x += s.vx;
        s.y += s.vy;

        // Wrap around screen edges smoothly
        if (s.x < -20) s.x = width + 20;
        if (s.x > width + 20) s.x = -20;
        if (s.y < -20) s.y = height + 20;
        if (s.y > height + 20) s.y = -20;

        // 3. Twinkle Phase
        s.twinklePhase += s.twinkleSpeed;
        const twinkleAlpha =
          s.baseAlpha + Math.sin(s.twinklePhase) * 0.25;
        const finalAlpha = Math.max(0.1, Math.min(0.95, twinkleAlpha));

        // 4. Draw Star Core & Starlight Halo
        // Outer soft glow
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(16, 185, 129, ${finalAlpha * 0.25})`;
        ctx.fill();

        // Inner bright star core
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 252, 231, ${finalAlpha})`;
        ctx.fill();

        // Subtle 4-point cross shimmer on brighter focal stars
        if (s.hasCrossGlow) {
          ctx.strokeStyle = `rgba(167, 243, 208, ${finalAlpha * 0.4})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(s.x - s.radius * 3.5, s.y);
          ctx.lineTo(s.x + s.radius * 3.5, s.y);
          ctx.moveTo(s.x, s.y - s.radius * 3.5);
          ctx.lineTo(s.x, s.y + s.radius * 3.5);
          ctx.stroke();
        }

        // 5. Connect nearby star constellations
        for (let j = i + 1; j < stars.length; j++) {
          const s2 = stars[j];
          const distNodes = Math.hypot(s.x - s2.x, s.y - s2.y);
          if (distNodes < 95) {
            const lineAlpha = (1 - distNodes / 95) * 0.08 * finalAlpha;
            ctx.beginPath();
            ctx.moveTo(s.x, s.y);
            ctx.lineTo(s2.x, s2.y);
            ctx.strokeStyle = `rgba(52, 211, 153, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-90"
    />
  );
}
