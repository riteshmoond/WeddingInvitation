// Couple.jsx
import { motion } from "framer-motion";

const BRIDE_IMAGE =
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&auto=format&fit=crop";
const GROOM_IMAGE =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop";

const Couple = () => {
  return (
    <section className="relative bg-black py-32 px-4 overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,81,0.1),transparent_65%)]" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-24 items-center">

        {/* Bride */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center group"
        >
          {/* Image Frame */}
          <div className="relative w-72 h-[28rem] mx-auto">
            {/* Gold outline */}
            <div className="absolute inset-0 rounded-3xl border border-[#C8A951]/70" />

            {/* Image */}
            <img
              src={BRIDE_IMAGE}
              alt="Bride"
              className="relative z-10 w-full h-full object-cover rounded-3xl scale-95
              transition-transform duration-700 group-hover:scale-100"
            />

            {/* Soft hover glow */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
              bg-[radial-gradient(circle_at_center,rgba(200,169,81,0.25),transparent_70%)]
              transition-opacity duration-700"
            />
          </div>

          {/* Name */}
          <h3 className="mt-12 text-3xl font-serif text-[#F5E6C8] tracking-wide">
            Bride Name
          </h3>

          {/* Divider */}
          <div className="w-14 h-[1px] bg-[#C8A951] mx-auto my-5" />

          {/* Family */}
          <p className="text-sm text-gray-400 tracking-widest uppercase ">
            Daughter of Mr.Shreeram Bijarniya & Mrs. Kamla Devi
          </p>
        </motion.div>

        {/* Groom */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
          className="text-center group"
        >
          {/* Image Frame */}
          <div className="relative w-72 h-[28rem] mx-auto">
            <div className="absolute inset-0 rounded-3xl border border-[#C8A951]/70" />

            <img
              src={GROOM_IMAGE}
              alt="Groom"
              className="relative z-10 w-full h-full object-cover rounded-3xl scale-95
              transition-transform duration-700 group-hover:scale-100"
            />

            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
              bg-[radial-gradient(circle_at_center,rgba(200,169,81,0.25),transparent_70%)]
              transition-opacity duration-700"
            />
          </div>

          {/* Name */}
          <h3 className="mt-12 text-3xl font-serif text-[#F5E6C8] tracking-wide">
            Groom Name
          </h3>

          {/* Divider */}
          <div className="w-14 h-[1px] bg-[#C8A951] mx-auto my-5" />

          {/* Family */}
          <p className="text-sm text-gray-400 tracking-widest uppercase">
            Son of Mr. & Mrs. …
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Couple;
