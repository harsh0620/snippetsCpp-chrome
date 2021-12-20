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
        <img src="icon.png" className="icon" alt="icon"></img>
        <div className="header-topic">
          <h1>Cpp Snippet</h1>
          <p>
            By -
            <a
              href="https://harshchandravanshi.me/"
              target="__blank"
              className="header-topic-anchor"
            >
              Harsh Chandravanshi
            </a>
          </p>
        </div>

        <a
          href="https://github.com/harsh0620/snippetsCpp-chrome"
          target="__blank"
          className="git"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-github"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
      </div>
      <div className="appInput">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
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
          <div key={key} className="box">
            <div className="card">
              <div className="card-box">
                <div className="card-prefix">
                  <p className="card-prefix-tag">{val.prefix}</p>
                  <div
                    onClick={() => {
                      handleCopy(val.body);
                    }}
                    className="copy"
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        class="bi bi-clipboard"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <p>{val.description}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
