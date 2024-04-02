import { ReactElement, FC } from "react";
import { CardProps } from "../types/types";

const Card: FC<CardProps> = ({ children }): ReactElement => {
  return <div className="card">{children}</div>;
};

export default Card;
