import React from "react";
import "./teamFixtures.css";
import {useNavigate} from 'react-router-dom'
import playerListForEachFixture from "./playerListForEachFixture";

function TeamFixtures(props) {

  //creating an array of of all the fixtures 
/*   const teamFixturesArray = [
    {
      homeTeam : arsenal,
      awayTeam : chelsea ,
    },
    {
      homeTeam : mancity,
      awayTeam : liverpool 
    }
  ]
 */

  var matchKey = 0
  const nav = useNavigate()


  function fixtureClickedHandler() {
  /*   alert("Hteamsname +Ateamsname"); */
    console.log( props.Hteamsname + " " + props.Ateamsname);
    nav('/players')
    var home = playerListForEachFixture.homeTeamSelected

    var away = playerListForEachFixture.awayTeamSelected

  }
  ///

  var arrowImage = require("./arrow.png");

  //
  return (
    <div className="overall" key={matchKey ++}>
      <div className="background">
        <div className="singlematchbox" onClick={fixtureClickedHandler}>
          <div className="hometeam">
            <p>{props.HteamAbreviation}</p>
            <p>{props.Hteamsname}</p>
            <img src={props.HteamCrest} alt="home team" className="crest" />
          </div>

          <p className="versus">VS</p>

          <div className="awayteam">
            <img src={props.AteamCrest} alt="away team" className="crest" />
            <p>{props.Ateamsname}</p>
            <p>{props.AteamAbreviation}</p>
          </div>

          <div className="arrowdiv">
            <img
              src={arrowImage}
              alt="arrow for selecting a match"
              className="arrow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamFixtures;
