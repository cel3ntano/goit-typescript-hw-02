import { OpenModal } from "../../types";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  user: {
    name: string;
  };
  urls: {
    regular: string;
    small: string;
  };
  description: string;
  likes: string | number;
  openModal: OpenModal;
}

export default function ImageCard({
  user: { name: userName },
  urls: { regular: modalUrl, small: previewUrl },
  description,
  likes,
  openModal,
}: ImageCardProps): JSX.Element {
  const handleOpenModal = (): void => {
    openModal(modalUrl, description, userName, likes);
  };

  return (
    <>
      <li>
        <div className={css.galleryCard}>
          <img src={previewUrl} alt={description} onClick={handleOpenModal} />
        </div>
      </li>
    </>
  );
}
