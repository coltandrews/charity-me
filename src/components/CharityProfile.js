//** Import Statements
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ntee from "../data/ntee.json";

import { Paper } from "@mui/material";
//** Setup (define helper functions and variables here)

function CharityProfile(props) {
  //** Destructure Props
  const {} = props;
  const { ein } = useParams();
  console.log("ein", ein);

  //** State Variables
  const [currentCharity, setCurrentCharity] = useState();
  console.log(currentCharity);
  //** Component Logic
  useEffect(() => {
    const getCurrentCharity = async () => {
      try {
        const response = await fetch(
          `https://projects.propublica.org/nonprofits/api/v2/organizations/${ein}.json`,
          {}
        );
        if (!response.ok) {
          throw new Error("failed to fetch data");
        }
        const result = await response.json();
        setCurrentCharity(result.organization);
      } catch (err) {
        console.log(err);
      }
    };
    getCurrentCharity();
  }, []);
  if (!currentCharity) {
    return <div>loading...</div>;
  }

  const getDescription = (code) => {
    if (!code || !ntee[code]) {
      return "Description not Available";
    }
    return ntee[code].description;
  };
  const getTitle = (code) => {
    if (!code || !ntee[code]) {
      return "Title not Available";
    }

    return ntee[code].title;
  };
  //** Return JSX
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Paper elevation={5} sx={{ width: 400, marginTop: '50px', padding: '20px'}}>
        <h3>{currentCharity.name}</h3>
        <div>{currentCharity.city}</div>
        <div>{currentCharity.state}</div>
        <div style={{marginTop: "10px"}}><b>Organization Type: </b>{getTitle(currentCharity.ntee_code)}</div>
        <div style={{marginTop: "5px"}}><i>{getDescription(currentCharity.ntee_code)}</i></div>
      </Paper>
    </div>
  );
}
export default CharityProfile;
