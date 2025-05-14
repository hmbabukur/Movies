import React from "react";

function Main(){
    return(
       <div className="main">
            <div className="col" id="col1">
                <h1>Your movies</h1>
                <p>Is here, you can select whatever movie you want to watch.<br/> 
                If you want to select more, just click the button.</p>
                <button type="button">More</button>
            </div>
            <div className="col">
                <div className="card" id="card1"></div>
                <div className="card" id="card2"></div>
                <div className="card" id="card3"></div>
                <div className="card" id="card4"></div>
                <div className="card" id="card5"></div>
                <div className="card" id="card6"></div>
            </div>
             
       </div>
    );
}
export default Main;