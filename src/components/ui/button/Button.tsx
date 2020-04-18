import React, {PureComponent} from "react";
import classnames from "classnames";
import "./button.scss";

interface Props {
  customClass?: string;
  text: string;
  onClick?: (e: any) => void;
}
class Button extends PureComponent<Props> {
  render() {
    const { customClass, text, onClick } = this.props;
    const classes = classnames({
      button: true,
      // [customClass]: !!customClass
    });
    return (
      <button className={classes} onClick={onClick}>
        {text}
      </button>
    );
  }
}

export default Button;
