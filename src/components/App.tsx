import { useEffect, useState, useRef } from "react";
import SearchBar from "./SearchBar/SearchBar";
import getImages from "../api/images";
import ImageGallery from "./ImageGallery/ImageGallery";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";
import Loader from "./Loader/Loader";
import "./App.css";

type Image = {
  user: string;
  urls: { [key: string]: string };
  description: string;
  likes: number;
};

type Modal = {
  isShown: boolean;
  url: string;
  alt: string;
  author: string;
  likes: string | number;
};

export default function App() {
  const galleryRef = useRef<HTMLUListElement>(null);
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [modalData, setModalData] = useState<Modal>({
    isShown: false,
    url: "",
    alt: "",
    author: "",
    likes: "",
  });

  const handleSearch = (newQuery: string): void => {
    setIsError(false);
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setHasSearched(false);
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const openModal = (
    url: string,
    alt: string,
    author: string,
    likes: string | number
  ) => {
    setModalData({
      isShown: true,
      url,
      alt,
      author,
      likes,
    });
  };

  const closeModal = () => {
    setModalData({
      isShown: false,
      url: "",
      alt: "",
      author: "",
      likes: "",
    });
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    const fetchImages = async (): Promise<void> => {
      try {
        setIsError(false);
        setIsLoading(true);
        const { images, totalPages } = await getImages(query, page);
        setImages((prevImages: Image[]) => {
          return [...prevImages, ...images];
        });
        setTotalPages(totalPages);
        setHasSearched(true);
      } catch (error: unknown) {
        setIsError(true);
      } finally {
        setIsLoading(false);

        setTimeout(() => {
          if (galleryRef.current) {
            const lastItem = galleryRef.current.querySelector("li:last-child");
            if (lastItem) {
              lastItem.scrollIntoView({ behavior: "smooth", block: "end" });
            }
          }
        }, 100);
      }
    };
    fetchImages();
    console.log(images);
  }, [query, page]);

  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      <Loader isLoading={isLoading} />
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} ref={galleryRef} />
      )}
      {isError && (
        <ErrorMessage>
          Something went wrong... Please, reload the page
        </ErrorMessage>
      )}
      {hasSearched && images.length === 0 && !isLoading && (
        <ErrorMessage>
          There are no images matching &quot;{query}&quot;
        </ErrorMessage>
      )}
      <div className='loadMoreWrapper'>
        {!isLoading && images.length > 0 && page < totalPages && (
          <LoadMoreBtn onClick={handleLoadMore}>Load more</LoadMoreBtn>
        )}
      </div>
      <ImageModal
        isOpen={modalData.isShown}
        onCloseModal={closeModal}
        modalSrc={modalData.url}
        modalAlt={modalData.alt}
        modalAuthor={modalData.author}
        modalLikes={modalData.likes}
      />
    </>
  );
}
