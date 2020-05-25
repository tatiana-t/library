import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from 'api/data';
import { setCurrentItem } from 'actions';
import BookshelfList from 'components/complex/bookshelfList';
import Detail from 'components/complex/detail';
import Search from 'components/complex/search';
import './app-container.scss';

interface Props {
  location?: any;
  history?: any;
  match?: any;
  dispatch: any;
  list: any[];
  filters: string[];
  fields: any;
  // current: any;
}

interface State {
  current: any;
  isCreating: boolean;
  search: string;
  list: any;
  tagsToSearch: string[];
}

class Dashboard extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      current: {
        name: '',
        author: '',
        year: '',
        comment: '',
        tags: '',
      },
      isCreating: false,
      search: '',
      tagsToSearch: [],
    };
  }

  componentDidMount(): void {
    this.setState({ list: this.props.list });
  }

  componentDidUpdate(prevProps): void {
    if (prevProps.list !== this.props.list) {
      this.setState({ list: this.props.list });
    }
  }

  render() {
    const { current, search, list, isCreating } = this.state;

    return (
      <div className="app-container">
        <div className="app-container__main">
          <div className="app-container__item app-container__item_search">
            <Search
              searchValue={search}
              onChange={this.searchUpdate}
              onTagSearch={this.onTagSearch}
            />
          </div>
          <div className="app-container__item app-container__item_list">
            <BookshelfList
              current={current}
              list={list}
              getActiveItem={this.setCurrent}
              search={search}
              searchUpdate={this.searchUpdate}
              onSearch={this.onSearch}
            />
          </div>

          <div className="app-container__item app-container__item_detail">
            {(current.name || isCreating) && <Detail isCreating={isCreating} />}
          </div>
        </div>
        <div className="detail__btn">
          <button onClick={this.onAddItem}>+</button>
        </div>
      </div>
    );
  }

  setCurrent = (id) => {
    const { list, dispatch } = this.props;
    const current = list.find((item) => item.id === id);

    this.setState({
      isCreating: false,
      current,
    });
    dispatch(setCurrentItem(current));
  };

  // setNewItem = (key, value) => {
  //   const { current } = this.state;
  //   // console.log(key, value, newItem);
  //   this.setState({
  //     current: {
  //       ...current,
  //       [key]: value,
  //     },
  //   });
  // };

  onAddItem = () => {
    const { fields, dispatch } = this.props;
    this.setState({
      isCreating: true,
    });
    const currentItem = fields.reduce((result, field) => {
      if (field.default) {
        return { ...result, [field.id]: '' };
      }
      return result;
    }, {});
    this.setState({
      isCreating: true,
    });

    dispatch(setCurrentItem(currentItem));
  };

  saveItem = (item) => {
    // addItem(item);
  };

  searchUpdate = (key, value) => {
    this.setState(
      {
        search: value,
      },
      this.onSearch
    );
  };

  onSearch = () => {
    const { list, filters } = this.props;
    const { search } = this.state;

    const filteredList = list.filter((item) => {
      return Object.keys(item).find((key) => {
        if (key === 'tags') return false;

        if (filters.length) {
          if (filters.includes(key)) {
            return item[key].toLowerCase().indexOf(search.toLowerCase()) >= 0;
          }
          return false;
        } else {
          return item[key].toLowerCase().indexOf(search.toLowerCase()) >= 0;
        }
      });
    });
    this.setState({ list: filteredList });
  };

  onTagSearch = (tagList) => {
    const { list } = this.props;
    if (!tagList.length) {
      this.setState({ list });
      return;
    }

    const filteredList = list.filter((item) =>
      tagList.find((tag) => item.tags.split(', ').includes(tag))
    );

    this.setState({ list: filteredList });
  };
}

const mapStateToProps = ({ list, filters, fields }) => {
  return {
    list,
    filters,
    fields,
  };
};

export default connect(mapStateToProps)(Dashboard);
