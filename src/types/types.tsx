import { ReactNode, JSX } from "react";

export interface CardProps {
    children: ReactNode;
}

export interface IconProps {
    source: JSX.Element;
    classNameOfParentElement?: string;
}

export interface ContentProps extends CardProps {};

export interface ListDaily {
    title: string;
    icon: JSX.Element;
}
  