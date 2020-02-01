import React from "react";
import "./App.css";
import * as api from "./services/api";
import ImagesList from "./components/images-list/ImagesList";

export default class App extends React.Component {
  state = {
    loading: false,
    error: undefined,
    images: []
  };

  loadImages = () => {
    this.setState({ loading: true, error: undefined });
    api
      .getImages()
      .then(images => {
        this.setState({ loading: false, images });
      })
      .catch(error => {
        console.log(error);
        this.setState({ loading: false, error: "Unable to get images" });
      });
  };

  componentDidMount() {
    this.loadImages();
  }

  render() {
    const { loading, error, images } = this.state;
    return (
      <div className="container">
        <h2>App</h2>
        {loading && <div>Loading images...</div>}
        {!loading && <ImagesList images={images}/>}
        {error !== undefined && <div>{error}</div>}
      </div>
    );
  }
}
