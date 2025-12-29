import { motion } from "framer-motion";
import {
  Heart,
  Flame,
  Music,
  Gem,
  PartyPopper,
  Calendar,
  Clock,
  MapPin,
} from "lucide-react";

const events = [
  {
    title: "Haldi",
    date: "19th January 2026",
    time: "10:00 AM - 12:00 PM",
    venue: "Bride's Residence, Mumbai",
    icon: Heart,
    bg: "bg-[#FFF09B]",
  },
  
  {
    title: "Sangeet",
    date: "20th January 2026",
    time: "7:00 PM - 11:00 PM",
    venue: "Royal Gardens Banquet Hall, Mumbai",
    icon: Music,
    bg: "bg-[#F1D9FF]",
  },
  {
    title: "Mehndi",
    date: "21st January 2026",
    time: "11:00 AM - 3:00 PM",
    venue: "Bride's Residence, Mumbai",
    icon: Flame,
    bg: "bg-[#B8F5D8]",
  },
  {
    title: "Wedding Ceremony",
    date: "23rd January 2026",
    time: "6:00 PM - 9:00 PM",
    venue: "Grand Palace Convention Center, Mumbai",
    icon: Gem, // 💍 FIXED ICON
    bg: "bg-[#FFD6D6]",
  },
  {
    title: "Reception",
    date: "23rd January 2026",
    time: "9:00 PM - 12:00 AM",
    venue: "Grand Palace Convention Center, Mumbai",
    icon: PartyPopper,
    bg: "bg-[#CFE2FF]",
  },
];

const Events = () => {
  return (
    <section className="relative py-32 px-4 bg-[#0f0f0f] overflow-hidden">

      {/* Floating decorations */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <span className="absolute top-20 left-1/4">💖</span>
        <span className="absolute top-40 right-1/3">🌸</span>
        <span className="absolute bottom-32 left-1/2">✨</span>
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl md:text-6xl font-serif text-[#9B0F2E]">
          Wedding Events
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Join us in celebrating these special moments
        </p>
      </motion.div>

      {/* Events Grid */}
      <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
        {events.map((e, i) => {
          const Icon = e.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`${e.bg} rounded-3xl p-8 shadow-xl border border-white`}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow">
                <Icon className="text-[#9B0F2E]" size={22} />
              </div>

              {/* Title */}
              <h3 className="text-3xl font-serif text-[#1F2937] mb-6">
                {e.title}
              </h3>

              {/* Info */}
              <div className="space-y-3 text-gray-700 text-sm">
                <div className="flex items-center gap-3">
                  <Calendar size={16} />
                  <span>{e.date}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Clock size={16} />
                  <span>{e.time}</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={16} />
                  <span>{e.venue}</span>
                </div>
              </div>

              {/* Sparkle */}
              <div className="text-right mt-6 text-xl">✨</div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Events;
