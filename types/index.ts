import { MouseEventHandler } from "react";

export interface btnStylesProps {
    title: string;
    btnStyles?: string;
    btnType?: "button" | "submit";
    handleClick?: MouseEventHandler<HTMLButtonElement>
}

export interface SearchManufacturerProps {
    manufacturer: string,
    setManufacturer: (manufacturer: string) => void;
}