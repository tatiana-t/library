import React, { PureComponent } from 'react';
import './input.scss';

interface Props {
  type?: string;
  label?: string;
  name: string;
  defaultValue?: string;
  onChange: (name: any, value: any) => void;
}
interface State {
  value: string;
}
class Input extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      value: ''
    };
  }
  static defaultProps = {
    type: 'text',
    label: false
  };
  render() {
    const { type, label, name, onChange } = this.props;
    const { value } = this.state;
    return (
      <label className="ui-input">
        {label && <span className="ui-input__label">{label}</span>}
        <input
          className="ui-input__field"
          type={type}
          name={name}
          onChange={e => this.onChange(e)}
          value={value}
        />
      </label>
    );
  }
  onChange = (e: any) => {
    const { onChange } = this.props;
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ value });
    onChange(name, value);
  };
}
export default Input;
