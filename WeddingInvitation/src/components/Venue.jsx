// Venue.jsx
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const Venue = () => {
  return (
    <section className="relative bg-black py-32 px-4 overflow-hidden">

      {/* subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,81,0.08),transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Section label */}
        <p className="uppercase tracking-[0.35em] text-xs text-gray-400 mb-6">
          Venue
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif text-[#F5E6C8] mb-10">
          Wedding Ceremony
        </h2>

        {/* Venue Card */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          viewport={{ once: true }}
          className="bg-[#0c0c0c] border border-[#C8A951]/60 rounded-3xl px-10 py-14 shadow-2xl"
        >
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 rounded-full border border-[#C8A951] flex items-center justify-center">
              <MapPin className="text-[#C8A951]" size={22} />
            </div>
          </div>

          {/* Venue Name */}
          <h3 className="text-3xl font-serif text-white mb-4">
            Basera Haveli Palsana
          </h3>

          {/* Address */}
          <p className="text-gray-400 text-sm tracking-wide leading-relaxed">
            Palsana Bypass<br />
            Sikar, Rajasthan
          </p>

          {/* Divider */}
          <div className="w-24 h-[1px] bg-[#C8A951]/70 mx-auto my-10" />

          {/* CTA */}
          <a
            href="https://maps.app.goo.gl/DKxNeUZMv87N6wXb8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 border border-[#C8A951] text-[#C8A951]
            uppercase tracking-widest text-sm hover:bg-[#C8A951] hover:text-black transition-all duration-300"
          >
            Get Directions
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Venue;
