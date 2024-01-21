import { useState } from "react";
import Tours from "./components/Tours";
import { data } from "./data";

function App() {
  const [toursData, setToursData] = useState(data);

  const removeCard = (id) => {
    setToursData(toursData.filter((tourData) => tourData.id !== id));
  };

  if (toursData.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="refresh-btn" onClick={() => setToursData(data)}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div>
      <Tours datas={toursData} removeCard={removeCard} />
    </div>
  );
}

export default App;
