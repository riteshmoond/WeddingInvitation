// Parents.jsx
import { motion } from "framer-motion";

const Parents = () => {
  return (
    <section className="relative bg-black py-28 px-4 overflow-hidden">

      {/* Subtle golden glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,81,0.10),transparent_70%)]" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-[#F5E6C8] mb-6">
          With Blessings Of
        </h2>

        {/* ✨ Shlok / Quote */}
        <p className="max-w-3xl mx-auto text-lg md:text-xl font-serif text-[#C8A951] leading-relaxed">
          “सर्वे भवन्तु सुखिनः, सर्वे सन्तु निरामयाः ।  
          सर्वे भद्राणि पश्यन्तु, मा कश्चिद् दुःखभाग्भवेत् ॥”
        </p>

        <p className="mt-4 text-sm tracking-wide text-gray-400">
          May everyone be happy, may everyone be healthy and blessed
        </p>
      </motion.div>

      {/* Parents Cards */}
      <div className="relative z-10 max-w-5xl mx-auto grid gap-12 md:grid-cols-2">

        {/* Bride Parents */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="border border-[#C8A951]/60 rounded-3xl p-10 text-center
          bg-gradient-to-b from-[#141414] to-[#0a0a0a] shadow-2xl"
        >
          <p className="uppercase tracking-widest text-xs text-gray-400 mb-4">
            Bride’s Parents
          </p>

          <h3 className="text-3xl font-serif text-[#F5E6C8] mb-2">
            Mr. Rajesh Sharma
          </h3>

          <h4 className="text-2xl font-serif text-[#F5E6C8]/90">
            Mrs. Sunita Sharma
          </h4>
        </motion.div>

        {/* Groom Parents */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          viewport={{ once: true }}
          className="border border-[#C8A951]/60 rounded-3xl p-10 text-center
          bg-gradient-to-b from-[#141414] to-[#0a0a0a] shadow-2xl"
        >
          <p className="uppercase tracking-widest text-xs text-gray-400 mb-4">
            Groom’s Parents
          </p>

          <h3 className="text-3xl font-serif text-[#F5E6C8] mb-2">
            Mr. Mahesh Verma
          </h3>

          <h4 className="text-2xl font-serif text-[#F5E6C8]/90">
            Mrs. Kavita Verma
          </h4>
        </motion.div>
      </div>
    </section>
  );
};

export default Parents;
