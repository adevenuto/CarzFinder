'use client'

import { btnStylesProps } from "@/types"
import Image from "next/image"

export default function CustomButton({title, btnStyles, titleStyles, rightIcon, isDisabled, handleClick, btnType}: btnStylesProps) {
  return (
    
    <button
        disabled={isDisabled}
        type={btnType || 'button'}
        className={`custom-btn active:ring-offset-2 active:ring-2 active:ring-blue-500 active:scale-105 relative ${btnStyles}`}
        onClick={handleClick}
    >
        <span className={`flex-1 ${titleStyles}`}>{ title }</span>
        {rightIcon && (
            <div className="relative w-6 h-6">
                <Image 
                    src={rightIcon}
                    alt="right icon"
                    fill
                    className="object-contain"
                />
            </div>
        )}
    </button>
  )
}
