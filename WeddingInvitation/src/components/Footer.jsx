// Footer.jsx
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-black py-20 px-4 overflow-hidden">

      {/* subtle gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,81,0.06),transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        {/* Divider */}
        <div className="w-24 h-[1px] bg-[#C8A951]/70 mx-auto mb-10" />

        {/* Thank you text */}
        <p className="text-[#F5E6C8] font-serif text-lg mb-4">
          With love and gratitude
        </p>

        {/* Sub text */}
        <p className="text-gray-500 text-sm leading-relaxed">
          We sincerely thank you for being a part of our celebration<br />
          and for sharing in our joy on this special occasion.
        </p>

        {/* Bottom note */}
        <p className="mt-10 text-xs tracking-widest uppercase text-gray-600">
          Wedding Invitation
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
