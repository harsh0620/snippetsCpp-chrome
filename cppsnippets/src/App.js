import { useState } from "react";
import "./App.css";
import CODEDATA from "./snippetsData.json";
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [checked, setChecked] = useState(false);
  const handleCopy = (body) => {
    let data = "";
    setChecked(!checked);
    body.map((val) => {
      data += val;
      data += " ";
      return 0;
    });

    navigator.clipboard.writeText(data);
  };
  return (
    <div className="app">
      <div className="header">
        <h1>CPP Snippet</h1>
      </div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      {CODEDATA.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if (
          val.prefix.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val;
        }
        return 0;
      }).map((val, key) => {
        return (
          <div key={key}>
            <p>{val.prefix}</p>

            <div
              onClick={() => {
                handleCopy(val.body);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-clipboard"
                viewBox="0 0 16 16"
              >
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
