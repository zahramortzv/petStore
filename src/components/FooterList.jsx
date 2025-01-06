import React from 'react'

const FooterList = ({ title, items }) => (
    <ul className="leading-[20px] sm:leading-[38.92px]">
        <li className="font-bold text-[10px] sm:text-[17.02px]">{title}</li>
        {items.map((item, index) => (
            <li className='text-[10px] sm:text-[17.02px]' key={index}>{item}</li>
        ))}
    </ul>
);

export default FooterList