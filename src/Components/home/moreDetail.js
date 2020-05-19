import React, { Component } from "react";
import "./moreDetail.css";

class Detail extends Component {
  render() {
    return (
      <div className="detail">
        <div>
          <img src={this.props.el.image} className="imgDetail" alt="" /> <br />
        </div>
        <div className="detailDescription">
          <h2>{this.props.el.name}</h2> <br />
          <p className="Description">{this.props.el.description}</p> <br />
          <h2>{this.props.el.rating}</h2> <br />
        </div>
      </div>
    );
  }
}
export default Detail;
