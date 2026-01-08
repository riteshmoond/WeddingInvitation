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
import { useEffect, useRef, useState } from "react";
import Music from "../assets/Music.mp3";

const MusicToggle = ({ start }) => {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(true); // 👈 iOS requires muted autoplay
  const [played, setPlayed] = useState(false);

  const playAudio = () => {
    if (!audioRef.current || played) return;

    audioRef.current.volume = 0.6;
    audioRef.current.muted = true; // 👈 iOS rule
    audioRef.current
      .play()
      .then(() => setPlayed(true))
      .catch(() => {});
  };

  // 🔥 Start music automatically + iOS fallback
  useEffect(() => {
    if (!start) return;

    playAudio(); // try autoplay

    // iOS Safari fallback → first user interaction
    const unlock = () => {
      playAudio();
    };

    window.addEventListener("click", unlock, { once: true });
    window.addEventListener("touchstart", unlock, { once: true });

    return () => {
      window.removeEventListener("click", unlock);
      window.removeEventListener("touchstart", unlock);
    };
  }, [start]);

  const toggleMute = () => {
    if (!audioRef.current) return;

    const newMuted = !muted;
    audioRef.current.muted = newMuted;
    setMuted(newMuted);
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src={Music}
        muted={muted}
        playsInline   // 👈 MUST for iOS
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

