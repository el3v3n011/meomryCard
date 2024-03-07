import "./Image.css";

import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Image = ({ keyWord }) => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const key = "aHFAo01xcvBsQpv2ASKDcvzQn36C0u7d";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${keyWord}&limit=9`;
    const response = await fetch(url);
    const data = await response.json();
    setImages(data.data);
  };
  useEffect(() => {
    fetchImages();
  }, [keyWord]);

  Image.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    keyWord: PropTypes.string.isRequired,
  };
  return (
    
      <div className="imageContainer">
        {images.map((image, index) => (
          <img className="images"  key={index} src={image.images.original.url} alt={image.title} />
        ))}
    </div>
  );
};

export default Image;
