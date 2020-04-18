import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getList, addItem } from 'api/data';
import { getTagList } from 'api/tags';
import {
  setBookList,
  setCurrentItem,
  setTagList,
  setAvailableFields,
} from 'actions';
import BookshelfList from 'components/complex/bookshelfList';
import Detail from 'components/complex/detail';
import Search from 'components/complex/search';
import './dashboard.scss';

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
  async componentDidMount() {
    const { dispatch } = this.props;
    await this.setData();
    await this.setTags();
    dispatch(setAvailableFields());
  }
  render() {
    const { current, search, isCreating, list } = this.state;

    return (
      <div className="dashboard">
        <div className="dashboard__main">
          <div className="dashboard__item dashboard__item_search">
            <Search
              searchValue={search}
              onChange={this.searchUpdate}
              onTagSearch={this.onTagSearch}
            />
          </div>
          <div className="dashboard__item dashboard__item_list">
            <BookshelfList
              current={current}
              list={list}
              getActiveItem={this.setCurrent}
              search={search}
              searchUpdate={this.searchUpdate}
              onSearch={this.onSearch}
            />
          </div>

          <div className="dashboard__item dashboard__item_detail">
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

  async setData() {
    const { dispatch } = this.props;
    const list = await getList();
    const listToState = Object.keys(list).map((item) => ({
      id: item,
      ...list[item],
    }));

    dispatch(setBookList(listToState));
    this.setState({ list: listToState });
  }

  async setTags() {
    const { dispatch } = this.props;
    const tagList = await getTagList();
    const tagsToStore = Object.keys(tagList).map((tag) => tagList[tag]);
    dispatch(setTagList(tagsToStore));
  }

  setCurrent = (id) => {
    const { list, dispatch } = this.props;
    const current = list.find((item) => item.id === id);

    this.setState({
      current,
    });
    dispatch(setCurrentItem(current));
  };

  setNewItem = (key, value) => {
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
        year: '',
        tags: 'tag1, tag2',
      },
    });
  };

  saveItem = (item) => {
    addItem(item);
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

const mapStateToProps = ({ list, filters }) => {
  return {
    list,
    filters,
  };
};

export default connect(mapStateToProps)(Dashboard);
