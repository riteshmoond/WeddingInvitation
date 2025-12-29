// // Hero.jsx
// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen bg-black flex items-center justify-center px-4 overflow-hidden">
      
//       {/* Subtle background glow */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,81,0.12),transparent_70%)]" />

//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2, ease: "easeOut" }}
//         className="relative z-10 text-center max-w-3xl"
//       >
//         {/* Formal intro line */}
//         <p className="uppercase tracking-[0.35em] text-xs text-gray-400 mb-8">
//           Together with their families
//         </p>

//         {/* Bride */}
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.9 }}
//           className="text-4xl sm:text-5xl md:text-7xl font-serif text-[#F5E6C8]"
//         >
//           Bride Name
//         </motion.h1>

//         {/* Divider */}
//         <motion.div
//           initial={{ scaleX: 0 }}
//           animate={{ scaleX: 1 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//           className="origin-center w-24 h-[1px] bg-[#C8A951] mx-auto my-8"
//         />

//         {/* Groom */}
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.9, duration: 0.9 }}
//           className="text-4xl sm:text-5xl md:text-7xl font-serif text-[#F5E6C8]"
//         >
//           Groom Name
//         </motion.h1>

//         {/* Date & location */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.2, duration: 0.8 }}
//           className="mt-10 text-sm sm:text-base tracking-widest text-gray-400"
//         >
//           23 January 2026 • Basera Haveli, Palsana Bypass, Sikar, (Rajasthan)
//         </motion.p>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;

// Hero.jsx
import { motion } from "framer-motion";
import brideImg from "../assets/bride.jpg";
import groomImg from "../assets/groom.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* 🔥 Background Images (Enhanced) */}
      <div className="absolute inset-0 flex scale-105">
        {/* Bride */}
        <div
          className="w-1/2 bg-cover bg-center contrast-125 saturate-125 brightness-90"
          style={{ backgroundImage: `url(${brideImg})` }}
        />
        {/* Groom */}
        <div
          className="w-1/2 bg-cover bg-center contrast-125 saturate-125 brightness-90"
          style={{ backgroundImage: `url(${groomImg})` }}
        />
      </div>

      {/* 🖤 Strong Royal Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />

      {/* 🟡 Golden Light Beam (Center Focus) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.28),transparent_65%)]" />

      {/* 🖤 Vignette (Edges Dark) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.75))]" />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center max-w-3xl px-4"
      >
        <p className="uppercase tracking-[0.35em] text-xs text-gray-300 mb-8">
          Together with their families
        </p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-7xl font-serif text-[#F7E7C6] drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
        >
          Bride Name
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6 }}
          className="origin-center w-24 h-[1px] bg-[#D4AF37] mx-auto my-8"
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-4xl sm:text-5xl md:text-7xl font-serif text-[#F7E7C6] drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
        >
          Groom Name
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-10 text-sm sm:text-base tracking-widest text-gray-300"
        >
          23 January 2026 • Basera Haveli, Palsana Bypass, Sikar, Rajasthan
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
