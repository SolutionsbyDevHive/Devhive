"use client";

import React, { useEffect, useRef } from "react";

export default function HexagonBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let mouse = { x: -9999, y: -9999 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    function resize() {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    }

    window.addEventListener("resize", resize);
    resize();

    function seeded(i: number) {
      let s = i * 9301 + 49297;
      return ((s * s) % 233280) / 233280;
    }

    const R = 35; // hex radius
    const GAP = 6;
    const maxDist = 280;
    const DEPTH = 14;

    function hexPoints(cx: number, cy: number, r: number) {
      const pts = [];
      for (let i = 0; i < 6; i++) {
        const angle = Math.PI / 6 + (Math.PI / 3) * i; // flat-top
        pts.push({ x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) });
      }
      return pts;
    }

    function drawHexPath(ctx: CanvasRenderingContext2D, pts: {x: number, y: number}[]) {
      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
      ctx.closePath();
    }

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const time = Date.now() * 0.001;
      const w = (R + GAP) * Math.sqrt(3);
      const h = (R + GAP) * 1.5;
      const cols = Math.ceil(canvas.width / w) + 2;
      const rows = Math.ceil(canvas.height / h) + 2;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const idx = row * cols + col;
          if (seeded(idx) < 0.08) continue;

          const cx = col * w + (row % 2) * w * 0.5;
          const cy = row * h;

          const dist = Math.hypot(mouse.x - cx, mouse.y - cy);
          const influence = Math.max(0, 1 - dist / maxDist);
          const inf2 = influence * influence;

          const floatY = Math.sin(time * 0.6 + seeded(idx + 30) * 6.28) * 2;
          const fy = cy + floatY;

          const baseBright = 0.05 + seeded(idx + 80) * 0.05;
          const bright = baseBright + inf2 * 0.4;
          const d = DEPTH * (0.3 + inf2 * 0.7);

          const pts = hexPoints(cx, fy, R);

          // 3D side faces (extrude bottom 3 edges)
          for (let i = 2; i <= 4; i++) {
            const p1 = pts[i];
            const p2 = pts[(i + 1) % 6];
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.lineTo(p2.x, p2.y + d);
            ctx.lineTo(p1.x, p1.y + d);
            ctx.closePath();
            ctx.fillStyle = `rgba(40, 45, 55, ${bright * 0.6})`;
            ctx.fill();
            ctx.strokeStyle = `rgba(209, 156, 91, ${bright * 0.3})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }

          // Top face
          drawHexPath(ctx, pts);
          ctx.fillStyle = `rgba(18, 22, 30, ${bright * 1.2})`;
          ctx.fill();

          // Border glow
          drawHexPath(ctx, pts);
          ctx.strokeStyle = `rgba(209, 156, 91, ${bright * 0.4 + inf2 * 0.5})`;
          ctx.lineWidth = 0.8 + inf2 * 1.2;
          ctx.stroke();

          // Inner glow on hover
          if (inf2 > 0.05) {
            const grd = ctx.createRadialGradient(cx, fy, 0, cx, fy, R * 1.3);
            grd.addColorStop(0, `rgba(209, 156, 91, ${inf2 * 0.2})`);
            grd.addColorStop(0.5, `rgba(209, 156, 91, ${inf2 * 0.08})`);
            grd.addColorStop(1, "transparent");
            drawHexPath(ctx, pts);
            ctx.fillStyle = grd;
            ctx.fill();

            // Light peaking from behind (bottom glow)
            const glowGrd = ctx.createRadialGradient(cx, fy + d, 0, cx, fy + d, R * 1.8);
            glowGrd.addColorStop(0, `rgba(209, 156, 91, ${inf2 * 0.25})`);
            glowGrd.addColorStop(0.4, `rgba(209, 156, 91, ${inf2 * 0.1})`);
            glowGrd.addColorStop(1, "transparent");
            ctx.fillStyle = glowGrd;
            ctx.fillRect(cx - R * 2, fy - R, R * 4, R * 2 + d * 2);
          }
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    }
    
    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50"
    />
  );
}
