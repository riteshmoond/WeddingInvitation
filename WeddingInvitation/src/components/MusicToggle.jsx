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
// import { forwardRef, useImperativeHandle, useRef, useState } from "react";
// import Music from "../assets/Music.mp3";

// const MusicToggle = forwardRef(({ start }, ref) => {
//   const audioRef = useRef(null);
//   const [muted, setMuted] = useState(true);

//   useImperativeHandle(ref, () => ({
//     play() {
//       if (!audioRef.current) return;

//       audioRef.current.volume = 0.6;
//       audioRef.current.muted = true; // ✅ iOS trick
//       audioRef.current.play().then(() => {
//         audioRef.current.muted = false;
//         setMuted(false);
//       });
//     },
//   }));

//   const toggleMute = () => {
//     if (!audioRef.current) return;
//     audioRef.current.muted = !audioRef.current.muted;
//     setMuted(audioRef.current.muted);
//   };

//   return (
//     <>
//       <audio
//         ref={audioRef}
//         src={Music}
//         loop
//         preload="auto"
//         playsInline
//       />

//       {start && (
//         <button
//           onClick={toggleMute}
//           className="fixed bottom-6 right-6 z-50 bg-black/70 backdrop-blur
//           border border-[#C8A951] text-[#C8A951]
//           px-4 py-2 rounded-full text-xs tracking-widest uppercase"
//         >
//           {muted ? "Unmute 🔊" : "Mute 🔇"}
//         </button>
//       )}
//     </>
//   );
// });

// export default MusicToggle;








// MusicToggle.jsx
import { useEffect, useRef, useState } from "react";
import Music from '../assets/Music.mp3'

const MusicToggle = ({ start }) => {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    // 1. Audio context unlock karne ke liye function
    const unlockAudio = () => {
      if (audioRef.current && !isUnlocked) {
        audioRef.current.play().then(() => {
          // Jaise hi play ho jaye, turant pause karke mute status handle karo
          // Isse browser ko lagta hai ki user ne permission de di hai
          audioRef.current.pause();
          setIsUnlocked(true);
        }).catch(() => {});
        
        window.removeEventListener('touchstart', unlockAudio);
        window.removeEventListener('click', unlockAudio);
      }
    };

    // Listeners for mobile/desktop
    window.addEventListener('touchstart', unlockAudio);
    window.addEventListener('click', unlockAudio);

    return () => {
      window.removeEventListener('touchstart', unlockAudio);
      window.removeEventListener('click', unlockAudio);
    };
  }, [isUnlocked]);

  // 2. Jab 'start' prop change ho (jaise card open ho)
  useEffect(() => {
    if (start && audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.volume = 0.6;
      
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Agar abhi bhi block ho, to iska matlab user interaction baaki hai
          console.log("Waiting for user tap to play...");
        });
      }
    }
  }, [start]);

  const toggleMute = (e) => {
    e.stopPropagation(); 
    if (!audioRef.current) return;
    const nextMuted = !muted;
    audioRef.current.muted = nextMuted;
    setMuted(nextMuted);
    
    // Agar music ruk gaya hai (iPhone policy), to toggle dabane par chalu kar do
    if (!nextMuted) {
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <>
      {/* 3. iPhone ke liye 'playsInline' aur 'preload' bahut zaroori hai */}
      <audio 
        ref={audioRef} 
        loop 
        src={Music} 
        playsInline 
        preload="auto"
      />

      <button
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-[9999] bg-black/70 backdrop-blur border border-[#C8A951]
        text-[#C8A951] px-4 py-2 rounded-full text-xs tracking-widest uppercase active:scale-95 transition-all"
      >
        {muted ? "Unmute 🔊" : "Mute 🔇"}
      </button>
    </>
  );
};

export default MusicToggle;