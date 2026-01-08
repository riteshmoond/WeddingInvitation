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
  const [muted, setMuted] = useState(true);   // 👈 start muted (iOS rule)
  const [played, setPlayed] = useState(false);

  const playAudio = () => {
    if (!audioRef.current || played) return;

    audioRef.current.volume = 0.6;
    audioRef.current.muted = true; // 👈 required for iOS autoplay
    audioRef.current
      .play()
      .then(() => setPlayed(true))
      .catch(() => {});
  };

  useEffect(() => {
    if (!start || played) return;

    // try autoplay
    playAudio();

    // iOS fallback: first user interaction
    const unlockAudio = () => {
      playAudio();
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
    };

    window.addEventListener("click", unlockAudio, { once: true });
    window.addEventListener("touchstart", unlockAudio, { once: true });

    return () => {
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
    };
  }, [start, played]);

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
        src={Music}
        loop
        muted={muted}
        playsInline   // 👈 iOS REQUIRED
      />

      <button
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-50 bg-black/70 backdrop-blur border border-[#C8A951]
        text-[#C8A951] px-4 py-2 rounded-full text-xs tracking-widest uppercase hover:bg-[#C8A951]
        hover:text-black transition-all duration-300"
      >
        {muted ? "Unmute 🔊" : "Mute 🔇"}
      </button>
    </>
  );
};

export default MusicToggle;

