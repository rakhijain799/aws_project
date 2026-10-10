import { useState } from "react";

function App() {
  const [ data, setData] = useState([]);

  const callBackend = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/students");

      const result = await response.json();

      setData(result);
    } catch (error) {
      console.error(error);
      alert("Backend se connection nahi ho raha!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Docker Multi-Container App</h1>

      <p>Frontend is running 🚀</p>

      <button onClick={callBackend}>
        Call Backend
      </button>

      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

export default App;
