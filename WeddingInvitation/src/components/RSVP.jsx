// RSVP.jsx
import { motion } from "framer-motion";
import { CheckCircle, Phone } from "lucide-react";

const RSVP = () => {
  const handleWhatsApp = () => {
  const phoneNumber = "919257479576"; // 👈 apna WhatsApp number
  const message = "I am coming in wedding 💍🎉";

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(url, "_blank");
};
  return (
    <section className="relative bg-black py-32 px-4 overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(200,169,81,0.08),transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        {/* Label */}
        <p className="uppercase tracking-[0.35em] text-xs text-gray-400 mb-6">
          R S V P
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif text-[#F5E6C8] mb-6">
          Kindly Confirm Your Presence
        </h2>

        {/* Message */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-14">
          We would be honoured by your presence on this joyous occasion<br />
          and kindly request a confirmation of your attendance.
        </p>

        {/* RSVP Card */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#0c0c0c] border border-[#C8A951]/60 rounded-3xl px-10 py-14 shadow-2xl"
        >
          {/* CTA */}
          <button
          onClick={handleWhatsApp}
            className="inline-flex items-center gap-3 px-10 py-4 border border-[#C8A951] text-[#C8A951]
            uppercase tracking-widest text-sm hover:bg-[#C8A951] hover:text-black transition-all duration-300"
          >
            <CheckCircle size={18} />
            Confirm Attendance
          </button>

          {/* Contact */}
          <div className="mt-10 text-gray-400 text-sm">
            <p className="mb-2">For any assistance, please contact</p>
            <p className="flex items-center justify-center gap-2">
              <Phone size={14} />
              +91 9257479576 (Ritesh)
            </p>
          </div>
        </motion.div>

        {/* Closing line */}
        <p className="text-xs text-gray-500 mt-16">
          We look forward to celebrating together
        </p>
      </motion.div>
    </section>
  );
};

export default RSVP;
