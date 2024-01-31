import Button_patti from "./Components/Button_patti";
import Collar from "./Components/Collar";
import Sleeve_mouth from "./Components/Sleeve_mouth";
import Sleeve_only from "./Components/Sleeve_only";
import "./App.css";
import Pocket from "./Components/Pocket";
import Cuff from "./Components/Cuff";
import Front_back from "./Components/Front_back";
import Sleeve_ts from "./Components/Sleeve_ts";
import Collar_ready from "./Components/Collar_ready";
import Sleeve from "./Components/Sleeve";
import Feed_of_arm from "./Components/Feed_of_arm";
import Pocket_mouth from "./Components/Pocket_mouth";
import Cuff_ready from "./Components/Cuff_ready";
import Main_label from "./Components/Main_label";
import Kansai from "./Components/Kansai";
import Bottom from "./Components/Bottom";
import Sleeve_dart from "./Components/Sleeve_dart";
import Sleeve_patti from "./Components/Sleeve_patti";
function App() {
  return (
    <div className="App">
      <div>
        <div className="flex">
          <Sleeve_only />
          <Collar />
          <Button_patti />
        </div>
        <div className="flex">
          <Sleeve_mouth />
          <Pocket />
          <Cuff />
        </div>
        <div className="flex">
          <Front_back />
          <Sleeve_ts />
          <Collar_ready />
        </div>
        <div className="flex">
          <Sleeve />
          <Feed_of_arm />
          <Pocket_mouth />
        </div>
        <div className="flex">
          <Cuff_ready />
          <Main_label />
          <Kansai />
        </div>
        <div className="flex">
          <Bottom />
          <Sleeve_dart />
          <Sleeve_patti />
        </div>
      </div>
    </div>
  );
}

export default App;
