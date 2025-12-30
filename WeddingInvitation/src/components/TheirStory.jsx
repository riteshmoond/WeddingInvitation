import { motion } from "framer-motion";

const TheirStory = () => {
  return (
    <section className="bg-[#0f0f0f] py-32 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-[#F5E6C8] mb-6">
          Their Story
        </h2>

        <p className="italic text-[#C8A951] mb-16">
          A journey of love, laughter and forever
        </p>

        <div className="space-y-12 text-gray-300 leading-relaxed">
          <p>
            What began as a simple friendship soon turned into a bond
            filled with understanding, trust and endless laughter.
          </p>

          <p>
            Through every phase of life, they stood by each other,
            choosing love every single day.
          </p>

          <p className="font-semibold text-[#F5E6C8]">
            And now, they invite you to witness the beginning of their forever.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default TheirStory;
