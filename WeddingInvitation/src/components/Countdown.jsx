// Countdown.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WEDDING_DATE = new Date("2026-01-23T00:00:00");

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-black py-32 px-4">

      {/* glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,81,0.12),transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-30 max-w-5xl mx-auto text-center"
      >
        <p className="uppercase tracking-[0.35em] text-xs text-gray-400 mb-6">
          Countdown to the Celebration
        </p>

        <h2 className="text-4xl md:text-5xl font-serif text-[#F5E6C8] mb-16">
          The Wedding Begins In
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <TimeBox label="Days" value={timeLeft.days} />
          <TimeBox label="Hours" value={timeLeft.hours} />
          <TimeBox label="Minutes" value={timeLeft.minutes} />
          <TimeBox label="Seconds" value={timeLeft.seconds} />
        </div>
      </motion.div>
    </section>
  );
};

export default Countdown;

/* ---------------- TIME BOX ---------------- */

const TimeBox = ({ label, value }) => {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-[#0c0c0c] border border-[#C8A951]/60 rounded-3xl px-8 py-10 shadow-2xl"
    >
      <motion.div
        key={value}
        initial={{ y: 8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-4xl md:text-5xl font-serif text-[#F5E6C8]"
      >
        {String(value).padStart(2, "0")}
      </motion.div>

      <p className="mt-3 text-xs tracking-widest uppercase text-gray-400">
        {label}
      </p>
    </motion.div>
  );
};

/* ---------------- UTILS ---------------- */

function getTimeLeft() {
  const diff = WEDDING_DATE - new Date();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}
