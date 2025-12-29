// Fireworks.jsx
import { useEffect, useRef } from "react";

const Fireworks = () => {
  const canvasRef = useRef(null);
  const fireworks = [];
  const particles = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    ctx.globalCompositeOperation = "lighter";

    /* ---------- ROCKET (NATURAL) ---------- */
    class Firework {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height;

        this.targetY =
          Math.random() * canvas.height * 0.35 +
          canvas.height * 0.2;

        this.speed = 6 + Math.random() * 2; // 🌿 NATURAL
        this.exploded = false;
      }

      update() {
        this.y -= this.speed;
        if (this.y <= this.targetY && !this.exploded) {
          this.exploded = true;
          explode(this.x, this.y);
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = "#F5E6C8";
        ctx.fill();
      }
    }

    /* ---------- PARTICLES (NATURAL) ---------- */
    class Particle {
      constructor(x, y) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4 + 2; // 🌿 NATURAL SPREAD

        this.x = x;
        this.y = y;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.alpha = 1;
        this.gravity = 0.06; // 🌿 REAL GRAVITY FEEL
      }

      update() {
        this.vy += this.gravity;
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 0.012; // 🌿 SLOW FADE
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,169,81,${this.alpha})`;
        ctx.fill();
      }
    }

    const explode = (x, y) => {
      for (let i = 0; i < 70; i++) {
        particles.push(new Particle(x, y));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 🌿 Natural launch frequency
      if (Math.random() < 0.03) {
        fireworks.push(new Firework());
      }

      fireworks.forEach((fw, i) => {
        fw.update();
        fw.draw();
        if (fw.exploded) fireworks.splice(i, 1);
      });

      particles.forEach((p, i) => {
        p.update();
        p.draw();
        if (p.alpha <= 0) particles.splice(i, 1);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-20 pointer-events-none"
    />
  );
};

export default Fireworks;
