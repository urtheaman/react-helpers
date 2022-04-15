import "./App.css";
import fileStructures from "../filestructure.json";
import Unfold from "./file-structures/Unfold";
import Modal from "./modal/Modal";

function App() {
  return (
    <div className="app">
      <Unfold args={fileStructures} />
      <Modal>Hello There!</Modal>
    </div>
  );
}



export default App;
