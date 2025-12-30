// OpenCard.jsx
import { motion } from "framer-motion";

const OpenCard = ({ name, onOpen }) => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-md w-full bg-[#0c0c0c] border border-[#C8A951]/60 rounded-3xl p-10 text-center shadow-2xl"
      >
        {/* Top Ornament */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-[1px] bg-[#C8A951]" />

        {/* Invitation Text */}
        <p className="text-sm tracking-widest uppercase text-gray-400 mb-6">
          Wedding Invitation
        </p>

        <p className="text-gray-300 text-sm mb-2">Dear</p>
        <h2 className="text-2xl font-serif text-[#F5E6C8] mb-6">
          {name}
        </h2>

        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          Together with their families,<br />
          we request the honour of your gracious presence<br />
          at the wedding celebration of
        </p>

        {/* Couple Names */}
        <div className="my-6">
          <h3 className="text-3xl font-serif text-white">
            Neelam Bijarnia
          </h3>
          <p className="text-[#C8A951] my-2">&</p>
          <h3 className="text-3xl font-serif text-white">
            Gordhan Bajiya
          </h3>
        </div>

        {/* Wedding Details */}
        <div className="text-gray-400 text-sm leading-relaxed mb-8">
          <p>23 January 2026 </p>
          <p className="mt-1">BASERA HAWELI, BASERA CHOWK, NH-52, Palsana, Sikar (Rajasthan)</p>
        </div>

        {/* Divider */}
        <div className="w-24 h-[1px] bg-[#C8A951]/70 mx-auto mb-8" />

        {/* CTA */}
        <button
          onClick={onOpen}
          className="px-10 py-4 border border-[#C8A951] text-[#C8A951] tracking-wide uppercase text-sm
          hover:bg-[#C8A951] hover:text-black transition-all duration-300"
        >
          Open Full Invitation
        </button>

        {/* Bottom Note */}
        <p className="text-xs text-gray-500 mt-8">
          Kindly consider this as a personal invitation
        </p>
      </motion.div>
    </div>
  );
};

export default OpenCard;
