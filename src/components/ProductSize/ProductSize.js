import React, { Component } from "react";
import Button from "../Button/Button";

export default class ProductSize extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className="sizes">
        <h2>Sizes:</h2>
        {this.state.sizes.map((item, index) => {
          return (
            <Button
              className={this.props.className}
              key={index}
              text={item}
              onClick={(e) => this.props.handleSize(e, item)}
            />
          );
        })}
      </div>
    );
  }
}
