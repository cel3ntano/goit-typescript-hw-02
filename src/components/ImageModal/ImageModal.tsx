import css from "./ImageModal.module.css";
import Modal from "react-modal";
import { FaHeart } from "react-icons/fa";
import { MdPhotoCamera } from "react-icons/md";
import { modalClose } from "../../types";
Modal.setAppElement("#root");

interface ImageModalProps {
  isOpen: boolean;
  onCloseModal: modalClose;
  modalSrc: string;
  modalAlt: string;
  modalAuthor: string;
  modalLikes: string | number;
}

export default function ImageModal({
  isOpen,
  onCloseModal,
  modalSrc,
  modalAlt,
  modalAuthor,
  modalLikes,
}: ImageModalProps): JSX.Element {
  return (
    <Modal
      className={css.modal}
      overlayClassName={css.overlay}
      // closeTimeoutMS={200}
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      contentLabel='image lightbox'>
      <div>
        <img src={modalSrc} alt={modalAlt} />
        <ul className={css.photoDetails}>
          <li>
            <MdPhotoCamera />
            {modalAuthor}
          </li>
          <li>
            <FaHeart />
            {modalLikes}
          </li>
        </ul>
      </div>
    </Modal>
  );
}
