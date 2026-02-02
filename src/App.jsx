//import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./components/TitleComponent";
import TitleComponent from "./components/TitleComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div> */}
      <div className="border">
        <TitleComponent nameOfAnimal="This is a dog" />
        <ImageComponent animalUrl="placedog.net/" alt="This is a dog" />
      </div>
      <div className="border">
        <TitleComponent nameOfAnimal="This is a cat" />
        <ImageComponent animalUrl="placecats.com/" alt="This is a cat" />
      </div>
      <div className="border">
        <TitleComponent nameOfAnimal="This is a bear" />
        <ImageComponent animalUrl="placebear.com/" alt="This is a bear" />
      </div>
    </>
  );
}

export default App;
