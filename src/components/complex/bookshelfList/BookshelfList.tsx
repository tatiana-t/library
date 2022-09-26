import React, { PureComponent } from 'react';
import Item from 'components/complex/item';
import Scroll from 'components/ui/scroll';
import './bookshelfList.scss';

interface Props {
  list: any[];
  getActiveItem: (id: string) => void;
  search: string;
  searchUpdate: (key: any, value: any) => void;
  onSearch: () => void;
  current: any;
}

class BookshelfList extends PureComponent<Props> {
  render() {
    const { list, getActiveItem, current } = this.props;

    return (
      <>
        <div className="bookshelf-list">
          <div className="bookshelf-list__inner">
            <div className="bookshelf-list__list-wrapper">
              <Scroll>
                <ul className="bookshelf-list__list">
                  {list &&
                    list.map((item) => {
                      return (
                        <li className="bookshelf-list__item" key={item.id}>
                          <Item
                            {...item}
                            setActive={getActiveItem}
                            customClass={
                              item.id === current.id && 'item_active'
                            }
                          />
                        </li>
                      );
                    })}
                </ul>
              </Scroll>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default BookshelfList;
