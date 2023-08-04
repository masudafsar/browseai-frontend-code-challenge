import {ReactNode} from "react";

export type RowRendererType<T> = (data: T, index: number) => ReactNode;
