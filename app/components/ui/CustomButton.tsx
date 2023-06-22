'use client'

import { btnStylesProps } from "@/types"

export default function CustomButton({title, btnStyles, handleClick, btnType="button"}: btnStylesProps) {
  return (
    
    <button
        disabled={false}
        type={btnType}
        className={`custom-btn active:ring-offset-2 active:ring-2 active:ring-blue-500 active:scale-105 relative ${btnStyles}`}
        onClick={handleClick}
    >
        <span className={`flex-1`}>
            { title }
        </span>
    </button>
  )
}
