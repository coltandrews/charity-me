//** Import Statements
import CharityCard from "./CharityCard";
import { useState, useEffect } from "react";

import { Grid, Paper } from "@mui/material";



//** Setup (define helper functions and variables here)

function HomePage(props) {
  //** Destructure Props
  const {} = props;

  //** State Variables
  const [localCharities, setLocalCharities] = useState();
  console.log(localCharities)
  const [city, setCity] = useState('');
  const [input, setInput] = useState('');

  //** Component Logic
  const [favorites, setFavorites] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("favorites");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  const isFavorite = (charityData) => {
    return favorites.some(fav => fav.ein === charityData.ein)
  }
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (charityData) => {
    const newFavorites = [...favorites];
    if (!newFavorites.some((fav) => fav.ein === charityData.ein)) {
      newFavorites.push({
        name: charityData.name,
        ein: charityData.ein,
        city: charityData.city,
        state: charityData.state,
      });
      setFavorites(newFavorites);
    }
  };
  const removeFavorite = (ein) => {
    const newFavorites = favorites.filter((fav) => fav.ein != ein);
    setFavorites(newFavorites);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setCity(input)
    // else do nothing, the state will update and display the error to the user
  }

  useEffect(() => {
    const getLocalCharities = async () => {
      try {
        const response = await fetch(
          `https://corsproxy.io/?https://projects.propublica.org/nonprofits/api/v2/search.json?q=${city}`
        );
        if (!response.ok) {
          throw new Error("failed to fetch data");
        }
        const result = await response.json();
        setLocalCharities(result.organizations);
      } catch (err) {
        console.log(err);
      }
    };
    getLocalCharities();
  }, [city]);
  //** Return JSX
  if (!localCharities) {
    return <div>loading...</div>;
  }
  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <form style={{ margin: "10px" }} onSubmit={handleSubmit}>
        <label>
          What city are you in?
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            style={{ margin: "10px" }}
          />
          <input type="submit" value="Submit" />
        </label>
      </form>
      <Paper
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          backgroundColor: "inherit",
          margin: "20px",
          padding: "10px",
        }}
      >
        <Grid container spacing={2}>
          {localCharities.map((charityData) => {
            return (
              <Grid item xs={3}>
                <CharityCard
                  charityData={charityData}
                  addFavorite={addFavorite}
                  isFavorite={isFavorite}
                  removeFavorite={removeFavorite}
                />
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    </div>
  );
}
export default HomePage;
