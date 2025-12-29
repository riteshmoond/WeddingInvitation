// CinematicIntro.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

const CinematicIntro = ({ onFinish }) => {
  const containerRef = useRef();
  const titleRef = useRef();
  const lineRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: onFinish,
    });

    tl.set(containerRef.current, { opacity: 1 })

      // Fade in background
      .fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.2, ease: "power2.out" }
      )

      // Title reveal
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 40, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.4,
          ease: "power3.out",
        }
      )

      // Gold line draw
      .fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.8"
      )

      // Hold
      .to({}, { duration: 1 })

      // Exit animation
      .to(
        titleRef.current,
        {
          opacity: 0,
          y: -20,
          filter: "blur(6px)",
          duration: 0.8,
          ease: "power2.in",
        }
      )
      .to(
        containerRef.current,
        {
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        "-=0.4"
      );
  }, [onFinish]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
    >
      <div className="text-center px-6">
        <h1
          ref={titleRef}
          className="text-[#F5E6C8] text-3xl sm:text-4xl md:text-5xl font-serif tracking-[0.3em]"
        >
          The Wedding Celebration
        </h1>

        <div
          ref={lineRef}
          className="origin-center mx-auto mt-8 w-32 h-[1px] bg-[#C8A951]"
        />
      </div>
    </div>
  );
};

export default CinematicIntro;
