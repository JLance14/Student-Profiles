import './style.css';
import React from 'react';
import EditBook from 'components/modals/edit-book/EditBook';

export default class BooksList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: this.props.books,
      isDialogShowing: false,
    };
  }

  openDialog = () => {
    this.setState({ ...this.state, isDialogShowing: true });
  };

  closeDialog = () => {
    this.setState({ ...this.state, isDialogShowing: false });
  };

  render() {
    return (
      this.state.books.length > 0 &&
      this.state.books.map((book, index) => {
        return (
          <div className="card book_list_element text-center">
            {this.state.isDialogShowing ? (
              <EditBook
                closeDialog={this.closeDialog}
                bookInfo={book}
              />
            ) : (
              ''
            )}
            <div
              className="card-body"
              key={index}
              onClick={() => this.openDialog()}
            >
              <h5 className="card-title">{book.title}</h5>
              <p className="card-text">{book.description}</p>
              <a href="#" className="btn btn-primary">
                Get Info
              </a>
            </div>
          </div>
        );
      })
    );
  }
}
