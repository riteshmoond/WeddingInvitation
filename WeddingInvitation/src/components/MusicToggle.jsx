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
import { useEffect, useRef, useState } from "react";
import Music from "../assets/Music.mp3";

const MusicToggle = ({ start }) => {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);
  const [played, setPlayed] = useState(false);

  // User first tap / click pe music play
  const playAudio = () => {
    if (audioRef.current && !played) {
      audioRef.current.volume = 0.6; // initial volume
      audioRef.current.play().catch(() => {});
      setPlayed(true);
    }
  };

  useEffect(() => {
    if (start && !played) {
      // Desktop + mobile tap listener
      window.addEventListener("click", playAudio, { once: true });
      window.addEventListener("touchstart", playAudio, { once: true });
    }

    return () => {
      window.removeEventListener("click", playAudio);
      window.removeEventListener("touchstart", playAudio);
    };
  }, [start, played]);

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <>
      {/* Audio */}
      <audio ref={audioRef} loop src={Music} />

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-50 bg-black/70 backdrop-blur border border-[#C8A951]
          text-[#C8A951] px-4 py-2 rounded-full text-xs tracking-widest uppercase hover:bg-[#C8A951] hover:text-black transition-all duration-300"
      >
        {muted ? "Unmute 🔊" : "Mute 🔇"}
      </button>

      {/* Tap anywhere hint */}
      {!played && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 text-sm sm:text-base text-yellow-400 font-semibold
          bg-black/50 px-4 py-2 rounded-lg animate-pulse">
          Tap anywhere to start music 🎵
        </div>
      )}
    </>
  );
};

export default MusicToggle;
