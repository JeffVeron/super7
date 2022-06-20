import React   from "react";
import "./displayplayers.css";

// importing all the players from the EPL
import arsenalPlayerData from "../players/arsenal/Arsenal";
import chelseaPlayerData from "../players/chelsea/Chelsea";
import brentfordPlayerData from "../players/brentford/Brentford";
import brightonPlayerData from "../players/brighton/Brighton";
import burnleyPlayerData from "../players/burnley/Burnley";
import evertonPlayerData from "../players/everton/Everton";
import leedsPlayerData from "../players/leeds/Leeds";
import leicesterPlayerData from "../players/leicester/Leicester";
import liverpoolPlayerData from "../players/liverpool/Liverpool";
import manCityPlayerData from "../players/man city/ManCity";
import manUnitedPlayerData from "../players/man u/ManUnited";
import newCastlePlayerData from "../players/new castle/NewCastle";
import palacePlayerData from "../players/palace/CrystalPalace";
import southamptonPlayerData from "../players/southampton/Southampton";
import tottenhamPlayerData from "../players/tottenham/Tottenham";
import villaPlayerData from "../players/villa/Astonvilla";
import westhamPlayerData from "../players/westham/Westham";
import wolvesplayerData from "../players/wolves/Wolverhampton";
// end of player imports

import teamData from "../background/TeamData";
import fixtures from "../background/fixtures";
import { useState } from "react";

function DisplayPlayers() {
  var hometeamName, hometeamCrest, awayteamName, awayteamCrest;
  //
  const arsenal = "ARSENAL",
    chelsea = "CHELSEA";


/*     // Self-invoking function
( () => {
  // do something here
})()
Can also be written as:
( function() {
  // do something here
})() */

    var homeTeamPlayers;
 /*    var tNumber */
    
           tNumber =fixtures[4].id
                                           
                                              switch(tNumber){
                                                case fixtures[0].id :  (homeTeamPlayers = arsenalPlayerData );
                                                break ;
                                           
                                                case fixtures[1].id : homeTeamPlayers =brentfordPlayerData;
                                                break ;
                                           
                                                case fixtures[2].id : homeTeamPlayers =brightonPlayerData;
                                                break ;
                                           
                                                case fixtures[3].id : homeTeamPlayers =burnleyPlayerData;
                                                break;
                                           
                                                case fixtures[4].id :homeTeamPlayers =chelseaPlayerData ;
                                                break;
                                           
                                                case fixtures[5].id : homeTeamPlayers = evertonPlayerData ;
                                                break 
                                           
                                                case fixtures[6].id :  homeTeamPlayers = leedsPlayerData
                                                break 
                                           
                                                case fixtures[7].id : homeTeamPlayers = leicesterPlayerData
                                                break
                                           
                                                case fixtures[8].id :  homeTeamPlayers = liverpoolPlayerData
                                                break 
                                           
                                                case fixtures[9].id :  homeTeamPlayers = manCityPlayerData
                                                break 
                                           
                                                case fixtures[10].id : homeTeamPlayers = manUnitedPlayerData
                                                break
                                           
                                                case fixtures[11].id : homeTeamPlayers = newCastlePlayerData
                                                break
                                           
                                                case fixtures[12].id :  homeTeamPlayers = ''
                                                break
                                                
                                                case fixtures[13].id :  homeTeamPlayers = palacePlayerData
                                                break
                                           
                                                case fixtures[14].id : homeTeamPlayers = southamptonPlayerData
                                                break
                                           
                                           
                                                case fixtures[15].id  : homeTeamPlayers = tottenhamPlayerData
                                                break
                                           
                                                case fixtures[16].id : homeTeamPlayers = villaPlayerData
                                                break
                                           
                                                case fixtures[17].id : homeTeamPlayers = ''
                                                break
                                           
                                                case fixtures[18].id : homeTeamPlayers = westhamPlayerData
                                                break
                                           
                                                case fixtures[19].id : homeTeamPlayers = wolvesplayerData
                                                break 
                                                
                                                default : homeTeamPlayers = ''
                                                
                                           
                                           
                                                //end of the switch
                                              }
                                              const [ tNumber,settNumber]= useState( tNumber ) 


  function homeTName(teamNumber) {
    
   var tN = teamNumber
   settNumber = teamData[tN]
  /*  tNumber = teamData[tN] */

  

    return (
      hometeamName = teamData[teamNumber].teamName )
      
      
      
   
   
 
  }

  function awayTName(teamNumber) {
    return (awayteamName = teamData[teamNumber].teamName);
  }

  function hometeamCrest(teamNumber) {
    return (
      hometeamCrest = teamData[teamNumber].crest

      );
  }
  function awayteamCrest(teamNumber) {
    return (awayteamCrest = teamData[teamNumber].crest);
  }

  var hometeam = arsenal,
    awayteam = chelsea;///
    ///trying to write a function that sets the 
    //home and away teams

   
   /*    if(fixtures[0].homeTeam==teamData[0].id)
      homeTeamPlayers = arsenalPlayerData */
    
     
                                 
                                /* if(tNumber
                                  ===fixtures[13].id){
                                    
                                  }else if(tNumber
                                    ===fixtures[14].id){
                                      homeTeamPlayers = southamptonPlayerData
                                    }else if(tNumber
                                      ===fixtures[15].id){
                                        homeTeamPlayers = tottenhamPlayerData
                                      }else if(tNumber
                                        ===fixtures[16].id){
                                          homeTeamPlayers = villaPlayerData
                                        }else if(tNumber
                                          ===fixtures[17].id){
                                            homeTeamPlayers = ' '
                                          }else if(tNumber
                                            ===fixtures[18].id){
                                              homeTeamPlayers= westhamPlayerData
                                            }else if(tNumber
                                              ===fixtures[19].id){
                                                homeTeamPlayers = wolvesplayerData
                                              } */
   
                                          
 
 
 
 
                                              
                                           
                                    

  var /* homeTeamPlayers = leicesterPlayerData, */
    awayTeamPlayers = wolvesplayerData;

    
    // the key below is for the single player div
  var key = 1;

  return (
    <div className="displayPlayersBackground">
      {/*   <p>Playe Name :{arsenalPlayerData[10].playerName} </p>
        <p>Player Position: {arsenalPlayerData[10].playerPosition} </p>
        <p>Player Country : {arsenalPlayerData[10].playercountry} </p>
        <p>
          Image of player:{" "}
          <img src={arsenalPlayerData[10].playerImage} alt="player profile" />{" "}
        </p> */}

      <div className="hometeamplayers">
        {/* Home Team  list of players*/}

        <p className="team-name">{homeTName(7)}</p>
        <img alt="Team logo" src={hometeamCrest(7)} className="team-crest" />

        {homeTeamPlayers.map((e) => {
          return (
            <div className="singlePlayer" key={key++}>
              <p className="player-name"> {e.playerName} </p>
              <p>{e.playerPosition} </p>
              <p>{e.playerCountry} </p>

              <img
                src={e.playerImage}
                className="player"
                alt="player profile"
              />
            </div>
          );
        })}
      </div>

      <div className="awayteamplayers">
        <p className="team-name"> {awayTName(5)}</p>
        <img alt="Team logo" src={awayteamCrest(5)} className="team-crest" />

        {/* Away Team player list */}
        {awayTeamPlayers.map((e) => {
          return (
            <div className="singlePlayer" key={key++}>
              <p className="player-name">{e.playerName} </p>
              <p> {e.playerPosition} </p>
              <p> {e.playerCountry} </p>
              <img
                src={e.playerImage}
                className="player"
                alt="player profile"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default DisplayPlayers;
