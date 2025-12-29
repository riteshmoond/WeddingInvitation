// FamilyWelcome.jsx
import { motion } from "framer-motion";

const FamilyWelcome = () => {
  return (
    <section className="bg-[#141414] py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        {/* Top Ornament */}
        <div className="mb-8 text-4xl">🌿</div>

        {/* Family Names */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-serif text-gray-100 leading-relaxed mb-6">
          Yogita – Rakesh, Paras – Manveer, <br />
          Pooja – Kiran, Gagan <br />
          and our little <span className="font-semibold">Dhairyaveer</span>
        </h2>

        {/* Divider */}
        <div className="w-20 h-[1px] bg-[#C8A951] mx-auto my-6" />

        {/* Welcome Line */}
        <p className="text-sm sm:text-base italic text-[#B45309]">
          Welcome you to the celebration of love and friendship.
        </p>

        {/* Footer Blessing */}
        <div className="mt-8 text-xs text-gray-500 flex items-center justify-center gap-2">
          <span>👨‍👩‍👧‍👦</span>
          <span>Blessings Only</span>
        </div>
      </motion.div>
    </section>
  );
};

export default FamilyWelcome;
