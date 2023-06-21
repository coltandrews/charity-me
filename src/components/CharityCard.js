//** Import Statements
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

import { useState } from "react";

//** Setup (define helper functions and variables here)

function CharityCard(props) {
  //** Destructure Props
  const { charityData } = props;

  const setFavorites = (favorites) => {
    // getting stored value
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const getFavorites = () => {
    // getting stored value
    const saved = localStorage.getItem("favorites");
    if (!saved) {
      return [];
    }
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  };
  //** State Variables

  //** Component Logic
  const addToList = () => {
    const favorites = getFavorites();
    favorites.push({
      name: charityData.name,
      ein: charityData.ein,
      city: charityData.city,
      state: charityData.state,
    });
    setFavorites(favorites);
    console.log(favorites);
  };
  //** Return JSX
  return (
    <div>
      <Card sx={{ maxHeight: 200 }}>
        <CardContent>
          <Typography
            sx={{ maxHeight: 70 }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {charityData.name}
          </Typography>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button onClick={addToList} size="small">
            <AddCircleOutlineRoundedIcon />
          </Button>
          <Link to={`/charity/${charityData.ein}`}>
            <Button size="small">Learn More</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}
export default CharityCard;
