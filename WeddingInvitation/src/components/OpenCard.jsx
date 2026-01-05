import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";

const OpenCard = ({ name, onOpen }) => {
  const [showConfetti, setShowConfetti] = useState(false);

  // ✅ Ref for PDF / print
  const printRef = useRef(null);

  const handleOpen = () => {
    setShowConfetti(true);
    onOpen();
  };

  // ✅ react-to-print v3 API
  const handleDownloadPDF = useReactToPrint({
    contentRef: printRef,
    documentTitle: "Wedding_Invitation",
  });

  return (
    // 🌑 FULL BLACK PREMIUM BACKGROUND
    <div className="relative min-h-screen w-full bg-black flex items-center justify-center overflow-hidden">

      {/* ✨ GOLDEN GLOW (Premium Touch) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.15),transparent_70%)] pointer-events-none" />

      {/* ✅ PRINT TARGET */}
      <div
        ref={printRef}
        className="relative z-10 min-h-screen w-full flex items-center justify-center px-4 bg-black"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotateY: -90 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 150 }}
          className="
            w-full max-w-md
            bg-gradient-to-b from-[#141414] to-[#0a0a0a]
            border border-[#C8A951]/60
            rounded-3xl
            p-10
            text-center
            shadow-[0_30px_120px_rgba(212,175,55,0.25)]
            print:shadow-none
          "
        >
          <p className="text-sm tracking-widest uppercase text-gray-400 mb-4">
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

          <div className="my-6">
            <h3 className="text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#C8A951]">
              Neelam Bijarnia
            </h3>
            <p className="text-[#C8A951] my-2">&</p>
            <h3 className="text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#C8A951]">
              Gordhan Bajiya
            </h3>
          </div>

          <div className="text-gray-400 text-sm leading-relaxed mb-8">
            <p>23 January 2026</p>
            <p className="mt-1">
              BASERA HAWELI, BASERA CHOWK, NH-52, Palsana, Sikar (Rajasthan)
            </p>
          </div>

          {/* 🔘 Buttons (hidden in PDF) */}
          <div className="flex flex-col gap-4 print:hidden">
            <button
              onClick={handleOpen}
              className="px-10 py-4 border border-[#C8A951] text-[#C8A951]
              hover:bg-[#C8A951] hover:text-black transition-all"
            >
              Open Full Invitation
            </button>

            <button
              onClick={handleDownloadPDF}
              className="px-10 py-3 bg-[#C8A951] text-black
              hover:bg-[#FFD700] transition-all"
            >
              Download Invitation (PDF)
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OpenCard;
