import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Input from 'components/ui/input';
import Chip from 'components/ui/chip';
import './tagList.scss';

interface Props {
  list: any;
  onSelectItem: (list) => void;
}

interface State {
  list: { id: string; text: string; isActive: boolean }[];
  // suggestList: any[];
  searchTagInput: string;
  // suggestListHeight: number;
}

class TagList extends PureComponent<Props, State> {
  private suggestListEl;
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      // suggestList: [],
      searchTagInput: '',
      // suggestListHeight: 0,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.list !== this.props.list) {
      this.setListToState();
    }
  }

  render() {
    const { list, searchTagInput } = this.state;
    return (
      <div className="cx-tag-list">
        <div className="cx-tag-list__search">
          <Input
            customClass="cx-tag-list__field"
            name="cx-tag-list-search"
            value={searchTagInput}
            onChange={this.searchTag}
          />
          {/* <div
            className="cx-tag-list__wrap"
            style={{ height: `${suggestListHeight}px` }}
          >
            {suggestList.length > 0 && (
              <ul
                className="cx-tag-list__suggest-list"
                ref={(el) => (this.suggestListEl = el)}
              >
                {suggestList.map((item) => (
                  <li key={item} className="cx-tag-list__suggest-item">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>*/}
        </div>
        <ul className="cx-tag-list__inner">
          {list.map(({ text, isActive, id }) => (
            <li className="cx-tag-list__item" key={text}>
              <Chip
                text={text}
                isShowRemove={false}
                onClick={() => this.onSelect(id)}
                isActive={isActive}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  setListToState = (checkedList?) => {
    const { list } = this.props;
    // const listTo = checkedList ? checkedList : list;
    // console.log(checkedList);
    const listToState = list.map((item) => ({
      id: item,
      text: item,
      isActive: this.setActive(checkedList, item),
    }));
    this.setState({ list: listToState });
  };

  setActive = (list, id) => {
    if (list) {
      const isActiveItem = list.find((tag) => tag.id === id);
      return isActiveItem ? isActiveItem.isActive : false;
    }
    return false;
  };

  onSelect = (id) => {
    const { onSelectItem } = this.props;
    const { list } = this.state;
    const newList = list.map((item) => {
      if (item.id === id) {
        return { ...item, isActive: !item.isActive };
      }
      return item;
    });
    const stringToSearch = newList.reduce(
      (result: string[], item): string[] => {
        if (item.isActive) {
          return [...result, item.text];
        }
        return result;
      },
      []
    );
    this.setState({ list: newList });
    onSelectItem(stringToSearch);
  };

  searchTag = (name, value) => {
    if (!value) {
      // this.setState({ suggestList: [], suggestListHeight: 0 });
      this.setListToState(this.state.list);
      return;
    }
    const { list } = this.state;
    const suggestList = list.filter(({ text }) => text.indexOf(value) > -1);

    this.setState({ list: suggestList, searchTagInput: value });
  };

  setSuggestListHeight = () => {
    // console.log(this.suggestListEl);
    interface nodeItem {
      offsetHeight: number;
    }
    if (this.suggestListEl) {
      // console.log(this.suggestListEl.childNodes);
      // const suggestListHeight = this.suggestListEl.offsetHeight;
      // let suggestListHeight = 0;
      // this.setState({ suggestListHeight });
      // return height;
    }
    return 0;
  };
}
const mapStateToProps = ({ tags }) => ({
  list: tags,
});
export default connect(mapStateToProps)(TagList);
