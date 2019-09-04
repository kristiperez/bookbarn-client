import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  }
}
export default App;
