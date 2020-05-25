import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addTag } from 'api/tags';
import { addField, updateField } from 'api/fields';
import { addItem, updateItem } from 'api/data';
import Field from 'interfaces/fields';
import Detail from './Detail';
import { currentItem } from 'reducers/data';
import { setCurrentItem } from 'actions';

interface Props {
  currentItem: any;
  dispatch: any;
  tags: any;
  fields: any;
  isCreating: boolean;
}
interface State {
  errors: any;
  newField: Field;
}
class DetailContainer extends PureComponent<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      errors: {
        isError: false,
        name: {
          isError: false,
          value: 'а название какое?',
        },
        author: {
          isError: false,
          value: 'кто автор?',
        },
      },
      newField: {
        id: '',
        default: false,
        label: '',
      },
    };
  }
  render() {
    // console.log(this.props);
    const { currentItem, fields, isCreating } = this.props;
    const { errors, newField } = this.state;
    return (
      <Detail
        fields={fields}
        isCreating={isCreating}
        errors={errors}
        currentItem={currentItem}
        newField={newField}
        changeVal={this.changeVal}
        checkBeforeSave={this.checkBeforeSave}
        addField={this.onAddField}
        setNewField={this.setNewField}
        onChangeNewField={this.onChangeNewField}
      />
    );
  }

  getListToRender = () => {
    //TODO: динамическая отрисовка полей. возможность кастомизирования набора полей
  };

  changeVal = (name, value) => {
    const { currentItem, dispatch } = this.props;
    // const {
    //   errors,
    //   errors: { isError },
    // } = this.state;

    const itemUpd = {
      ...currentItem,
      [name]: value,
    };

    dispatch(setCurrentItem(itemUpd));
    setTimeout(this.turnOffErrors);
  };

  turnOffErrors = () => {
    const { currentItem } = this.props;
    const { errors } = this.state;
    const newErrors = Object.assign({}, errors);
    if (currentItem.name) {
      newErrors.name.isError = false;
    }
    if (currentItem.author) {
      newErrors.author.isError = false;
    }
    this.setState({
      errors: newErrors,
    });
  };

  checkBeforeSave = () => {
    const { errors } = this.state;
    const { currentItem } = this.props;
    const newErrors = Object.assign({}, errors);

    if (!currentItem.name) {
      newErrors.name.isError = true;
    } else {
      newErrors.name.isError = false;
    }
    if (!currentItem.author) {
      newErrors.author.isError = true;
    } else {
      newErrors.author.isError = false;
    }

    this.setState({
      errors: newErrors,
    });
    if (currentItem.tags) {
      this.parseTags(currentItem.tags);
    }

    if (!newErrors.name.isError && !newErrors.author.isError) {
      if (currentItem.id) {
        const itemToSave = { ...currentItem };
        delete itemToSave.id;
        updateItem(currentItem.id, itemToSave);
      } else {
        addItem(currentItem);
      }
    }
  };

  async parseTags(tagsToAdd) {
    const { tags } = this.props;
    // console.log(typeof availableTags);
    tagsToAdd.split(', ').forEach((tag) => {
      if (!tags.includes(tag)) {
        //action to push tag to the db
        addTag(tag);
      }
    });
  }

  onAddField = () => {
    const { currentItem, dispatch } = this.props;
    const { newField } = this.state;

    this.setState({ newField: { id: 'newFiled', default: false, label: '' } });
    // dispatch(setCurrentItem({ ...currentItem, [newField.id]: '' }));
  };

  saveField = () => {
    // const { isAddField } = this.state;
    const { dispatch } = this.props;

    dispatch(addField({ id: 'newFiled', default: false, title: '' }));

    this.setState({ newField: { id: '', default: false, label: '' } });
  };
  // addField();

  // onChangeDefault = (isDefault) => {
  //   const { newField } = this.state;
  //   this.setState({ newField: { ...newField, default: isDefault } });
  // };

  onChangeNewField = (name, value) => {
    console.log('name', name);
    const { newField } = this.state;
    this.setState({ newField: { ...newField, [name]: value } });
  };

  setNewField = () => {
    const { newField } = this.state;
    if (newField.label) {
      addField(newField);
    }
  };
}

const mapStateToProps = ({ tags, fields, currentItem }) => {
  return {
    tags,
    fields,
    currentItem,
  };
};

export default connect(mapStateToProps)(DetailContainer);
