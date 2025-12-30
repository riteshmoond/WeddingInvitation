// Hero.jsx
import { motion } from "framer-motion";
import coupleImg from "../assets/couple.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* ================= MOBILE IMAGE ================= */}
      <img
        src={coupleImg}
        alt="Bride and Groom"
        className="
          absolute inset-0 w-full h-full
          object-cover object-[50%_60%]
          md:hidden
          contrast-125 saturate-110 brightness-90
        "
      />

      {/* ================= DESKTOP IMAGE ================= */}
      <img
        src={coupleImg}
        alt="Bride and Groom"
        className="
          absolute inset-0 w-full h-full
          hidden md:block
          object-cover object-[10%_10%]
          contrast-125 saturate-110 brightness-90
        "
      />

      {/* Overlay to unify look */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.25),transparent_65%)]" />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center max-w-3xl px-4"
      >
        <p className="uppercase tracking-[0.35em] text-xs sm:text-sm text-gray-300 mb-6">
          Welcome you to the celebration of love and friendship.
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-[#F7E7C6]
          drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
          Neelam Bijarnia
        </h1>

        <div className="w-24 h-[1px] bg-[#D4AF37] mx-auto my-6" />

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-[#F7E7C6]
          drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
          Gordhan Bajiya
        </h1>

        <p className="mt-8 text-xs sm:text-sm md:text-base tracking-widest text-gray-300">
          January 23rd, 2026 <br />
          Friday At 4 PM <br />
          BASERA HAWELI, BASERA CHOWK, NH-52, Palsana, Sikar (Rajasthan)
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
