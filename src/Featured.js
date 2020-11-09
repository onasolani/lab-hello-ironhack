import React from "react";

const Featured = ({title, text, img}) => {
    return <div className="featured-box"><img src={img} alt="img"/><h4>{title}</h4><p>{text}</p></div>
    };

export default Featured;
