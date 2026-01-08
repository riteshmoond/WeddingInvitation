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
  const [muted, setMuted] = useState(true); // Default muted true rakhein safety ke liye
  const [isPlaying, setIsPlaying] = useState(false);

  // Jab parent se 'start' true ho, tab hum audio load karwa sakte hain
  useEffect(() => {
    if (start && audioRef.current) {
      audioRef.current.load(); 
    }
  }, [start]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (!isPlaying) {
      // Pehli baar play karne ke liye (iOS requirement: Direct click handler)
      audioRef.current.volume = 0.6;
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setMuted(false);
          audioRef.current.muted = false;
        })
        .catch((err) => console.log("Playback blocked:", err));
    } else {
      // Normal mute/unmute toggle
      const newMutedState = !muted;
      audioRef.current.muted = newMutedState;
      setMuted(newMutedState);
    }
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        src={Music} 
        loop 
        playsInline 
        preload="auto" 
      />

      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 bg-black/70 backdrop-blur border border-[#C8A951]
          text-[#C8A951] px-4 py-2 rounded-full text-xs tracking-widest uppercase hover:bg-[#C8A951] hover:text-black transition-all duration-300"
      >
        {/* Agar play nahi ho raha to 'Play' dikhao, warna Mute/Unmute */}
        {!isPlaying ? "Play Music 🎵" : (muted ? "Unmute 🔊" : "Mute 🔇")}
      </button>
    </>
  );
};

export default MusicToggle;