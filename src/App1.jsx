// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import StayCard from "./components/Staycard";

function App () {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [guests, setGuests] = useState("");

  const getData = async () => {
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearchTextChange = (event) => {
    const value = event.target.value;
    setSearchText(value);
  };

  const handleGuestsChange = (event) => {
    const value = event.target.value;
    setGuests(value);
  };

  const filteredData = data.filter((stay) => {
    const searchTextMatch = stay.city.toLowerCase().includes(searchText.toLowerCase());
    const guestsMatch = guests === "" || stay.maxGuests === parseInt(guests);
    return searchTextMatch && guestsMatch;
  });

  const remainingImages = Math.max(filteredData.length - 6, 0);

  return (
    <div className="container">
      <NavBar
        handleSearchTextChange={handleSearchTextChange}
        handleGuestsChange={handleGuestsChange}
      />
      <div className="mb-4"></div>
      <header className="mb-4">
        <h1>Stay in Finland</h1>
        {remainingImages > 0 && (
          <span>{remainingImages}+stays</span>
        )}
      </header>
      <div className="row">
        {filteredData.slice(0, 6).map((stay, index) => (
          <StayCard stay={stay} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
