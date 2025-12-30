// Couple.jsx
import { motion } from "framer-motion";
import BRIDE_IMAGE from "../assets/bride.jpg";
import GROOM_IMAGE from "../assets/groom.jpg";

const Couple = () => {
  return (
    <section className="relative bg-black py-36 px-4 overflow-hidden">

      {/* Background golden glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,81,0.08),transparent_70%)]" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-28"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-[#F5E6C8] mb-4">
          The Couple
        </h2>
        <p className="text-sm tracking-widest uppercase text-gray-400">
          Two souls • One journey • Forever
        </p>
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-28 items-start">

        {/* ================= BRIDE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center group"
        >
          {/* Image Wrapper */}
          <div className="relative w-72 h-[30rem] mx-auto">
            {/* Decorative base */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2
              w-40 h-6 rounded-full bg-[#C8A951]/30 blur-xl" />

            {/* Border */}
            <div className="absolute inset-0 rounded-3xl border border-[#C8A951]/70" />

            {/* Image */}
            <img
              src={BRIDE_IMAGE}
              alt="Bride"
              className="relative z-10 w-full h-full object-cover
              rounded-3xl scale-95
              transition-transform duration-700 group-hover:scale-100"
            />

            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
              bg-[radial-gradient(circle_at_center,rgba(200,169,81,0.25),transparent_70%)]
              transition-opacity duration-700"
            />
          </div>

          {/* Text */}
          <h3 className="mt-14 text-3xl font-serif text-[#F5E6C8]">
            Neelam Bijarnia
          </h3>

          <p className="mt-2 text-sm italic text-[#C8A951]">
            The radiant bride
          </p>

          <div className="w-16 h-[1px] bg-[#C8A951] mx-auto my-6" />

          <p className="text-sm text-gray-400 leading-relaxed">
            Daughter of <br />
            <span className="uppercase tracking-wider">
              Mr. Shriram B. Bijarnia & Mrs. Kamla S. Bijarnia
            </span>
          </p>
        </motion.div>

        {/* ================= GROOM ================= */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
          className="text-center group mt-16 md:mt-0"
        >
          <div className="relative w-72 h-[30rem] mx-auto">
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2
              w-40 h-6 rounded-full bg-[#C8A951]/30 blur-xl" />

            <div className="absolute inset-0 rounded-3xl border border-[#C8A951]/70" />

            <img
              src={GROOM_IMAGE}
              alt="Groom"
              className="relative z-10 w-full h-full object-cover
              object-[65%_35%]
              rounded-3xl scale-95
              transition-transform duration-700 group-hover:scale-100"
            />

            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
              bg-[radial-gradient(circle_at_center,rgba(200,169,81,0.25),transparent_70%)]
              transition-opacity duration-700"
            />
          </div>

          <h3 className="mt-14 text-3xl font-serif text-[#F5E6C8]">
            Gordhan Bajiya
          </h3>

          <p className="mt-2 text-sm italic text-[#C8A951]">
            The charming groom
          </p>

          <div className="w-16 h-[1px] bg-[#C8A951] mx-auto my-6" />

          <p className="text-sm text-gray-400 leading-relaxed">
            Son of <br />
            <span className="uppercase tracking-wider">
              Mr. Balu Ram Bajiya & Mrs. Shokuri Devi Bajiya
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Couple;
