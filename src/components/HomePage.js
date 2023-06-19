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
  console.log(localCharities);
  const [city, setCity] = useState("charleston");

  //** Component Logic

  useEffect(() => {
    const getLocalCharities = async () => {
      try {
        const response = await fetch(
          `https://projects.propublica.org/nonprofits/api/v2/search.json?q=charleston`,
          {}
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
  }, []);
  //** Return JSX
  if (!localCharities) {
    return <div>loading...</div>;
  }
  return (
    <div style={{ backgroundColor: "wheat" }}>
      <form style={{ margin: "10px" }}>
        <label>
          Where are you located?
          <input
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            style={{ margin: "10px" }}
          />
        </label>
      </form>
      <Paper
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          backgroundColor: "gray",
          margin: "20px",
          padding: "10px",
        }}
      >
        <Grid container spacing={2}>
          {localCharities.map((charityData) => {
            return (
              <Grid item xs={3}>
                <CharityCard charityData={charityData} />
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    </div>
  );
}
export default HomePage;
