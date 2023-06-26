'use client'

import { useState } from "react"
import Image from "next/image"
import { CarsProps } from "@/types"
import CustomButton from "./ui/CustomButton"
import { calculateCarRent } from "../utils"

interface CarCardProps {
    car: CarsProps
}

export default function CarCard({car}: CarCardProps) {
    const {
        city_mpg,
        make,
        model,
        year} = car

    const carRent = calculateCarRent(city_mpg, year)
    return (
        <div className="car-card group">
            <div className="car-card__content">
                <h2 className="car-card__content-title">{make} {model}</h2>
            </div>

            <div className="flex mt-6 text-[32px]">
                <span className="self-start text-[14px] text-green-700 font-semibold">
                    $
                </span>
                {carRent}
                <span className="self-end text-[14px] font-medium">
                    /day
                </span>
            </div>
        </div>
    )
}
