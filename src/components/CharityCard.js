//** Import Statements
import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import ntee from '../data/ntee.json'

//** Setup (define helper functions and variables here)

function CharityCard(props) {
  //** Destructure Props
  const { charityData, addFavorite, isFavorite, removeFavorite } = props;

  const [imFavorite, setImFavorite] = useState(isFavorite(charityData));
  //** State Variables

  //** Component Logic
  const getDescription = (code) => {
    if (!code || !ntee[code]) {
      return "Description not Available";
    }
    return ntee[code].description;
  };
  const getTitle = (code) => {
    if (!code || !ntee[code]) {
      return <i>Category Unavailable</i>;
    }

    return ntee[code].title;
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
          <Typography variant="body2" color="text.secondary">
            {getTitle(charityData.ntee_code)}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          {imFavorite && (
            <Button
              onClick={() => {
                removeFavorite(charityData);
                setImFavorite(false);
              }}
              size="small"
            >
              <FavoriteIcon />
            </Button>
          )}
          {!imFavorite && (
            <Button
              onClick={() => {
                addFavorite(charityData);
                setImFavorite(true);
              }}
              size="small"
            >
              <FavoriteBorderIcon />
            </Button>
          )}
          <Link to={`/charity/${charityData.ein}`}>
            <Button size="small">Learn More</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}
export default CharityCard;
