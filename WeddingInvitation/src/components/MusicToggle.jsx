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

  // Sabse important function: iOS ke liye direct interaction
  const handleStartMusic = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.6;
      audioRef.current.play()
        .then(() => {
          setPlayed(true);
        })
        .catch((err) => {
          console.log("Playback failed:", err);
        });
    }
  };

  useEffect(() => {
    if (start && !played) {
      // iOS/Safari compatibility ke liye dono listeners
      window.addEventListener("click", handleStartMusic, { once: true });
      window.addEventListener("touchstart", handleStartMusic, { once: true });
    }

    return () => {
      window.removeEventListener("click", handleStartMusic);
      window.removeEventListener("touchstart", handleStartMusic);
    };
  }, [start, played]);

  const toggleMute = (e) => {
    e.stopPropagation(); // Click event ko window tak jane se rokne ke liye
    if (!audioRef.current) return;
    
    // Agar music abhi tak play nahi hua (iOS restriction), to toggle button par click karne se hi play kar do
    if (!played) {
      handleStartMusic();
    }
    
    audioRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <>
      {/* playsInline aur preload="auto" iOS ke liye zaroori hain */}
      <audio 
        ref={audioRef} 
        loop 
        src={Music} 
        playsInline 
        preload="auto"
      />

      <button
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-50 bg-black/70 backdrop-blur border border-[#C8A951]
          text-[#C8A951] px-4 py-2 rounded-full text-xs tracking-widest uppercase hover:bg-[#C8A951] hover:text-black transition-all duration-300"
      >
        {muted ? "Unmute 🔊" : "Mute 🔇"}
      </button>

      {!played && (
        <div 
          onClick={handleStartMusic} // Direct click handler on the hint
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50 text-sm sm:text-base text-yellow-400 font-semibold
          bg-black/50 px-4 py-2 rounded-lg animate-pulse cursor-pointer"
        >
          Tap anywhere to start music 🎵
        </div>
      )}
    </>
  );
};

export default MusicToggle;