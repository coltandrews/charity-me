//** Import Statements
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

//** Setup (define helper functions and variables here)

function CharityCard(props) {
  
  //** Destructure Props
  const { charityData } = props;

  //** State Variables

  //** Component Logic

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
          <Button size="small">Share</Button>
          <Link to={"/charity"}>
            <Button size="small">Learn More</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}
export default CharityCard;
