import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
//** Setup (define helper functions and variables here)

function FavoritesCard(props) {
  //** Destructure Props
  const { favorite, removeFavorite } = props;
  //** State Variables

  //** Component Logic
if(!favorite) {
  return <div>Loading...</div>
}
  //** Return JSX
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ maxHeight: 200 }}>
        <CardContent>
          <Typography sx={{}} gutterBottom variant="h6" component="div">
            <h3>{favorite.name}</h3>
          </Typography>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button onClick={() => removeFavorite(favorite.ein)} size="small">
            <RemoveCircleOutlineIcon />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
export default FavoritesCard;
