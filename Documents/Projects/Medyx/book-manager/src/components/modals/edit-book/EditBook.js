import { Fragment } from 'react';
import React from 'react';
import { Dialog, Button } from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

export default class EditBook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.bookInfo.title,
      publishingYear: props.bookInfo.publishingYear,
      author: props.bookInfo.author,
      description: props.bookInfo.description,
    };

    //this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput = (event, field) => {
    //alert(field);
    this.setState({ [field]: event.target.value });
  };

  // handleBookChange = (field, value) => {
  //   console.log(field);
  //   alert(value);
  //   this.setState({ [field]: value });
  // };

  render() {
    return (
      <Fragment>
        <Dialog
          /* open={this.state.open}
        onClose={this.handleToggle} */
          open={true}
          //onClose={() => props.closeDialog}
          id="addWalletDialog"
          fullWidth={true}
          maxWidth={'md'}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle className="text-center" id="form-dialog-title">
            Book Info
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              value={this.state.title}
              onChange={(e) => this.handleUserInput(e, 'title')}
              type="title"
              fullWidth
            />

            <TextField
              autoFocus
              margin="dense"
              id="publishingYear"
              label="Publishing Year"
              value={this.state.publishingYear}
              onChange={(e) =>
                this.handleUserInput(e, 'publishingYear')
              }
              type="publishingYear"
              fullWidth
            />

            <TextField
              autoFocus
              margin="dense"
              id="author"
              label="Author"
              value={this.state.author}
              onChange={(e) => this.handleUserInput(e, 'author')}
              type="author"
              fullWidth
            />

            <TextField
              autoFocus
              margin="dense"
              id="description"
              label="Description"
              value={this.state.description}
              onChange={(e) => this.handleUserInput(e, 'description')}
              type="description"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.closeDialog} color="primary">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}
