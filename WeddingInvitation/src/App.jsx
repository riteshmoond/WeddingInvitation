import { useState, useRef } from "react";
import "./App.css";

import CinematicIntro from "./components/CinematicIntro";
// import Couple from "./components/Couple";
import EntryGate from "./components/EntryGate";
// import Events from "./components/Events";
import Fireworks from "./components/Fireworks";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MusicToggle from "./components/MusicToggle";
import OpenCard from "./components/OpenCard";
import RSVP from "./components/RSVP";
import Venue from "./components/Venue";
import Countdown from "./components/Countdown";
import Family from "./components/Family";
import FamilyWelcome from "./components/FamilyWelcome";
// import TheirStory from "./components/TheirStory";
import EngagementSlider from "./components/EngagementSlider";
import WeddingInvitation from "./components/WeddingInvitation";

function App() {
  const [musicStart, setMusicStart] = useState(false);
  const [name, setName] = useState("");
  const [step, setStep] = useState(1);
  const [showIntro, setShowIntro] = useState(false);
  const musicRef = useRef(null);


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
           musicRef.current?.play(); // ✅ SAME USER TAP
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
    <MusicToggle start={musicStart} ref={musicRef}/>
      {showIntro && (
        <CinematicIntro
          name={name}
          onFinish={() => setShowIntro(false)}
        />
      )}


      <Hero />
      <Fireworks />
      {/* <Couple /> */}
      {/* <TheirStory/> */}
      <Family/>
      <EngagementSlider/>
      {/* <Events /> */}
      <Venue />
      <Countdown />
      <FamilyWelcome/>
      <RSVP />
      <Footer />
      {/* <WeddingInvitation/> */}
    </>
  );
}

export default App;
