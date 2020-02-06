import React from "react";

const toBase64String = (type, data) => {
  return `data:${type};base64,${data}`;
};

export default class CreateForm extends React.Component {
  state = {
    title: "",
    file: undefined
  };

  render() {
    const { title, file } = this.state;
    const { uploadImage } = this.props;

    const handleSubmit = async e => {
      e.preventDefault();
      try {
        await uploadImage({ title, file });
        this.setState({ title: "", file: undefined });
      } catch (error) {
        console.log(error);
      }
    };

    const imageInputStyle = {
      display: "block",
      border: "dashed red 2px",
      backgroundImage: this.state.file ? `URL(${URL.createObjectURL(this.state.file)})` : "",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      width: "100px",
      height: "100px",
      borderRadius: "50%"
    };

    const previewStyle = image => {
      return {
        width: "100px",
        height: "100px",
        backgroundImage: this.state.file ? `URL(${URL.createObjectURL(this.state.file)})` : "",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      };
    };

    return (
      <div>
        <img src={this.state.file ? URL.createObjectURL(this.state.file) : null}/>
        <label htmlFor="image" style={imageInputStyle}></label>
        <div style={this.state.file ? previewStyle(this.state.file) : null}>
          
        </div>
        <h3>Upload new image</h3>
        <form encType="multipart/form-data">
          <input
            value={title}
            type="text"
            name="title"
            onChange={e => this.setState({ title: e.target.value })}
          />

          <input
            id="image"
            type="file"
            name="image"
            onChange={e => this.setState({ file: e.target.files[0] })}
          />
          <br />

          <br />
          <button onClick={handleSubmit}>Save</button>
        </form>
      </div>
    );
  }
}
