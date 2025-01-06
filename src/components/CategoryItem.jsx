import React from 'react'
import { ArrowLeft } from './Icons'

function CategoryItem({ bgColor, icon, text }) {
    return (
        <div
            className={`flex items-center justify-between h-[99px] w-[350px] sm:w-[392px] px-4 bg-${bgColor} rounded-lg shadow-md cursor-pointer `}
        >
            <img src={icon} />
            <span className='font-semibold text-[20px]'>{text}</span>
            <ArrowLeft />
        </div>
    )
}

export default CategoryItem