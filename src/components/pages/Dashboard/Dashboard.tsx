import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getList } from 'api/data';
import { setBookList, setCurrentItem } from 'actions';
import BookshelfList from 'components/complex/bookshelfList';
import Detail from 'components/complex/detail';
import './dashboard.scss';

interface Props {
  location?: any;
  history?: any;
  match?: any;
  dispatch: any;
  list: any;
  currentItem: any;
}

interface State {
  list: any[];
  activeItem: string;
  current: any;
}

class Dashboard extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      activeItem: '',
      current: {}
    };
  }
  async componentDidMount() {
    await this.setData();
  }
  render() {
    const { list, activeItem, current } = this.state;

    return (
      <div className="dashboard">
        <div className="dashboard__list">
          <BookshelfList list={list} getActiveItem={this.setActiveItem} />
        </div>
        <div className="dashboard__detail">
          {activeItem && <Detail item={current} />}
        </div>
      </div>
    );
  }

  async setData() {
    const { dispatch } = this.props;
    const list = await getList();
    const listToState = Object.keys(list).map(item => ({
      ...list[item],
      id: item
    }));
    dispatch(setBookList(list));
    this.setState({ list: listToState });
  }

  setActiveItem = id => {
    const { dispatch } = this.props;
    const { list } = this.state;
    this.setState({ activeItem: id }, this.getActiveItem);
    // console.log(list);
    // dispatch(setBookList(list));
  };
  getActiveItem = () => {
    const { list, dispatch } = this.props;
    const { activeItem } = this.state;
    // const current = list.find(item => item === activeItem);
    const current = list[activeItem];
    this.setState({
      current
    });
    dispatch(setCurrentItem(current));
    console.log(activeItem, current);
  };
}
const mapStateToProps = state => {
  // console.log(state);
  return {
    bookList: state.list,
    activeItem: state.activeItem,
    list: state.list,
    currentItem: state.currentItem
  };
};
export default connect(mapStateToProps)(Dashboard);
