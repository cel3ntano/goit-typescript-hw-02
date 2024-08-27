export type Image = {
  user: string;
  urls: { [key: string]: string };
  description: string;
  likes: number;
};

export type OpenModal = (
  url: string,
  alt: string,
  author: string,
  likes: string | number
) => void;
