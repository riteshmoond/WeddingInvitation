import { useRef, useState } from "react";
import MusicToggle from "./components/MusicToggle";
import OpenCard from "./components/OpenCard";
import EntryGate from "./components/EntryGate";
import CinematicIntro from "./components/CinematicIntro";
import './App.css'
import Hero from "./components/Hero";
import Fireworks from "./components/Fireworks";
import Family from "./components/Family";
import EngagementSlider from "./components/EngagementSlider";
import Venue from "./components/Venue";
import Countdown from "./components/Countdown";
import FamilyWelcome from "./components/FamilyWelcome";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";

function App() {
  const [musicStart, setMusicStart] = useState(false);
  const [name, setName] = useState("");
  const [step, setStep] = useState(1);
  const [showIntro, setShowIntro] = useState(false);
  const musicRef = useRef(null);

  return (
    <>
      {/* Isko hamesha bahar rakho taaki ye reset na ho step badalne par */}
      <MusicToggle ref={musicRef} start={musicStart} />

      {step === 1 && (
        <EntryGate
          onSubmit={(n) => {
            setName(n);
            setStep(2);
          }}
        />
      )}

      {step === 2 && (
        <OpenCard
          name={name}
          onOpen={() => {
            // 🔥 iPhone Fix: Play music directly on user click
            if (musicRef.current) {
              musicRef.current.play();
            }
            setMusicStart(true); // Yahan click hote hi music chal jayega
            setShowIntro(true);
            setStep(3);
          }}
        />
      )}

      {step === 3 && (
        <>
          {showIntro && (
            <CinematicIntro
              name={name}
              onFinish={() => setShowIntro(false)}
            />
          )}
          <Hero />
          <Fireworks />
          <Family />
          <EngagementSlider />
          <Venue />
          <Countdown />
          <FamilyWelcome />
          <RSVP />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;