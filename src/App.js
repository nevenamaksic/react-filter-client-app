import "./App.css";
import React, { useRef, useEffect, useState } from "react";
import clientsData from "./Data.json";
import Client from "./components/Client";

function App() {
  let inputSearch = useRef(null);
  useEffect(() => {
    inputSearch.current.focus();
  });

  const [searchClient, setSearchClient] = useState("");

  return (
    <div className="App">
      <div className="title">
        <h1>Klijenti</h1>
        <input
          className="input"
          type="text"
          placeholder="Unesite JMBG"
          ref={inputSearch}
          onChange={(e)=>setSearchClient(e.target.value)}
        />
      </div>
      <section
        className="d-flex"
        style={{ gap: 40, maxWidth: 1600, flexWrap: "wrap", display: "grid", gridTemplateColumns: "300px 300px 300px 300px" }}
      >
        {clientsData.filter((client) => {
          if (searchClient === "") {
            return client;
          } else if (client.jmbg.includes(searchClient)) {
            return client;
          }
        }).map((client) => (
          <Client
            client={client}
            cardColor={"card-primary"}
            textColor={"text-primary"}
          />
        ))}
      </section>
    </div>
  );
}

export default App;