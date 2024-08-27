import css from "./ErrorMessage.module.css";
import { ReactNode } from "react";

interface ErrorMessageProps {
  children: ReactNode;
}

export default function ErrorMessage({
  children,
}: ErrorMessageProps): JSX.Element {
  return (
    <>
      <p className={css.errorMessage}>{children}</p>
    </>
  );
}
