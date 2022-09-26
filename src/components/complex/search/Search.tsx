import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { updateFilterFields } from 'actions/filters';
import Input from 'components/ui/input';
import Checkbox from 'components/ui/checkbox';
import TagList from 'components/complex/tagList';
import './search.scss';

interface Props {
  dispatch: any;
  onChange: (key: string, value: string) => void;
  searchValue: string;
  onTagSearch: (list: any) => void;
  fields: any;
}

interface State {
  isShowOptions: boolean;
  fields: {
    id: string;
    title: string;
    isSelected: boolean;
  }[];
}

class Search extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isShowOptions: false,
      fields: [],
    };
  }
  componentDidMount(): void {
    this.setFieldsToState();
  }

  componentDidUpdate(prevProps: Props): void {
    if (this.props.fields.length !== prevProps.fields.length) {
      this.setFieldsToState();
    }
  }

  render() {
    const { searchValue, onChange, onTagSearch } = this.props;
    const { fields } = this.state;
    return (
      <div className="cx-search">
        <div className="cx-search__item">
          <Input
            value={searchValue}
            customClass="cx-search__input"
            name="search"
            onChange={onChange}
          />
          {/* <button className="cx-search__btn" onClick={this.onSearch}></button>*/}
        </div>
        <div className="cx-search__item">
          <ul className="cx-search__list">
            {fields.map(({ id, title, isSelected }) => (
              <li className="cx-search__list-item" key={id}>
                <Checkbox
                  id={id}
                  label={title}
                  value={isSelected}
                  onChange={this.changeField}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="cx-search__item">
          <TagList onSelectItem={onTagSearch} />
        </div>
      </div>
    );
  }

  setFieldsToState = () => {
    const { fields } = this.props;

    const fieldsToState = fields.map((item: any) => ({
      ...item,
      isSelected: false,
    }));

    this.setState({ fields: fieldsToState });
  };

  changeField = (id: any, value: any) => {
    const { fields } = this.state;
    const changedFields = fields.map((field) => {
      if (field.id === id) {
        return {
          ...field,
          isSelected: !value,
        };
      }
      return field;
    });
    this.setState(
      {
        fields: [...changedFields],
      },
      this.setFiltersToStore
    );
  };

  setFiltersToStore = () => {
    const { dispatch } = this.props;
    const { fields } = this.state;
    const filters = fields.reduce((result: string[], field): string[] => {
      if (field.isSelected) {
        return [...result, field.id];
      }
      return result;
    }, []);
    dispatch(updateFilterFields(filters));
  };
}

const mapStateToProps = (store: any) => ({
  fields: store.fields,
});
export default connect(mapStateToProps)(Search);
