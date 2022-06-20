import React from "react";
import "./matchdaybox.css";

function MatchDayBox(){
 
    var droparrow = require("./dropdow.png");

    return(
        <div className="matchdaybox">
            <p className="p">Matchday 33</p>
            <img
              src={droparrow}
              alt="arrow for selecting a matchday"
              className="droparrow"
            />



        </div>
    );

}
export default MatchDayBox