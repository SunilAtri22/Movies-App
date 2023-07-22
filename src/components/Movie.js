import React from "react";

function Movie(props){
    return(
        <div className="movie">
            <img src={props.img} alt="spider-man"/>
            <p>{props.title}</p>
            <p>Year : {props.year}</p>
        </div>
    );
}
export default Movie