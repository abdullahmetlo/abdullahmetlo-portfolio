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
      radius: 160, // Repulsion influence radius
    };

    // Increased star particle density
    const starCount = Math.min(Math.floor((width * height) / 4000), 260);
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
      const isDark = document.documentElement.classList.contains("dark");

      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.15;
      mouse.y += (mouse.targetY - mouse.y) * 0.15;

      ctx.clearRect(0, 0, width, height);

      // Subtle ambient cursor starlight glow
      if (mouse.x > -500 && mouse.y > -500) {
        const cursorGlow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouse.radius * .5
        );
        if (isDark) {
          cursorGlow.addColorStop(0, "rgba(0, 114, 177, 0.08)");
          cursorGlow.addColorStop(0.5, "rgba(6, 182, 212, 0.03)");
          cursorGlow.addColorStop(1, "rgba(5, 7, 12, 0)");
        } else {
          cursorGlow.addColorStop(0, "rgba(0, 114, 177, 0.06)");
          cursorGlow.addColorStop(0.5, "rgba(56, 189, 248, 0.02)");
          cursorGlow.addColorStop(1, "rgba(248, 250, 252, 0)");
        }

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
          const repelFactor = 1 - dist / mouse.radius;
          const force = repelFactor * 1.5;
          const angle = Math.atan2(dy, dx);

          s.vx += Math.cos(angle) * force;
          s.vy += Math.sin(angle) * force;
        }

        // 2. Physics damping - smoothly and quickly restores to base drift speed
        s.vx += (s.baseVx - s.vx) * 0.085;
        s.vy += (s.baseVy - s.vy) * 0.085;

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
        const twinkleAlpha = s.baseAlpha + Math.sin(s.twinklePhase) * 0.25;
        const finalAlpha = Math.max(0.1, Math.min(0.95, twinkleAlpha));

        // 4. Draw Star Core & Starlight Halo
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(0, 114, 177, ${finalAlpha * 0.3})`
          : `rgba(0, 114, 177, ${finalAlpha * 0.2})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(224, 242, 254, ${finalAlpha})`
          : `rgba(0, 114, 177, ${finalAlpha * 0.6})`;
        ctx.fill();

        // Subtle 4-point cross shimmer on brighter focal stars
        if (s.hasCrossGlow) {
          ctx.strokeStyle = isDark
            ? `rgba(186, 230, 253, ${finalAlpha * 0.45})`
            : `rgba(0, 114, 177, ${finalAlpha * 0.3})`;
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
          if (distNodes < 85) {
            const lineAlpha = (1 - distNodes / 85) * (isDark ? 0.08 : 0.06) * finalAlpha;
            ctx.beginPath();
            ctx.moveTo(s.x, s.y);
            ctx.lineTo(s2.x, s2.y);
            ctx.strokeStyle = isDark
              ? `rgba(56, 189, 248, ${lineAlpha})`
              : `rgba(0, 114, 177, ${lineAlpha})`;
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
