// FamilyWelcome.jsx
import { motion } from "framer-motion";

const FamilyWelcome = () => {
  return (
    <section className="relative bg-[#0f0f0f] py-28 px-4 overflow-hidden">

      {/* Subtle golden glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,81,0.08),transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        {/* Card */}
        <div className="bg-[#141414] border border-[#C8A951]/50 rounded-3xl p-10 sm:p-14 text-center shadow-2xl">

          {/* Ornamental Top */}
          <div className="mb-8 text-[#C8A951] text-3xl tracking-widest">
            ❦
          </div>

          {/* Family Names */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-serif text-gray-100 leading-relaxed mb-6">
            Yogita – Rakesh, Paras – Manveer, <br />
            Pooja – Kiran, Gagan <br />
            and our little{" "}
            <span className="text-[#F7E7C6] font-semibold">
              Dhairyaveer
            </span>
          </h2>

          {/* Divider */}
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C8A951] to-transparent mx-auto my-6" />

          {/* Welcome Line */}
          <p className="text-sm sm:text-base italic text-[#E0B973] mb-6">
            Welcome you to the celebration of love and friendship.
          </p>

          {/* ✨ NEW: Formal Invitation Text */}
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto mb-6">
            With immense joy and heartfelt happiness, we invite you and your
            family to grace this auspicious occasion and share in the warmth,
            laughter, and togetherness as two souls begin a beautiful journey.
          </p>

          {/* ✨ NEW: Event Note */}
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-6">
            Your presence will add charm to the celebrations and make the
            moments truly memorable for us all.
          </p>

          {/* ✨ NEW: Gentle Reminder / Note */}
          <p className="text-xs sm:text-sm text-gray-500 italic">
            We humbly request your blessings and good wishes on this joyous day.
          </p>

          {/* Footer Blessing */}
          <div className="mt-10 flex flex-col items-center gap-2 text-xs text-gray-400 tracking-widest uppercase">
            <span className="text-lg">🙏</span>
            <span>Blessings Only</span>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default FamilyWelcome;
