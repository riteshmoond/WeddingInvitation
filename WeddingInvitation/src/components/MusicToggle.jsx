// // MusicToggle.jsx
// import { useEffect, useRef, useState } from "react";
// import Music from "../assets/Music.mp3";

// const MusicToggle = ({ start }) => {
//   const audioRef = useRef(null);
//   const [muted, setMuted] = useState(false);

//   // 🔥 Start music automatically after user interaction
//   useEffect(() => {
//     if (start && audioRef.current) {
//       audioRef.current.volume = 0.6;
//       audioRef.current.play().catch(() => {});
//     }
//   }, [start]);

//   const toggleMute = () => {
//     if (!audioRef.current) return;
//     audioRef.current.muted = !muted;
//     setMuted(!muted);
//   };

//   return (
//     <>
//       <audio ref={audioRef} loop src={Music} />

//       {/* Optional mute button */}
//       <button
//         onClick={toggleMute}
//         className="fixed bottom-6 right-6 z-50 bg-black/70 backdrop-blur border border-[#C8A951]
//         text-[#C8A951] px-4 py-2 rounded-full text-xs tracking-widest uppercase"
//       >
//         {muted ? "Unmute" : "Mute"}
//       </button>
//     </>
//   );
// };

// export default MusicToggle;


// MusicToggle.jsx
// MusicToggle.jsx

// MusicToggle.jsx
// MusicToggle.jsx
import { useEffect, useRef, useState } from "react";
import Music from "../assets/Music.mp3";

const MusicToggle = ({ start }) => {
  const audioRef = useRef(null);
  const unlockedRef = useRef(false); // 👈 gesture unlock flag
  const [muted, setMuted] = useState(false);

  // 🔓 iOS gesture unlock (runs ONLY once)
  useEffect(() => {
    const unlockAudio = () => {
      if (!audioRef.current || unlockedRef.current) return;

      audioRef.current.volume = 0.6;
      audioRef.current
        .play()
        .then(() => {
          unlockedRef.current = true;
        })
        .catch(() => {});
    };

    window.addEventListener("click", unlockAudio, { once: true });
    window.addEventListener("touchstart", unlockAudio, { once: true });

    return () => {
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
    };
  }, []);

  // ▶️ Start music when `start` becomes true
  useEffect(() => {
    if (!start || !audioRef.current) return;

    audioRef.current.volume = 0.6;
    audioRef.current.play().catch(() => {});
  }, [start]);

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={Music}
        loop
        playsInline   // 👈 iOS REQUIRED
      />

      <button
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-50 bg-black/70 backdrop-blur border border-[#C8A951]
        text-[#C8A951] px-4 py-2 rounded-full text-xs tracking-widest uppercase"
      >
        {muted ? "Unmute 🔊" : "Mute 🔇"}
      </button>
    </>
  );
};

export default MusicToggle;
