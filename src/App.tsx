import "./App.css";
import fileStructures from "../filestructure.json";
import Unfold from "./file-structures/Unfold";

function App() {
  return (
    <div className="app">
      <Unfold args={fileStructures} />
    </div>
  );
}



export default App;
