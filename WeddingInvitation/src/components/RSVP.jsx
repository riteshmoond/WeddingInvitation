// // RSVP.jsx
// import { motion } from "framer-motion";
// import { CheckCircle, Phone } from "lucide-react";

// const RSVP = () => {
//   const handleWhatsApp = () => {
//   const phoneNumber = "919257479576"; // 👈 apna WhatsApp number
//   const message = "Hello, I would like to confirm my attendance for the wedding invitation. Looking forward to celebrating the special day! Thank you. "; // 👈 default message

//   const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
//     message
//   )}`;

//   window.open(url, "_blank");
// };
//   return (
//     <section className="relative bg-black py-32 px-4 overflow-hidden">

//       {/* background glow */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(200,169,81,0.08),transparent_70%)]" />

//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//         viewport={{ once: true }}
//         className="relative z-10 max-w-3xl mx-auto text-center"
//       >
//         {/* Label */}
//         <p className="uppercase tracking-[0.35em] text-xs text-gray-400 mb-6">
//           R S V P
//         </p>

//         {/* Heading */}
//         <h2 className="text-4xl md:text-5xl font-serif text-[#F5E6C8] mb-6">
//           Kindly Confirm Your Presence
//         </h2>

//         {/* Message */}
//         <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-14">
//           Your presence at our wedding means the world to us. Please let us
//           know if you will be able to join in our celebration by clicking the
//           button below. We look forward to sharing this special day with you! <br/>
//           Kindly RSVP by January 23, 2026 <br/> Thank you!

//         </p>

//         {/* RSVP Card */}
//         <motion.div
//           initial={{ scale: 0.92, opacity: 0 }}
//           whileInView={{ scale: 1, opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.8 }}
//           viewport={{ once: true }}
//           className="bg-[#0c0c0c] border border-[#C8A951]/60 rounded-3xl px-10 py-14 shadow-2xl"
//         >
//           {/* CTA */}
//           <button
//           onClick={handleWhatsApp}
//             className="inline-flex items-center gap-3 px-10 py-4 border border-[#C8A951] text-[#C8A951]
//             uppercase tracking-widest text-sm hover:bg-[#C8A951] hover:text-black transition-all duration-300"
//           >
//             <CheckCircle size={18} />
//             Confirm Attendance
//           </button>

//           {/* Contact */}
//           <div className="mt-10 text-gray-400 text-sm">
//             <p className="mb-2">For any assistance, please contact</p>
//             <p className="flex items-center justify-center gap-2">
//               <Phone size={14} />
//               +91 9257479576 (Ritesh)
//             </p>
//           </div>
//         </motion.div>

//         {/* Closing line */}
//         <p className="text-xl text-gray-500 mt-16">
//           Kindly consider this as a personal invitation 
//         </p>
//       </motion.div>
//     </section>
//   );
// };

// export default RSVP;


// RSVP.jsx
import { motion } from "framer-motion";
import { CheckCircle, Phone } from "lucide-react";

const RSVP = () => {
  // ✅ Multiple Contacts
  const contacts = [
    {
      name: "Shriram Bijarnia",
      phone: "919323590826",
    },
    {
      name: "Neelam Bijarnia",
      phone: "919967689326",
    },
  ];

  const message =
    "Hello, I would like to confirm my attendance for the wedding invitation. Looking forward to celebrating the special day! Thank you.";

  // ✅ WhatsApp handler
  const handleWhatsApp = (phone) => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="relative bg-black py-32 px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(200,169,81,0.08),transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        {/* Label */}
        <p className="uppercase tracking-[0.35em] text-xs text-gray-400 mb-6">
          R S V P
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif text-[#F5E6C8] mb-6">
          Kindly Confirm Your Presence
        </h2>

        {/* Message */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-14">
          Your presence at our wedding means the world to us. Please let us know
          if you will be able to join in our celebration by clicking the button
          below. We look forward to sharing this special day with you!
          <br />
          <br />
          Kindly RSVP by <strong>January 23, 2026</strong>
          <br />
          Thank you!
        </p>

        {/* RSVP Card */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#0c0c0c] border border-[#C8A951]/60 rounded-3xl px-10 py-14 shadow-2xl"
        >
          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-4">
            {contacts.map((contact, index) => (
              <button
                key={index}
                onClick={() => handleWhatsApp(contact.phone)}
                className="inline-flex items-center justify-center gap-3 px-8 py-4
                border border-[#C8A951] text-[#C8A951]
                uppercase tracking-widest text-xs
                hover:bg-[#C8A951] hover:text-black
                transition-all duration-300"
              >
                <CheckCircle size={18} />
                RSVP via {contact.name}
              </button>
            ))}
          </div>

          {/* Contact Info */}
          <div className="mt-10 text-gray-400 text-sm">
            <p className="mb-3">For any assistance, please contact</p>

            {contacts.map((contact, index) => (
              <p
                key={index}
                className="flex items-center justify-center gap-2 mt-2"
              >
                <Phone size={14} />
                +{contact.phone} ({contact.name})
              </p>
            ))}
          </div>
        </motion.div>

        {/* Closing Line */}
        <p className="text-xl text-gray-500 mt-16">
          Kindly consider this as a personal invitation
        </p>
      </motion.div>
    </section>
  );
};

export default RSVP;
