import React, { Component } from "react";

class Home extends Component {
  render() {

    const callApi = async () => {
      const response = await fetch("/web/file_txt");
      const body = await response.json();
      return body;
    };
  
    callApi();

    return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
  }
}

export default Home;
