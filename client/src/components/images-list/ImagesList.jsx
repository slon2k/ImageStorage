import React from "react";

const toBase64String = (type, data) => {
  return `data:${type};base64,${data}`;
}

const ImagesList = ({ images }) => {
  console.log(images);
  return (
    <div>
      <ul>
        {images.map(image => (
          <li key={image.id}>{image.title} <img src={toBase64String(image.type, image.data)} /></li>
        ))}
      </ul>
    </div>
  );
};

export default ImagesList;
