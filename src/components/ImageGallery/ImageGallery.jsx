import { forwardRef } from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = forwardRef(function ImageGallery(
  { images, openModal },
  ref
) {
  return (
    <ul className={css.gallery} ref={ref}>
      {images.map((image, index) => {
        const key = `${image.id}-${index}`;
        return <ImageCard key={key} {...image} openModal={openModal} />;
      })}
    </ul>
  );
});

export default ImageGallery;
