import React, { Component } from "react";

export default class Logo extends Component {
  render() {
    return (
      <div className="Logo">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
        >
          <g>
            <text
              className="logo-text"
              x="40%"
              y="65%"
              fill="#fdf6e3"
              textAnchor="middle"
            >
              Code<tspan fill="#E06C75">tributor</tspan>
            </text>
          </g>
        </svg>
      </div>
    );
  }
}