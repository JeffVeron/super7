import React from "react";
import Banner from "../banner/Banner";
import MatchDayBox from "../MatchDayBox";
import ChoosePrompt from "../ChoosePrompt";
import NumberOfChosenScorers from "../NumberOFChosenScorers";
import TeamFixtures from "../TeamFixtures";

import "./background.css";
import TermsAndConditionsButton from "../TermsAndConditionsButton";
import SignUpButton from "./SignUpButton";
import DisplayPlayers from "../userChoise/DisplayPlayers";
import MatchdayList from "../MatchdayList";
import teamData from "./TeamData";
import teamNumbers from "./teamNumbers";
import palacePlayerData from "../players/palace/CrystalPalace";

import fixtures from "./fixtures";

function Background() {
  ////defining the teams as constant with numbers
/*   const arsenal = 0,
    brentford = 1,
    brighton = 2,
    burnley = 3,
    chelsea = 4,
    everton = 5,
    leeds = 6,
    leicester = 7,
    liverpool = 8,
    mancity = 9,
    manutd = 10,
    newcastle = 11,
    norwich = 12,
    palace = 13,
    southampton = 14,
    tottenham = 15,
    villa = 16,
    watford = 17,
    westham = 18,
    wolves = 19; */

  //all the images of the 20 teams in EPL
  /*   const chelseaCrest = require("../teams/chelsea.png");
  const arsenalCrest = require("../teams/arsenal.png");
  const newcastleCrest = require("../teams/newcastle.png");
  const brentfordCrest = require("../teams/brentford.jpg");
  const brightonCrest = require("../teams/brighton.png");
  const burnleyCrest = require("../teams/burnley.png");
  const evertonCrest = require("../teams/everton.png");
  const leedsCrest = require("../teams/leeds.png");
  const leicesterCrest = require("../teams/leicester.png");
  const liverpoolCrest = require("../teams/liverpoolfc.png");
  const mancityCrest = require("../teams/mancity.png");
  const manUCrest = require("../teams/manutd.png");
  const norwichCrest = require("../teams/norwich.png");
  const palaceCrest = require("../teams/palace.png");
  const southamptonCrest = require("../teams/southampton.png");
  const tottenhamCrest = require("../teams/tottenham.png");
  const watfordCrest = require("../teams/watford.png");
  const westhamCrest = require("../teams/westham.png");
  const wolvesCrest = require("../teams/Wolves.png");
  const astonvillaCrest = require("../teams/villa.png");
 */

  //end of EPL teams
/*  function hoot(){
   console.log(teamNumbers.burnley)
  /*  console.log(palacePlayerData.playerId) */
 /* } */ 
  // some global variables

  var teamname, teamCrest, teamAbrev  ;

  //creating team json for all premier league teams
  /* 
  const teamData = {
    keys: 0,
    teams: [
      {
        teamName: "Arsenal",
        id: 1,
        abrev: "ARS",
        crest: arsenalCrest,
      },

      {
        teamName: "Brentford",
        id: 2,
        abrev: "BRE",
        crest: brentfordCrest,
      },

      {
        teamName: "Brighton",
        id: 3,
        abrev: "BRI",
        crest: brightonCrest,
      },

      {
        teamName: "Burnley",
        id: 4,
        abrev: "BUR",
        crest: burnleyCrest,
      },

      {
        teamName: "Chelsea",
        id: 5,
        abrev: "CHE",
        crest: chelseaCrest,
      },

      {
        teamName: "Everton",
        id: 6,
        abrev: "EVE",
        crest: evertonCrest,
      },

      {
        teamName: "Leeds",
        id: 7,
        abrev: "LEE",
        crest: leedsCrest,
      },

      {
        teamName: "Leicester",
        id: 8,
        abrev: "LEI",
        crest: leicesterCrest,
      },

      {
        teamName: "Liverpool",
        id: 9,
        abrev: "LIV",
        crest: liverpoolCrest,
      },

      {
        teamName: "Man City",
        id: 10,
        abrev: "MCI",
        crest: mancityCrest,
      },
      {
        teamName: "Man United",
        id: 11,
        abrev: "MUN",
        crest: manUCrest,
      },

      {
        teamName: "Newcastle",
        id: 12,
        abrev: "NEW",
        crest: newcastleCrest,
      },

      {
        teamName: "Norwich",
        id: 13,
        abrev: "NOR",
        crest: norwichCrest,
      },

      {
        teamName: "Cryst Palace",
        id: 14,
        abrev: "CRY",
        crest: palaceCrest,
      },

      {
        teamName: "Southampton",
        id: 15,
        abrev: "SOU",
        crest: southamptonCrest,
      },

      {
        teamName: "Tottenham",
        id: 16,
        abrev: "TOT",
        crest: tottenhamCrest,
      },

      {
        teamName: "Aston Villa",
        id: 17,
        abrev: "AVL",
        crest: astonvillaCrest,
      },

      {
        teamName: "Watford",
        id: 18,
        abrev: "WAT",
        crest: watfordCrest,
      },

      {
        teamName: "Westham",
        id: 19,
        abrev: "WHU",
        crest: westhamCrest,
      },

      {
        teamName: "Wolves",
        id: 20,
        abrev: "WOL",
        crest: wolvesCrest,
      },
    ],
  }; */

  //

  //defining values for the team data objects

  /* var teamname = teamData.teams[16].teamName
var teamId  = teamData.teams[19].id
var teamCrest = teamData.teams[19].crest
var teamAbrev = teamData.teams[19].abrev */

  ////

  /* create a function to take in take in all the three values 
together and return them as one 
teamId
teamCrest
teamAbrev */

  /* function nameOfteam(hometeamName, awayTeamName) {
    let hteamname = teamData.teams[hometeamName].teamName,
       ateamname = teamData.teams[awayTeamName].teamName; 
    return {
      ateamname,
       hteamname, 
    };
    teamCrest = teamData.teams[teamNumber].crest
         teamAbrev = teamData.teams[teamNumber].abrev  
  }

  */

  function teamCrestPic(tNum) {
    
    return (teamCrest = teamData[tNum].crest);
  }

  function abreviation(tNum) {
    return (teamAbrev = teamData[tNum].abrev);
  }

  function nameOfteam(tNum) {
    return (teamname = teamData[tNum].teamName);
  }

  

  function shoot() {
    return alert("Great Shot!");
    
  }

  //////////////////////////////
  /////////////////////////////
  //return method for the background
  ///////////////////////////////

  return (
    <div>
      <div className="background" /* onClick = {hoot} */ >
        <Banner className="banner" />

        <MatchDayBox />
        <ChoosePrompt />
        <SignUpButton />

        <TeamFixtures
          className="fixtures"
          /// single match data

          //home team
          HteamAbreviation={abreviation(fixtures[0].homeTeam)}
          HteamCrest={teamCrestPic(fixtures[0].homeTeam)}
          Hteamsname={nameOfteam(fixtures[0].homeTeam)}
          // away team
          AteamAbreviation={abreviation(fixtures[0].awayTeam)}
          AteamCrest={teamCrestPic(fixtures[0].awayTeam)}
          Ateamsname={nameOfteam(fixtures[0].awayTeam)}
        />  
       <TeamFixtures
          className="fixtures"
          /* onClick={shoot}  */
          ///single match data

          //home team data
          hteamAbreviation={abreviation(fixtures[1].homeTeam)}
          HteamCrest={teamCrestPic(fixtures[1].homeTeam)}
          Hteamsname={nameOfteam(fixtures[1].homeTeam)}
          ///Away Team DAta
          AteamAbreviation={abreviation(fixtures[1].awayTeam)}
          AteamCrest={teamCrestPic(fixtures[1].awayTeam)}
          Ateamsname={nameOfteam(fixtures[1].awayTeam)}
        />
        <TeamFixtures
          className="fixtures"
          ///single match data

          //home team data
          HteamAbreviation={abreviation( fixtures[2].homeTeam )}
          HteamCrest={teamCrestPic(fixtures[2].homeTeam)}
          Hteamsname={nameOfteam(fixtures[2].homeTeam)}
          // away team
          AteamAbreviation={abreviation(fixtures[2].awayTeam)}
          AteamCrest={teamCrestPic(fixtures[2].awayTeam)}
          Ateamsname={nameOfteam(fixtures[2].awayTeam)}
        />
        <TeamFixtures
          className="fixtures"
          ///single match
          HteamAbreviation={abreviation(fixtures[3].homeTeam)}
          HteamCrest={teamCrestPic(fixtures[3].homeTeam)}
          Hteamsname={nameOfteam(fixtures[3].homeTeam)}
          //away team
          AteamAbreviation={abreviation(fixtures[3].awayTeam)}
          AteamCrest={teamCrestPic(fixtures[3].awayTeam)}
          Ateamsname={nameOfteam(fixtures[3].awayTeam)}
        />
        <TeamFixtures
          className="fixtures"
          ///single match data

          //home team data

          HteamAbreviation={abreviation(fixtures[4].homeTeam)}
          HteamCrest={teamCrestPic(fixtures[4].homeTeam)}
          Hteamsname={nameOfteam(fixtures[4].homeTeam)}
          // away team data  

          AteamAbreviation={abreviation(fixtures[4].awayTeam)}
          AteamCrest={teamCrestPic(fixtures[4].awayTeam)}
          Ateamsname={nameOfteam(fixtures[4].awayTeam)}
        />
        <TeamFixtures
          className="fixtures"
          //home team data
          HteamAbreviation={abreviation(fixtures[5].homeTeam)}
          HteamCrest={teamCrestPic(fixtures[5].homeTeam)}
          Hteamsname={nameOfteam(fixtures[5].homeTeam)}
          // away team data  
          AteamAbreviation={abreviation(fixtures[5].awayTeam)}
          AteamCrest={teamCrestPic(fixtures[5].awayTeam)}
          Ateamsname={nameOfteam(fixtures[5].awayTeam)}
        />
        <TeamFixtures
          className="fixtures"
          // home team data
          HteamAbreviation={abreviation(fixtures[6].homeTeam)}
          HteamCrest={teamCrestPic(fixtures[6].homeTeam)}
          Hteamsname={nameOfteam(fixtures[6].homeTeam)}
          // away team data  

          AteamAbreviation={abreviation(fixtures[6].awayTeam)}
          AteamCrest={teamCrestPic(fixtures[6].awayTeam)}
          Ateamsname={nameOfteam(fixtures[6].awayTeam)}
        />
        <TeamFixtures
          className="fixtures"
          // home team data
          HteamAbreviation={abreviation(fixtures[7].homeTeam)}
          HteamCrest={teamCrestPic(fixtures[7].homeTeam)}
          Hteamsname={nameOfteam(fixtures[7].homeTeam)}
          // away team data  
          AteamAbreviation={abreviation(fixtures[7].awayTeam)}
          AteamCrest={teamCrestPic(fixtures[7].awayTeam)}
          Ateamsname={nameOfteam(fixtures[7].awayTeam)}
        />
        <TeamFixtures
          className="fixtures"
          // home team data
          HteamAbreviation={abreviation(fixtures[8].homeTeam)}
          HteamCrest={teamCrestPic(fixtures[8].homeTeam)}
          Hteamsname={nameOfteam(fixtures[8].homeTeam)}
          // away team data  
          AteamAbreviation={abreviation(fixtures[8].awayTeam)}
          AteamCrest={teamCrestPic(fixtures[8].awayTeam)}
          Ateamsname={nameOfteam(fixtures[8].awayTeam)}
        />
        <TeamFixtures
          className="fixtures"
          // home team data
          HteamAbreviation={abreviation(fixtures[9].homeTeam)}
          HteamCrest={teamCrestPic(fixtures[9].homeTeam)}
          Hteamsname={nameOfteam(fixtures[9].homeTeam)}
          // away team data  
          AteamAbreviation={abreviation(fixtures[9].awayTeam)}
          AteamCrest={teamCrestPic(fixtures[9].awayTeam)}
          Ateamsname={nameOfteam(fixtures[9].awayTeam)}
        />      

        <NumberOfChosenScorers />

        <DisplayPlayers />
        <TermsAndConditionsButton />
        <SignUpButton />
        <MatchdayList />
      </div>
    </div>
  );
}

export default Background;
