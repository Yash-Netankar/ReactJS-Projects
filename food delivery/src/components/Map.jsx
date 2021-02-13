import React from "react";

const Map = ()=>{
    const css = {
        width:"80%",
        height:"50vh",
        display:"block"
    }
    return(
        <iframe title="map" style={css} className="mx-auto" src="https://www.google.com/maps/d/embed?mid=1w0cSJsKpYDn7ilhZ5oZHZFrVgDQmP2Iy" width="640" height="480"></iframe>
    );
}
export default Map