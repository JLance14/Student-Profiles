import React from 'react';

import './style.css';
import MainTitle from 'components/main-title/MainTitle';
import SearchMenu from 'components/search-menu/SearchMenu';
import BooksList from 'components/books-list/BooksList';
import SortBar from 'components/sort-bar/SortBar';

export const defaultBooks = [
  {
    title: 'Harry Potter',
    publishingYear: 1996,
    author: 'J.K Rowling',
    description: 'Young wizard going to Poudlard.',
  },
  {
    title: 'Harry Potter 2',
    publishingYear: 1999,
    author: 'J.K Rowling',
    description: 'Teenage wizard in Poudlard.',
  },
  {
    title: 'Harry Potter 3',
    publishingYear: 2003,
    author: 'J.K Rowling',
    description: 'Grown up wizard after Poudlard.',
  },
  {
    title: 'Post Office',
    publishingYear: 1971,
    author: 'Charles Bukowski',
    description: 'Story of an unconventional postman',
  },
  {
    title: 'Into The Wild',
    publishingYear: 2007,
    author: 'Sean Penn',
    description: 'Chris McCandless 100 days in Alaska',
  },
];

export const sortOptions = {
  orderAdded: 'Order added',
  titleAscending: 'Title ascending',
  titleDescending: 'Title descending',
};

export default class BookManager extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: defaultBooks,
      OLID: '',
      sortOptions: sortOptions,
      currentSortOption: sortOptions.orderAdded,
    };
  }

  addBook = (book) => {
    let updatedBooks = this.state.books.concat(book);

    this.setState({ books: updatedBooks });

    console.log('Added book');
  };

  updateSortOption = (option) => {
    console.log('READY TO UPDATE', option);
    this.setState({ currentSortOption: option });
    this.sortList();
  };

  componentDidMount() {
    this.sortList();
  }

  //Update books order
  sortList() {
    const { books, currentSortOption } = this.state;

    //Ascending sort
    if (currentSortOption == sortOptions.titleAscending) {
      books.sort(function (a, b) {
        return b.title.localeCompare(a.title);
      });
    }
    //Descending sort
    else if (currentSortOption == sortOptions.titleDescending) {
      books.sort(function (a, b) {
        return a.title.localeCompare(b.title);
      });

      console.log('NEW BOOKS', books);
    }
    //orderAdded sort
    else {
    }

    var sortedBooks = books;

    this.setState({ books: sortedBooks });
  }

  render() {
    const { books, currentSortOption, sortOptions } = this.state;

    return (
      <div className="container">
        <MainTitle />
        <SearchMenu addBook={this.addBook} />
        <SortBar
          currentSortOption={currentSortOption}
          sortOptions={sortOptions}
          updateSortOption={this.updateSortOption}
        />
        <BooksList
          books={books}
          currentSortOption={currentSortOption}
          sortOptions={sortOptions}
        />
      </div>
    );
  }
}
