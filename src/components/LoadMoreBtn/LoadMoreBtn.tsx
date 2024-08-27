import { LoadMore } from "../../types";
import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: LoadMore;
  children: React.ReactNode;
}

export default function LoadMoreBtn({
  onClick,
  children,
}: LoadMoreBtnProps): JSX.Element {
  return (
    <button onClick={onClick} className={css.loadMoreBtn}>
      {children}
    </button>
  );
}
