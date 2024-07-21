import css from "./ImageCard.module.css";

export default function ImageCard({
  user: { name: userName },
  urls: { regular: modalUrl, small: previewUrl },
  description,
  likes,
  openModal,
}) {
  const handleOpenModal = () => {
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
