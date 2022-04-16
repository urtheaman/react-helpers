import "./App.css";
import fileStructures from "../filestructure.json";
import Unfold from "./file-structures/Unfold";
import Modal from "./modal/Modal";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/">
          <Route
            index
            element={<h1>Complete Modern redux implementation</h1>}
          />

          <Route
            path="file-structures"
            element={<Unfold args={fileStructures} />}
          />
          <Route path="modal" element={<Modal>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod sed velit eum! Molestiae aliquam, cupiditate placeat eos reiciendis quia consequuntur soluta doloremque voluptatum maxime, pariatur aliquid officia totam quam magnam.</Modal>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
