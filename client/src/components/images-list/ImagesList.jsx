import React from "react";

const ImagesList = ({ images }) => {
  return (
    <div>
      <ul>
        {images.map(image => (
          <li key={image.id}>{image.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ImagesList;
