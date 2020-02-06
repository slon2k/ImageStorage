import React from "react";

const toBase64String = (type, data) => {
  return `data:${type};base64,${data}`;
};

const style = image => {
  return {
    width: "100px",
    height: "100px",
    backgroundImage: `url(${toBase64String(image.type, image.data)})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  };
};

const ImagesList = ({ images, deleteImage }) => {
  console.log(images);
  return (
    <div>
      <ul>
        {images.map(image => (
          <li key={image.id}>
            {image.title} <img alt={image.imageName} src={toBase64String(image.type, image.data)} />
            <div style={style(image)}></div>
            <button onClick={() => deleteImage(image.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImagesList;
