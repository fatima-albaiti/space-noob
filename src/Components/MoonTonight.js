import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { MoonPhase } from "../Objects/MoonPhase";
import axios from "axios";

function MoonTonight() {
  const [moonPhase, setMoonPhase] = useState('');
  const [moonIllumination, setMoonIllumination] = useState('');

  const fetchData = async() => {
    const response = await axios.get("https://us-central1-space-noob.cloudfunctions.net/api/astronomy");
    const data = response.data.root.astronomy.astro;
    setMoonPhase(data.moon_phase);
    setMoonIllumination(data.moon_illumination);
  }

  useEffect(() => {
    fetchData();
  }, [])
  
  const getImageUrl = (phase) => {
    switch (phase) {
      case MoonPhase.WANING_GIBBOUS: return require('../img/moon-phases/moon-phase1.png');
      case MoonPhase.LAST_QUARTER: return require('../img/moon-phases/moon-phase1.png');
      case MoonPhase.WANING_CRESCENT: return require('../img/moon-phases/moon-phase3.png');
      case MoonPhase.FULL_MOON: return require('../img/moon-phases/moon-phase4.png');
      case MoonPhase.NEW_MOON: return require('../img/moon-phases/moon-phase5.png');
      case MoonPhase.WAXING_GIBBOUS: return require('../img/moon-phases/moon-phase6.png');
      case MoonPhase.FIRST_QUARTER: return require('../img/moon-phases/moon-phase7.png');
      case MoonPhase.WAXING_CRESCENT: return require('../img/moon-phases/moon-phase8.png');
      default: return require('../img/moon-phases/moon-phase5.png');
    }
  }

  const getIllumination = (illumination) => {
    console.log(illumination);
    switch (true) {
      case (illumination === 0): return "You can't see it but it's still there.";
      case (illumination > 0 && illumination < 30): return "It's not very bright.";
      case (illumination >= 30 && illumination < 70): return "It's moderately bright.";
      case (illumination >= 70 && illumination < 100): return "It's very bright.";
      case (illumination === 100): return "It's the brightest it could be.";
      default: return "";
    }
  }

  return (
    <div className="section">
      <div className="moon-tonight">
        <h1>The Moon Tonight</h1>
        <p>The moon is in the <span>{moonPhase}</span> phase tonight.</p>
        
      <Image className="moon-phase" src={getImageUrl(moonPhase)}></Image>
      <p>It's <span>{moonIllumination}% illuminated</span>. {getIllumination(parseInt(moonIllumination))}</p>
      <br /><br />
     
      </div>
    </div>
  )
}

export default MoonTonight;