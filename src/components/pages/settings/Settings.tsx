import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Checkbox from 'components/ui/checkbox';
import Chip from 'components/ui/chip';
import './settings.scss';

interface Props {
  availableFields: any;
}
class Settings extends PureComponent<Props> {
  render() {
    const { availableFields } = this.props;
    return (
      <div>
        <div className="">settings</div>
        <div className="settings-page">
          <div className="settings-page__fields">
            <div className="settings-page__all">
              {availableFields.map((field) => (
                <div key={field.id}>
                  <Checkbox
                    id={field.id}
                    value={field.default}
                    label={field.title}
                    onChange={() => {}}
                  />
                </div>
              ))}
            </div>
            <div className="settings-page__selected">
              {availableFields.map((field) => {
                return (
                  field.default && (
                    <div key={field.id}>
                      <Chip
                        isShowRemove={true}
                        isActive={false}
                        text={field.title}
                        onClick={() => {}}
                      />
                    </div>
                  )
                );
              })}
            </div>
          </div>
          отмечание в левом столбике - появление в правом удаление в правом
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  availableFields: store.availableFields,
});

export default connect(mapStateToProps)(Settings);
