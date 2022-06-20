import React from "react"
import "./numberofchosenscorers.css";

function NumberOfChosenScorers(){
    
     return(
         <div className="chosenbox">

             <div>
                 <span className="numberofselectedscorers">0</span> out of 7 :  <p> no award for matchday <span className="matchdaynumber">33</span>   </p>
             </div>
         </div>

     );

}

export default NumberOfChosenScorers