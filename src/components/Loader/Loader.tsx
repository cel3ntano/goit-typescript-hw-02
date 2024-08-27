import { ThreeDots } from "react-loader-spinner";
import css from "./Loader.module.css";

interface LoaderProps {
  isLoading: boolean;
}

export default function Loader({ isLoading }: LoaderProps): JSX.Element {
  return (
    <ThreeDots
      visible={isLoading}
      wrapperClass={css.loader}
      ariaLabel='three-dots-loading'
    />
  );
}
