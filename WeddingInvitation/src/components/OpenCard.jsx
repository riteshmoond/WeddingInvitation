// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";

// const OpenCard = ({ name, onOpen }) => {
//   const [showConfetti, setShowConfetti] = useState(false);

//   const handleOpen = () => {
//     setShowConfetti(true);
//     onOpen();
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-black">

//       {/* ✨ Background Glow */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_70%)] pointer-events-none" />

//       {/* ✨ Floating Sparkles */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(25)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1.5 h-1.5 rounded-full bg-[#D4AF37]"
//             initial={{ opacity: 0, y: 0 }}
//             animate={{ opacity: [0, 1, 0], y: [0, -50, 0] }}
//             transition={{ repeat: Infinity, repeatDelay: 0.2, duration: 2 + i * 0.1 }}
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//           />
//         ))}
//       </div>

//       {/* 🎇 Card */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.85, rotateY: -90 }}
//         animate={{ opacity: 1, scale: 1, rotateY: 0 }}
//         transition={{ duration: 1.2, type: "spring", stiffness: 150 }}
//         className="relative z-10 w-full max-w-md bg-gradient-to-b from-[#141414] to-[#0a0a0a]
//         border border-[#C8A951]/60 rounded-3xl p-10 text-center shadow-[0_25px_80px_rgba(0,0,0,0.85)]"
//       >
//         {/* Top Ornament */}
//         <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-[1px] bg-[#C8A951]" />

//         {/* Invitation Text */}
//         <p className="text-sm tracking-widest uppercase text-gray-400 mb-4">Wedding Invitation</p>

//         <p className="text-gray-300 text-sm mb-2">Dear</p>
//         <h2 className="text-2xl font-serif text-[#F5E6C8] mb-6">{name}</h2>

//         <p className="text-gray-400 text-sm leading-relaxed mb-6">
//           Together with their families,<br />
//           we request the honour of your gracious presence<br />
//           at the wedding celebration of
//         </p>

//         {/* Couple Names with shimmer */}
//         <div className="my-6">
//           <h3 className="text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#C8A951] animate-gradient-x">
//             Neelam Bijarnia
//           </h3>
//           <p className="text-[#C8A951] my-2">&</p>
//           <h3 className="text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#C8A951] animate-gradient-x">
//             Gordhan Bajiya
//           </h3>
//         </div>

//         {/* Wedding Details */}
//         <div className="text-gray-400 text-sm leading-relaxed mb-8">
//           <p>23 January 2026</p>
//           <p className="mt-1">BASERA HAWELI, BASERA CHOWK, NH-52, Palsana, Sikar (Rajasthan)</p>
//         </div>

//         {/* Divider */}
//         <div className="w-24 h-[1px] bg-[#C8A951]/70 mx-auto mb-8" />

//         {/* CTA Button */}
//         <motion.button
//           onClick={handleOpen}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="px-10 py-4 border border-[#C8A951] text-[#C8A951] tracking-wide uppercase text-sm
//           hover:bg-[#C8A951] hover:text-black transition-all duration-300"
//         >
//           Open Full Invitation
//         </motion.button>

//         {/* Bottom Note */}
//         <p className="text-xs text-gray-500 mt-8">
//           Kindly consider this as a personal invitation
//         </p>
//       </motion.div>

//       {/* 🎉 Confetti Hearts */}
//       {showConfetti && (
//         <div className="pointer-events-none absolute inset-0 overflow-hidden">
//           {[...Array(20)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-3 h-3 bg-pink-400 rounded-full"
//               initial={{ y: 0, opacity: 0 }}
//               animate={{ y: [-10, -100, -200], opacity: [1, 1, 0] }}
//               transition={{ duration: 2 + i * 0.1, repeat: 1, delay: i * 0.05 }}
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 bottom: 0,
//               }}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default OpenCard;


// import { motion } from "framer-motion";
// import { useState } from "react";
// import invitation from "../assets/WeddingInvitation.pdf";

// const OpenCard = ({ name, onOpen }) => {
//   const [showConfetti, setShowConfetti] = useState(false);

//   const handleOpen = () => {
//     setShowConfetti(true);
//     onOpen();
//   };

//   // ✅ DIRECT PDF DOWNLOAD FROM PUBLIC FOLDER
//   const handleDownloadInvitation = () => {
//     const link = document.createElement("a");
//     link.href = invitation; // public/invitation.pdf
//     link.download = "Wedding_Invitation.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-black">

//       {/* ✨ Background Glow */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_70%)] pointer-events-none" />

