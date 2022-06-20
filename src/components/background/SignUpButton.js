import React  from "react"
import "./signupbutton.css"

function SignUpButton (){

    var avatarIcon = require("./avatar.png");

    return(

        <div className="signupbox">
                <img
              src={avatarIcon}
              alt="Avatar of Player"
              className="avatar"
            />
             <p>
                 Sign In to Play
             </p>
             <button className="signupbutton">Sign In</button>
        </div>
    )
  


}
export default SignUpButton