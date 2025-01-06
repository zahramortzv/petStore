import React from 'react'
import CategoryItem from './CategoryItem'
import fishImage from "../assets/image/fish.svg"
import catImage from "../assets/image/cat.svg"
import dogImage from "../assets/image/dog.svg"

const items = [
    { id: 1, text: 'غذا ماهی', icon: fishImage, bgColor: '#5124C40A' },
    { id: 2, text: 'غذا و لوازم گربه', icon: catImage, bgColor: '#72c1e64f' },
    { id: 3, text: 'غذا و لوازم سگ', icon: dogImage, bgColor: '#F7763D21' },
];

function Categories() {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-center  mb-8 mt-8 gap-3 ">
            {items.map((item) => (
                <CategoryItem
                    key={item.id}
                    text={item.text}
                    icon={item.icon}
                    bgColor={item.bgColor}
                />
            ))}
        </div>
    );
}

export default Categories;