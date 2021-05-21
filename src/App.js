import React, { useState, useEffect } from "react";
import "./styles.css";
import { processData } from "./utils";

export const FetchHook = (url) => {
  const [result, setResult] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setResult(data.results);
      } catch (error) {
        console.error("error :", error);
        setError(error.message);
      }
      setLoading(false);
    }

    getData();
  }, []);

  return [result, error, isLoading];
};

const payloadURL = "https://swapi.dev/api/people/";

export default function App() {
  const [result, error, isLoading] = FetchHook(payloadURL);
  const [searchValue, setSearchValue] = useState("");
  const [peopleData, setPeopleData] = useState([]);

  const filterPeopleParams = { gender: "male", minHeight: 130 };

  const usePeopleData = (filtersToApply) => {
    const filteredData = processData(filtersToApply)(result);
    return filteredData;
  };
  /* filter and sort people data */
  const people = usePeopleData(filterPeopleParams);

  /* search Handler */
  const valueChangeHandler = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
    /* just lowercase monster thing don't be afraid :) */
    let tmp = people.filter((p) =>
      p.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setPeopleData(tmp);
  };
  // for conditional rendering ...
  let dataToRender = searchValue === "" ? people : peopleData;

  return (
    <div className="App">
      {/* if error occurs */}
      {error && <p>Error: {error} </p>}

      {/* only if we have data to render */}
      {people && (
        <>
          <div>
            <label>
              Mission name:{" "}
              <input
                onChange={(e) => valueChangeHandler(e)}
                value={searchValue}
              />
            </label>
          </div>
          <h3>People</h3>
          {dataToRender.map((person) => (
            <>
              <ul key={person.id}>
                <li>Name: {person.name}</li>
                <li>Weight: {person.mass}</li>
                <li>Height: {person.height}</li>
              </ul>
              <hr />
            </>
          ))}
        </>
      )}
    </div>
  );
}
