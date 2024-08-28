export type Image = {
  user: { name: string };
  urls: {
    regular: string;
    small: string;
  };
  description: string;
  likes: number;
};

export type OpenModal = (
  url: string,
  alt: string,
  author: string,
  likes: string | number
) => void;

export type modalClose = () => void;

export type LoadMore = () => void;

export type handleSearch = (newQuery: string) => void;
