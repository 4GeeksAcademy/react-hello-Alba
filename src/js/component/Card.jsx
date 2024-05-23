import React from "react";


const Card = (props) => {
    return (
        <div id={props.id} className="card mt-3 mx-2 mb-2" style={{width:  "25rem", height: "27rem"}}>
            <img src={props.img} className="card-img-top" alt="imagen 3D" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.parrafo}</p>
                <a href={props.linkn} className="btn btn-dark" target="blank">Saber más</a>
            </div>
        </div>

    );
};
export default Card;