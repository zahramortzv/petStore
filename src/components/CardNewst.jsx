import React from 'react'

function CardNewst({ image, title, price, selected }) {
  return (
    <div className='w-[300px] h-[454px] border-dashed border-[1.75px border-[#E2E2E2] rounded-[13px] flex flex-col items-center'>
      <image src={image} />
      <p className='font-bold text-[20px] leading-[40.22px]'>{title}</p>
      <div>
        <span className={selected ? 'text-[#F7763D]' : 'text-[#79AF79]'}>قیمت</span>
        <span>{price}</span>
      </div>
      <div className={selected ? 'bg-[#F7763D]' : 'bg-[#519BC2]' `w-[300px] h-[454] rounded-[8.7px] flex items-center justify-center gap-1`}><span className='text-[17.47px] font-semibold'>افزودن به سبد خرید</span></div>
    </div>
  )
}

export default CardNewst