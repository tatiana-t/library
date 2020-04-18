import React, { PureComponent } from 'react';
import './checkbox.scss';

interface Props {
  id: string;
  label?: string;
  value: boolean;
  onChange: (id: string, value: boolean) => void;
}
class Checkbox extends PureComponent<Props> {
  render() {
    const { id, label, value, onChange } = this.props;
    return (
      <div className="ui-checkbox">
        <input
          id={id}
          type="checkbox"
          className="ui-checkbox__field"
          checked={value}
          onChange={() => onChange(id, value)}
        />
        <label htmlFor={id} className="ui-checkbox__label">
          {label}
        </label>
      </div>
    );
  }
}
export default Checkbox;
