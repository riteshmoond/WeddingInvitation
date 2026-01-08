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

  // 1️⃣ Entry
  if (step === 1) {
    return (
      <>
        <MusicToggle ref={musicRef} start={musicStart} />
        <EntryGate
          onSubmit={(n) => {
            setName(n);
            setStep(2);
          }}
        />
      </>
    );
  }

  // 2️⃣ Open Card
  if (step === 2) {
    return (
      <>
        <MusicToggle ref={musicRef} start={musicStart} />
        <OpenCard
          name={name}
          onOpen={() => {
            // ✅ iOS SAFE: audio already mounted
            musicRef.current?.play();
            setMusicStart(true);
            setShowIntro(true);
            setStep(3);
          }}
        />
      </>
    );
  }

  // 3️⃣ Main Invitation
  return (
    <>
      <MusicToggle ref={musicRef} start={musicStart} />

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
  );
}

export default App;
