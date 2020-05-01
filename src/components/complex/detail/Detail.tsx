import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addTag } from 'api/tags';
import { addField } from 'api/fields';
import { updateItem } from 'api/data';
import Input from 'components/ui/input';
import './detail.scss';

interface Props {
  item?: any;
  dispatch: any;
  list?: any;
  tags: any;
  onChange: (key, value) => void;
  saveItem: (item: any) => void;
}
interface State {
  errors: any;
}
class Detail extends PureComponent<Props, State> {
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
    };
  }
  render() {
    // console.log(this.props);
    const { item } = this.props;
    const { errors } = this.state;
    return (
      <div className="detail">
        {Object.keys(item).map((key) =>
          key === 'id' ? null : (
            <div className="detail__item" key={key}>
              <Input
                name={key}
                onChange={this.changeVal}
                value={item[key]}
                label={key}
              />
              {errors[key] && errors[key].isError && (
                <span>{errors[key].value}</span>
              )}
            </div>
          )
        )}
        <div className="detail__item">
          <button onClick={() => addField('testField')}>Добавить поле</button>
        </div>
        <div className="detail__item">
          <button onClick={this.checkBeforeSave}>Save</button>
        </div>
      </div>
    );
  }

  getListToRender = () => {
    //TODO: динамическая отрисовка полей. возможность кастомизирования набора полей
  };
  changeVal = (name, value) => {
    const { onChange } = this.props;
    // const {
    //   errors,
    //   errors: { isError },
    // } = this.state;

    onChange(name, value);
    setTimeout(this.turnOffErrors);
  };
  turnOffErrors = () => {
    const { item } = this.props;
    const { errors } = this.state;
    const newErrors = Object.assign({}, errors);
    if (item.name) {
      newErrors.name.isError = false;
    }
    if (item.author) {
      newErrors.author.isError = false;
    }
    this.setState({
      errors: newErrors,
    });
  };
  checkBeforeSave = () => {
    const { errors } = this.state;
    const { saveItem, item } = this.props;
    const newErrors = Object.assign({}, errors);

    if (!item.name) {
      newErrors.name.isError = true;
    } else {
      newErrors.name.isError = false;
    }
    if (!item.author) {
      newErrors.author.isError = true;
    } else {
      newErrors.author.isError = false;
    }

    this.setState({
      errors: newErrors,
    });
    if (item.tags) {
      this.parseTags(item.tags);
    }

    if (!newErrors.name.isError && !newErrors.author.isError) {
      if (item.id) {
        updateItem(item.id, item);
      } else {
        saveItem(item);
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
  // addField = (title) => {
  //   addField();
  // };
}

const mapStateToProps = ({ list, tags }) => {
  return {
    list,
    tags,
  };
};

export default connect(mapStateToProps)(Detail);
