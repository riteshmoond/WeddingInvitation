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
import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";
import Music from '../assets/Music.mp3'

const MusicToggle = forwardRef(({ start }, ref) => {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);

  // 🔥 iOS Fix: Global Unlock Listener
  // Ye listener user ke PEHLE touch par (Step 1 me hi) audio ko unlock kar dega
  useEffect(() => {
    const unlockAudio = () => {
      if (audioRef.current) {
        // Play silent/empty sound to unlock audio engine
        audioRef.current.play().then(() => {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }).catch((e) => console.log("Auto-unlock failed (harmless):", e));
      }
      // Ek baar unlock ho gaya to listeners hata do
      ['click', 'touchstart', 'keydown'].forEach(event => 
        document.removeEventListener(event, unlockAudio)
      );
    };

    ['click', 'touchstart', 'keydown'].forEach(event => 
      document.addEventListener(event, unlockAudio)
    );

    return () => {
      ['click', 'touchstart', 'keydown'].forEach(event => 
        document.removeEventListener(event, unlockAudio)
      );
    };
  }, []);

  // 🔥 Expose play method to parent (App.jsx)
  useImperativeHandle(ref, () => ({
    play: () => {
      if (audioRef.current) {
        audioRef.current.muted = false;
        audioRef.current.volume = 0.6;
        audioRef.current.play().catch((e) => console.log("Play failed:", e));
        setMuted(false);
      }
    },
    pause: () => {
      if (audioRef.current) audioRef.current.pause();
    }
  }));

  // 2. Jab 'start' prop change ho (jaise card open ho)
  useEffect(() => {
    if (start && audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.volume = 0.6;
      
      audioRef.current.play().catch(() => {});
    }
  }, [start]);

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    audioRef.current.muted = !muted;
    setMuted(!muted);
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
        className="fixed bottom-6 right-6 z-50 bg-black/70 backdrop-blur border border-[#C8A951]
        text-[#C8A951] px-4 py-2 rounded-full text-xs tracking-widest uppercase"
      >
        {muted ? "Unmute 🔊" : "Mute 🔇"}
      </button>
    </>
  );
});

export default MusicToggle;