//       {/* 🎇 Card */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.85, rotateY: -90 }}
//         animate={{ opacity: 1, scale: 1, rotateY: 0 }}
//         transition={{ duration: 1.2, type: "spring", stiffness: 150 }}
//         className="relative z-10 w-full max-w-lg bg-gradient-to-b from-[#141414] to-[#0a0a0a]
//         border border-[#C8A951]/60 rounded-3xl p-12 text-center shadow-[0_30px_120px_rgba(212,175,55,0.25)]"
//       >
//         <p className="text-sm tracking-widest uppercase text-gray-400 mb-4">
//           Wedding Invitation
//         </p>

//         <p className="text-gray-300 text-sm mb-2">Dear</p>
//         <h2 className="text-2xl font-serif text-[#F5E6C8] mb-6">{name}</h2>

//         <p className="text-gray-400 text-sm leading-relaxed mb-6">
//           Together with their families,<br />
//           we request the honour of your gracious presence<br />
//           at the wedding celebration of
//         </p>

//         <div className="my-6">
//           <h3 className="text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#C8A951]">
//             Neelam Bijarnia
//           </h3>
//           <p className="text-[#C8A951] my-2">&</p>
//           <h3 className="text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#C8A951]">
//             Gordhan Bajiya
//           </h3>
//         </div>

//         <div className="text-gray-400 text-sm leading-relaxed mb-8">
//           <p>23 January 2026</p>
//           <p className="mt-1">
//             BASERA HAWELI, BASERA CHOWK, NH-52, Palsana, Sikar (Rajasthan)
//           </p>
//         </div>

//         {/* 🔘 BUTTONS */}
//         <div className="flex flex-col gap-4">
//           <motion.button
//             onClick={handleOpen}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-10 py-4 border border-[#C8A951] text-[#C8A951]
//             hover:bg-[#C8A951] hover:text-black transition-all"
//           >
//             Open Full Invitation
//           </motion.button>

//           <motion.button
//             onClick={handleDownloadInvitation}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-10 py-3 bg-[#C8A951] text-black
//             hover:bg-[#FFD700] transition-all"
//           >
//             Download Invitation (PDF)
//           </motion.button>
//         </div>

//         <p className="text-xs text-gray-500 mt-8">
//           Kindly consider this as a personal invitation
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default OpenCard;
 import { motion } from "framer-motion";
import { useState, useRef } from "react";
import html2pdf from "html2pdf.js";
import WeddingInvitation from "./WeddingInvitation";

const OpenCard = ({ name, onOpen }) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const invitationRef = useRef();

  const handleOpen = () => {
    setShowConfetti(true);
    onOpen();
  };

  // ✅ DYNAMIC PDF DOWNLOAD (SAME UI AS COMPONENT)
  const handleDownloadInvitation = () => {
    const element = invitationRef.current;

    const opt = {
      margin: 0,
      filename: `Wedding_Invitation_${name}.pdf`,
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        backgroundColor: "#fffaf3",
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
      },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <>
      {/* ===== ORIGINAL OPENCARD UI (UNCHANGED) ===== */}
      <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-black">

        {/* ✨ Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_70%)] pointer-events-none" />

        {/* 🎇 Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotateY: -90 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 150 }}
          className="relative z-10 w-full max-w-lg bg-gradient-to-b from-[#141414] to-[#0a0a0a]
          border border-[#C8A951]/60 rounded-3xl p-12 text-center shadow-[0_30px_120px_rgba(212,175,55,0.25)]"
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

          {/* 🔘 BUTTONS */}
          <div className="flex flex-col gap-4">
            <motion.button
              onClick={handleOpen}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border border-[#C8A951] text-[#C8A951]
              hover:bg-[#C8A951] hover:text-black transition-all"
            >
              Open Full Invitation
            </motion.button>

            <motion.button
              onClick={handleDownloadInvitation}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-3 bg-[#C8A951] text-black
              hover:bg-[#FFD700] transition-all"
            >
              Download Invitation (PDF)
            </motion.button>
          </div>

          <p className="text-xs text-gray-500 mt-8">
            Kindly consider this as a personal invitation
          </p>
        </motion.div>
      </div>

      {/* 🔒 HIDDEN COMPONENT (ONLY FOR PDF) */}
     <div
  style={{
    position: "fixed",
    top: "-10000px",
    left: "-10000px",
  }}
>
  <WeddingInvitation ref={invitationRef} name={name} />
</div>

    </>
  );
};

export default OpenCard;
