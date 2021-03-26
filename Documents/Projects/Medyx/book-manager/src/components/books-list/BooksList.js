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

  handleDialog = () => {
    this.setState({ isDialogShowing: !this.state.isDialogShowing });
  };

  render() {
    return (
      this.state.books.length > 0 &&
      this.state.books.map((book, index) => {
        return (
          <div className="card book_list_element text-center">
            <div
              className="card-body"
              key={index}
              //onClick={() => this.openDialog()}
              onClick={this.handleDialog}
            >
              {this.state.isDialogShowing ? (
                <EditBook
                  //closeDialog={this.closeDialog}
                  handleDialog={this.handleDialog}
                  bookInfo={book}
                />
              ) : (
                ''
              )}
              <div className="row">
                <div className="col-4">
                  <h5 className="card-title">{book.title}</h5>
                </div>
                <div className="offset-4 col-3">
                  <h5 className="card-text">Author</h5>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <p className="card-text text-left ml-4">
                    {book.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })
    );
  }
}
