// import { motion } from "framer-motion";
// import { useState } from "react";
// const EntryGate = ({ onSubmit }) => {
//   const [name, setName] = useState("");

//   const handleSubmit = () => {
//     if (!name.trim()) return;
//     onSubmit(name);
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-black">

//       {/* ✨ Background Glow */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,81,0.22),transparent_65%)]" />

//       {/* 🖤 Vignette */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.85))]" />

//       {/* Card */}
//       <motion.div
//         initial={{ opacity: 0, y: 40, scale: 0.96 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         transition={{ duration: 0.9, ease: "easeOut" }}
//         className="relative z-10 w-full max-w-md
//         bg-gradient-to-b from-[#141414] to-[#0a0a0a]
//         border border-[#C8A951]/60
//         rounded-3xl p-12 text-center
//         shadow-[0_25px_80px_rgba(0,0,0,0.8)]"
//       >
//         {/* Top ornament */}
//         <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-[#C8A951]" />

//         {/* Heading */}
//         <p className="uppercase tracking-[0.35em] text-xs text-gray-400 mb-4">
//           Wedding Invitation
//         </p>

//         <h2 className="text-3xl font-serif text-[#F5E6C8] mb-6">
//           Welcome
//         </h2>

//         {/* Formal line */}
//         <p className="text-gray-400 text-sm leading-relaxed mb-8">
//           Kindly enter your name below to receive
//           <br />
//           a personal invitation to our wedding celebration
//         </p>

//         {/* Input */}
//         <input
//           placeholder="Your Full Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full bg-black/80 border border-gray-700/70 text-white px-4 py-3 rounded-md mb-8 text-center
//           focus:outline-none focus:border-[#C8A951]
//           placeholder-gray-500 tracking-wide"
//         />

//         {/* CTA */}
//         <button
//           onClick={handleSubmit}
//           disabled={!name.trim()}
//           className="w-full py-3 border border-[#C8A951]
//           text-[#C8A951] uppercase tracking-widest text-sm
//           hover:bg-[#C8A951] hover:text-black
//           disabled:opacity-40 disabled:cursor-not-allowed
//           transition-all duration-300"
//         >
//           Proceed
//         </button>

//         {/* Bottom line */}
//         <p className="text-xs text-gray-500 mt-10">
//           We look forward to celebrating this joyous occasion with you
//         </p>
//       </motion.div>
//     </div>
//   );
// };
// export default EntryGate;

import { motion } from "framer-motion";
import { useState } from "react";

const EntryGate = ({ onSubmit }) => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (!name.trim()) return;
    onSubmit(name);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-black">

      {/* ✨ Animated Sparkles (CSS only) */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-[#D4AF37]"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 1, 0], y: [0, -40, 0] }}
            transition={{
              repeat: Infinity,
              repeatDelay: 0.2,
              duration: 2 + i * 0.1,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* 🖤 Dark + Golden Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,81,0.18),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.85))]" />

      {/* ✨ CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 40, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md bg-gradient-to-b from-[#141414] to-[#0a0a0a] border border-[#C8A951]/60 rounded-3xl p-12 text-center shadow-[0_25px_80px_rgba(0,0,0,0.85)]"
      >
        {/* Top Ornament */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-[#C8A951]" />

        {/* Heading */}
        <p className="uppercase tracking-[0.35em] text-xs text-gray-400 mb-4">
          Wedding Invitation
        </p>
        <h2 className="text-3xl font-serif text-[#F5E6C8] mb-6">
          Welcome
        </h2>

        {/* ✨ Royal Text */}
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
          With hearts full of love and joy, we invite you to join us<br/>
          for the grand celebration of our union.<br/>
          Enter your name to receive your personal invitation.
        </p>

        {/* Input */}
        <input
          placeholder="Your Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-black/80 border border-gray-700/70 text-white px-4 py-3 rounded-md mb-8 text-center
          focus:outline-none focus:border-[#C8A951] placeholder-gray-500 tracking-wide transition-all"
        />

        {/* CTA */}
        <button
          onClick={handleSubmit}
          disabled={!name.trim()}
          className="w-full py-3 border border-[#C8A951] text-[#C8A951] uppercase tracking-widest text-sm
          hover:bg-[#C8A951] hover:text-black disabled:opacity-40 disabled:cursor-not-allowed
          transition-all duration-300"
        >
          Proceed
        </button>

        {/* Footer Blessing */}
        <p className="text-xs text-gray-500 mt-10">
          We look forward to celebrating this joyous occasion with you
        </p>
      </motion.div>
    </div>
  );
};

export default EntryGate;
