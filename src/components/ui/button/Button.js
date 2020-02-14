import React from "react";
import classnames from "classnames";
import "./button.scss";

class Button extends React.Component {
  render() {
    const { customClass, text, onClick } = this.props;
    const classes = classnames({
      button: true,
      [customClass]: !!customClass
    });
    return (
      <button className={classes} onClick={onClick}>
        {text}
      </button>
    );
  }
}

export default Button;
