import React from "react";
import PropTypes from 'prop-types';

export function Card ({ data }) {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={data.cardImage} className="card-img-top" alt="..."/>
            <div className="card-body d-flex align-items-center justify-content-center flex-column">
                <h5 className="card-title text-center">{data.cardTitle}</h5>
                <p className="card-text text-center">{data.cardText}</p>
                <a href="#" className="btn btn-primary text-center">{data.cardButton}</a>
            </div>
        </div>
    )
}

Card.propTypes = {
    data: PropTypes.object,
  }