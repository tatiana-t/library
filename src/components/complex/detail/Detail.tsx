import React, { PureComponent } from 'react';

import { updateField } from 'api/fields';
import Field from 'interfaces/fields';
import Input from 'components/ui/input';
import Checkbox from 'components/ui/checkbox';
import Button from 'components/ui/button';
import './detail.scss';

interface Props {
  tags?: any;
  fields: any;
  isCreating: boolean;
  errors: any;
  currentItem: any;
  changeVal: (name: string, val: string) => void;
  onChangeNewField: (name: string, val: string | boolean) => void;
  checkBeforeSave: (item) => void;
  setNewField: () => void;
  addField: (field) => void;
  newField: Field;
}

class Detail extends PureComponent<Props> {
  render() {
    // console.log(this.props);
    const {
      fields,
      errors,
      changeVal,
      isCreating,
      currentItem,
      newField,
      addField,
      checkBeforeSave,
      setNewField,
      onChangeNewField,
    } = this.props;

    return (
      <div className="detail">
        {isCreating
          ? Object.keys(currentItem).map((field) => {
              console.log('field', field);
              return (
                <div className="detail__item" key={field}>
                  <Input
                    name={field}
                    onChange={changeVal}
                    value={currentItem[field]}
                    label={
                      fields.find((itemField) => field === itemField.id).label
                    }
                  />
                  {errors[field] && errors[field].isError && (
                    <span>{errors[field].value}</span>
                  )}
                </div>
              );
            })
          : Object.keys(currentItem).map((itemField) => {
              if (itemField !== 'id') {
                return (
                  <div className="detail__item" key={itemField}>
                    <Input
                      name={fields.find((field) => field.id === itemField).id}
                      onChange={changeVal}
                      value={currentItem[itemField]}
                      label={
                        fields.find((field) => field.id === itemField).label
                      }
                    />
                    {errors[itemField] && errors[itemField].isError && (
                      <span>{errors[itemField].value}</span>
                    )}
                  </div>
                );
              } else {
                return null;
              }
            })}

        {newField.id && (
          <div className="detail__item">
            <Checkbox
              id="newField"
              value={newField.default}
              onChange={(id, value) => onChangeNewField('default', !value)}
              label="is this field is default field?"
            />

            <Input
              name="label"
              onChange={onChangeNewField}
              value={newField.label}
              label="new field name"
            />
            <Button text="ready!" onClick={setNewField} />
          </div>
        )}
        <div className="detail__item">
          <button onClick={addField}>Добавить поле</button>
        </div>
        <div className="detail__item">
          <button onClick={checkBeforeSave}>Save</button>
        </div>
      </div>
    );
  }

  setNewField = (id, value) => {
    // updateField(id, value);
  };
  // addField = (filed) => {
  //   const { addField } = this.props;
  //   this.setState({ isAddField: true });
  //   addField(filed);
  // };
}
export default Detail;
