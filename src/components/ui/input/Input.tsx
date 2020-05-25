import React, { PureComponent } from 'react';
import cn from 'classnames';
import './input.scss';

interface Props {
  type?: string;
  label?: string;
  name: string;
  defaultValue?: string;
  value?: string;
  onChange: (name: any, value: any) => void;
  onFocus?: () => void;
  theme?: 'underline';
  customClass?: string;
}

interface State {
  value: any;
}

class Input extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      value: this.props.value,
    };
  }

  static defaultProps = {
    type: 'text',
    label: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({ value: this.props.value });
    }
  }

  render() {
    const { type, label, name, theme, customClass, onFocus } = this.props;
    const { value } = this.state;
    return (
      <label
        className={cn('ui-input', customClass, {
          [`ui-input_${theme}`]: !!theme,
        })}
      >
        {label && <span className="ui-input__label">{label}</span>}
        <input
          className="ui-input__field"
          type={type}
          name={name}
          onChange={(e) => this.change(e)}
          value={value}
          onFocus={onFocus}
        />
      </label>
    );
  }

  change = (e: any) => {
    const { onChange } = this.props;
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ value }, () => onChange(name, value));
  };
}

export default Input;
