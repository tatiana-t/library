import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { addItem } from 'api/data';
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
  constructor(props:Props) {
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

  componentDidUpdate(prevProps:Props): void {
    if (prevProps.list.length !== this.props.list.length) {
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
            {(current.name || isCreating) && (
              <Detail
                item={current}
                onChange={this.setNewItem}
                saveItem={this.saveItem}
              />
            )}
          </div>
        </div>
        <div className="detail__btn">
          <button onClick={this.onAddItem}>+</button>
        </div>
      </div>
    );
  }

  setCurrent = (id: any) => {
    const { list, dispatch } = this.props;
    const current = list.find((item) => item.id === id);

    this.setState({
      current,
    });
    dispatch(setCurrentItem(current));
  };

  setNewItem = (key: any, value: any) => {
    const { current } = this.state;
    // console.log(key, value, newItem);
    this.setState({
      current: {
        ...current,
        [key]: value,
      },
    });
  };

  onAddItem = () => {
    this.setState({
      isCreating: true,
      current: {
        name: 'test Name',
        author: 'test Author',
        year: '1654',
        tags: 'tag1, tag2',
      },
    });
  };

  saveItem = (item: any) => {
    // addItem(item);
  };

  searchUpdate = (key: any, value: any) => {
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

  onTagSearch = (tagList: any) => {
    const { list } = this.props;
    if (!tagList.length) {
      this.setState({ list });
      return;
    }

    const filteredList = list.filter((item) =>
      tagList.find((tag: any) => item.tags.split(', ').includes(tag))
    );

    this.setState({ list: filteredList });
  };
}

// @ts-ignore
const mapStateToProps = ({ list, filters }) => {
  return {
    list,
    filters,
  };
};

export default connect(mapStateToProps)(Dashboard);
