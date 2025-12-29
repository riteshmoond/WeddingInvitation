// Hero.jsx
import { motion } from "framer-motion";
import brideImg from "../assets/bride.jpg";
import groomImg from "../assets/groom.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* 🔥 Background Images */}
      <div className="absolute inset-0 flex
        scale-[1.02] sm:scale-[1.05] md:scale-[1.08] lg:scale-110">

        {/* Bride */}
        <div
          className="
            w-1/2 bg-cover contrast-125 saturate-125 brightness-90
            bg-[position:center_55%]
            sm:bg-[position:center_60%]
            md:bg-[position:center_50%]
          "
          style={{ backgroundImage: `url(${brideImg})` }}
        />

        {/* Groom */}
        <div
          className="
            w-1/2 bg-cover contrast-125 saturate-125 brightness-90
            bg-[position:center_70%]
            sm:bg-[position:center_65%]
            md:bg-[position:center_55%]
          "
          style={{ backgroundImage: `url(${groomImg})` }}
        />
      </div>

      {/* 🖤 Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />

      {/* 🟡 Golden Light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.28),transparent_65%)]" />

      {/* 🖤 Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.75))]" />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center max-w-3xl px-4"
      >
        <p className="uppercase tracking-[0.35em] text-xs sm:text-sm text-gray-300 mb-6 sm:mb-8">
          Welcome you to the celebration of love and friendship.
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-[#F7E7C6]
        drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
          Neelam Bijarnia
        </h1>

        <div className="w-20 sm:w-24 h-[1px] bg-[#D4AF37] mx-auto my-6 sm:my-8" />

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-[#F7E7C6]
        drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
          Gordhan Bajiya
        </h1>

        <p className="mt-8 sm:mt-10 text-xs sm:text-sm md:text-base tracking-widest text-gray-300">
          January 23rd, 2026 <br />
          Friday At 4 PM <br />
          BASERA HAWELI, BASERA CHOWK, NH-52, Palsana, Sikar (Rajasthan)
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
