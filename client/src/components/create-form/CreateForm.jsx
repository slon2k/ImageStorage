import React from "react";

export default class CreateForm extends React.Component {
  state = {
    title: "",
    file: undefined
  };

  render() {
    const { title, file } = this.state;
    const { uploadImage } = this.props;
    
    const handleSubmit = (e) => {
      e.preventDefault();
      uploadImage({ title, file });
    };

    return (
      <div>
        <h3>Upload new image</h3>
        <form encType="multipart/form-data">
          <input
            value={title}
            type="text"
            name="title"
            onChange={e => this.setState({ title: e.target.value })}
          />
          <input
            type="file"
            name="image"
            onChange={e => this.setState({ file: e.target.files[0] })}
          />
          <br />
          <button onClick={handleSubmit}>Save</button>
        </form>
      </div>
    );
  }
}
