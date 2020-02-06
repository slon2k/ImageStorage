import React from "react";
import "./App.css";
import * as api from "./services/api";
import ImagesList from "./components/images-list/ImagesList";
import CreateForm from "./components/create-form/CreateForm";

export default class App extends React.Component {
  state = {
    loading: false,
    deleting: false,
    uploading: false,
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

  uploadImage = ({ title, file }) => {
    this.setState({ uploading: true, error: undefined });
    api
      .createImage({ title, file })
      .then(image => {
        this.setState({
          uploading: false,
          images: [...this.state.images, image]
        });
        return image;
      })
      .catch(error => {
        console.log(error);
        this.setState({ uploading: false, error: "Unable to upload image" });
      });
  };

  deleteImage = (id) => {
    this.setState({ deleting: true, error: undefined });
    api
      .deleteImage(id)
      .then(() => {
        this.setState({
          deleting: false,
          images: this.state.images.filter(image => image.id !== id)
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({ deleting: false, error: "Unable to delete image" });
      });
  };

  componentDidMount() {
    this.loadImages();
  }

  render() {
    const { loading, uploading, error, images } = this.state;
    return (
      <div className="container">
        <h2>App</h2>
        <CreateForm uploadImage={this.uploadImage} />
        {loading && <div>Loading images...</div>}
        {uploading && <div>Uploading image...</div>}
        {!loading && (
          <ImagesList images={images} deleteImage={this.deleteImage} />
        )}
        {error !== undefined && <div>{error}</div>}
      </div>
    );
  }
}
