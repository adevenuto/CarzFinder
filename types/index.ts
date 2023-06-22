import { MouseEventHandler } from "react";

export interface btnStylesProps {
    title: string;
    btnStyles?: string;
    btnType?: "button" | "submit";
    handleClick?: MouseEventHandler<HTMLButtonElement>
}