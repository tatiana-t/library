import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { updateField } from 'api/fields';
import Checkbox from 'components/ui/checkbox';
import Chip from 'components/ui/chip';
import Button from 'components/ui/button';
import './settings.scss';

interface Props {
  fields: any;
}
class Settings extends PureComponent<Props> {
  render() {
    const { fields } = this.props;
    return (
      <div>
        <div className="settings-page">
          <div className="settings-page__fields">
            <div className="settings-page__all">
              {fields.map((field) => (
                <div key={field.id}>
                  <Checkbox
                    id={field.id}
                    value={field.default}
                    label={field.label}
                    onChange={(id, value) => this.changeField(id, value, field)}
                  />
                  <Button
                    text="changeFieldName"
                    onClick={this.changeFieldName}
                  />
                </div>
              ))}
            </div>
            <div className="settings-page__selected">
              {fields.map((field) => {
                return (
                  field.default && (
                    <div key={field.id}>
                      <Chip
                        isShowRemove={true}
                        isActive={false}
                        text={field.label}
                        onClick={() =>
                          this.changeField(field.id, field.default, field)
                        }
                      />
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
  changeField = (id, value, field) => {
    updateField(field.id, { ...field, default: !value });
  };

  changeFieldName = () => {};
}

const mapStateToProps = (store) => ({
  fields: store.fields,
});

export default connect(mapStateToProps)(Settings);
