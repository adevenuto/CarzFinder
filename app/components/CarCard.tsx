'use client'

import { useState } from "react"
import Image from "next/image"
import { CarsProps } from "@/types"
import CustomButton from "./ui/CustomButton"
import { calculateCarRent } from "../utils"
import CarsDetails from "./CarsDetails"

interface CarCardProps {
    car: CarsProps
}

export default function CarCard({car}: CarCardProps) {
    const {
        city_mpg,
        make,
        model,
        transmission,
        drive,
        year} = car

    const carRent = calculateCarRent(city_mpg, year)
    const [modalOpen, setModalOpen] = useState(false)
    return (
        <div className="car-card group">
            <div className="car-card__content">
                <h2 className="car-card__content-title">{make} {model}</h2>
            </div>

            <div className="flex mt-6 text-[32px] font-extrabold">
                <span className="self-start text-[14px] font-semibold">
                    $
                </span>
                {carRent}
                <span className="self-end text-[14px] font-medium">
                    /day
                </span>
            </div>

            <div className="relative object-contain w-full h-40 my-3">
                <Image src={'/hero.png'}  className="object-contain" alt="car image" fill priority/>
            </div>

            <div className="relative flex w-full mt-2">
                <div className="flex justify-between w-full group-hover:invisible text-gray">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <Image src={'/steering-wheel.svg'} width={20} height={20} alt="steering wheel"/>
                        <p className="text-[14px]">
                            {transmission==='a'?'Automatic':'Manual'}
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <Image src={'/tire.svg'} width={20} height={20} alt="steering wheel"/>
                        <p className="text-[14px]">
                            {drive.toUpperCase()}
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <Image src={'/gas.svg'} width={20} height={20} alt="steering wheel"/>
                        <p className="text-[14px]">
                            {city_mpg} MPG
                        </p>
                    </div>
                </div>
                <div className="car-card__btn-container">
                    <CustomButton 
                        btnStyles="w-full py-[16px] rounded-full bg-primary-blue" 
                        title="View More" 
                        titleStyles="text-white text-[14px] leading-[17px] font-bold"
                        rightIcon="/right-arrow.svg"
                        handleClick={() => setModalOpen(true)}
                    />
                </div>
            </div>
            {/* <CarsDetails show={modalOpen}/> */}
        </div>
    )
}
