import React, { Component } from "react";
import BookList from "./BookList";
import { Jumbotron, Container } from "reactstrap";
class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
    this.fetchBooks();
  }
  fetchBooks = () => {
    fetch(
      "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json"
    )
      .then(response => response.json())
      .then(books => {
        this.setState({
          books: books
        });
      });
  };
  render() {
    return (
      <div className="booksContainer">
        <Jumbotron fluid>
          <Container fluid>
            <BookList books={this.state.books} />
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
export default MainContent;