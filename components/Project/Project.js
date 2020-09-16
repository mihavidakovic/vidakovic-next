import { useState, useEffect } from 'react';

export default function Project(props) {
  if (props.data.temp) {
    return (
      <div className="project project__temp">
        <div className="card">
          <span>TBA</span>
        </div>
      </div>
    )
  } else {
    return (
      <div className="project">
        <div className="card" style={{"backgroundImage": "url(" + props.data.image + ")"}}>
          <div className="card__type">
            <span>{props.data.type}</span>
          </div>
        </div>
      </div>
    )
  }
}
