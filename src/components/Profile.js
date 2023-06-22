//** Import Statements

import { useEffect, useState } from "react";
import FavoritesCard from "./FavoritesCard";
import { Grid, Paper } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

//** Setup (define helper functions and variables here)

function Profile(props) {
  //** Destructure Props
  const {} = props;

  //** State Variables
  const [favorites, setFavorites] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("favorites");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  //** Component Logic
  const removeFavorite = (ein) => {
    const newFavorites = favorites.filter((fav) => fav.ein != ein);
    setFavorites(newFavorites);
  };
  //** Return JSX
  return (
    <div>
      <h2>My Charities</h2>
      <Paper elevation={3} sx={{ margin: 2, padding: 2 }}>
        <Grid container spacing={2}>
          {favorites.map((favorite) => {
            return (
              <Grid item xs={4}>
                <FavoritesCard
                  favorite={favorite}
                  removeFavorite={removeFavorite}
                ></FavoritesCard>
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    </div>
  );
}
export default Profile;
