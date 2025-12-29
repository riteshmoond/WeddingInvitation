import { useState } from "react";
import "./App.css";

import CinematicIntro from "./components/CinematicIntro";
import Couple from "./components/Couple";
import EntryGate from "./components/EntryGate";
import Events from "./components/Events";
import Fireworks from "./components/Fireworks";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MusicToggle from "./components/MusicToggle";
import OpenCard from "./components/OpenCard";
import RSVP from "./components/RSVP";
import Venue from "./components/Venue";
import Countdown from "./components/Countdown";

function App() {
  const [musicStart, setMusicStart] = useState(false);
  const [name, setName] = useState("");
  const [step, setStep] = useState(1);
  const [showIntro, setShowIntro] = useState(false);

  // 1️⃣ Entry
  if (step === 1) {
    return (
      <EntryGate
        onSubmit={(n) => {
          setName(n);
          setStep(2);
        }}
      />
    );
  }

  // 2️⃣ Open Card
  if (step === 2) {
    return (
      <OpenCard
        name={name}
        onOpen={() => {
          setShowIntro(true);
          setMusicStart(true);
          setStep(3);
        }}
      />
    );
  }

  // 3️⃣ Main Invitation
  return (
    <>
      {showIntro && (
        <CinematicIntro
          name={name}
          onFinish={() => setShowIntro(false)}
        />
      )}

      <MusicToggle start={musicStart} />

      <Hero />
      <Fireworks />
      <Couple />
      <Events />
      <Venue />
      <Countdown />
      <RSVP />
      <Footer />
    </>
  );
}

export default App;
