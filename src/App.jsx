import { useQuery } from "@apollo/client";
import INFO_PESSOA from "./querys/index";
import React from "react";
import "./App.css";

function App() {
  const { loading, error, data } = useQuery(INFO_PESSOA);
  if (loading) {
    return <p>Carrregando....</p>;
  }
  if (error) {
    return <p>Ocorreu um erro</p>;
  }
  return (
    <section className="parent">
      {data.characters.results.map((person) => (
        <div className="card" key={person.name}>
          <img src={person.image} alt="avatar" />
          <div className="container">
            <h4>
              <b>{person.name}</b>
            </h4>
            <p>
              <b>GENDER: </b>
              {person.gender}
            </p>
            <p>
              <b>SPECIE: </b>
              {person.species}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default App;
