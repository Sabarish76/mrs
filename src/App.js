import ButtonPatti from "./Components/ButtonPatti";
import Collar from "./Components/Collar";
import SleeveMouth from "./Components/SleeveMouth";
import SleeveOnly from "./Components/SleeveOnly";
import "./App.css";
import Pocket from "./Components/Pocket";
import Cuff from "./Components/Cuff";
import FrontBack from "./Components/FrontBack";
import SleeveTs from "./Components/SleeveTs";
import CollarReady from "./Components/CollarReady";
import Sleeve from "./Components/Sleeve";
import FeedOfArm from "./Components/FeedOfArm";
import PocketMouth from "./Components/PocketMouth";
import CuffReady from "./Components/CuffReady";
import MainLabel from "./Components/MainLabel";
import Kansai from "./Components/Kansai";
import Bottom from "./Components/Bottom";
import SleeveDart from "./Components/SleeveDart";
import SleevePatti from "./Components/SleevePatti";
import LOT from "./Components/LOT";
function App() {
  return (
    <div className="App">
      <div>
        <LOT />
      </div>
      <div>
        <div className="flex">
          <SleeveOnly />
          <Collar />
          <ButtonPatti />
        </div>
        <div className="flex">
          <SleeveMouth />
          <Pocket />
          <Cuff />
        </div>
        <div className="flex">
          <FrontBack />
          <SleeveTs />
          <CollarReady />
        </div>
        <div className="flex">
          <Sleeve />
          <FeedOfArm />
          <PocketMouth />
        </div>
        <div className="flex">
          <CuffReady />
          <MainLabel />
          <Kansai />
        </div>
        <div className="flex">
          <Bottom />
          <SleeveDart />
          <SleevePatti />
        </div>
      </div>
    </div>
  );
}

export default App;
