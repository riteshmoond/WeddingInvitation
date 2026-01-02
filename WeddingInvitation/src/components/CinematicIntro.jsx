// // CinematicIntro.jsx
// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// const CinematicIntro = ({ onFinish }) => {
//   const containerRef = useRef();
//   const titleRef = useRef();
//   const lineRef = useRef();

//   useEffect(() => {
//     const tl = gsap.timeline({
//       onComplete: onFinish,
//     });

//     tl.set(containerRef.current, { opacity: 1 })

//       // Fade in background
//       .fromTo(
//         containerRef.current,
//         { opacity: 0 },
//         { opacity: 1, duration: 1.2, ease: "power2.out" }
//       )

//       // Title reveal
//       .fromTo(
//         titleRef.current,
//         { opacity: 0, y: 40, filter: "blur(6px)" },
//         {
//           opacity: 1,
//           y: 0,
//           filter: "blur(0px)",
//           duration: 1.4,
//           ease: "power3.out",
//         }
//       )

//       // Gold line draw
//       .fromTo(
//         lineRef.current,
//         { scaleX: 0 },
//         {
//           scaleX: 1,
//           duration: 1,
//           ease: "power2.out",
//         },
//         "-=0.8"
//       )

//       // Hold
//       .to({}, { duration: 1 })

//       // Exit animation
//       .to(
//         titleRef.current,
//         {
//           opacity: 0,
//           y: -20,
//           filter: "blur(6px)",
//           duration: 0.8,
//           ease: "power2.in",
//         }
//       )
//       .to(
//         containerRef.current,
//         {
//           opacity: 0,
//           duration: 1,
//           ease: "power2.inOut",
//         },
//         "-=0.4"
//       );
//   }, [onFinish]);

//   return (
//     <div
//       ref={containerRef}
//       className="fixed inset-0 z-50 bg-black flex items-center justify-center"
//     >
//       <div className="text-center px-6">
//         <h1
//           ref={titleRef}
//           className="text-[#F5E6C8] text-3xl sm:text-4xl md:text-5xl font-serif tracking-[0.3em]"
//         >
//           The Wedding Celebration
//         </h1>

//         <div
//           ref={lineRef}
//           className="origin-center mx-auto mt-8 w-32 h-[1px] bg-[#C8A951]"
//         />
//       </div>
//     </div>
//   );
// };

// export default CinematicIntro;


import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

const CinematicIntro = ({ onFinish }) => {
  const containerRef = useRef();
  const titleRef = useRef();
  const lineRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ onComplete: onFinish });

    // Set container visible
    tl.set(containerRef.current, { opacity: 1 })

      // Fade in container
      .fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.2, ease: "power2.out" }
      )

      // Title pop + fade + blur -> cinematic
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 40, scale: 0.9, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.4,
          ease: "power3.out",
        }
      )

      // Gold line draw + shimmer
      .fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1, ease: "power2.out" },
        "-=0.8"
      )

      // Hold for 1.2s
      .to({}, { duration: 1.2 })

      // Exit animation: slide + fade + slight scale + rotation
      .to(
        titleRef.current,
        {
          opacity: 0,
          y: -30,
          scale: 0.95,
          rotate: -2,
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
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Glow + Sparkles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18),transparent_70%)]" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#FFD700]"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 1, 0], y: [0, -50, 0] }}
            transition={{ duration: 3 + i * 0.1, repeat: Infinity }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative text-center px-6">
        <h1
          ref={titleRef}
          className="text-[#F5E6C8] text-3xl sm:text-4xl md:text-5xl font-serif tracking-[0.3em] drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
        >
          The Wedding Celebration
        </h1>

        {/* Gold Line with shimmer */}
        <div
          ref={lineRef}
          className="origin-center mx-auto mt-8 w-32 h-[1px] bg-[#D4AF37] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-gradient-x" />
        </div>
      </div>
    </div>
  );
};

export default CinematicIntro;
