import React from 'react';
import Image from "next/image.js";

const CategoryList = ({categoryList}) => {
    return (
        <div className={'mt-10'}>
            <h2 className={'text-green-600 font-bold text-2xl'}>Shop by Category</h2>

            <div className={'grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-5 mt-2'}>
                {categoryList.map((category, index)=>(
                    <div key={index} className={'flex flex-col items-center bg-green-200 gap-2 p-3 rounded-lg group cursor-pointer hover:bg-green-300'}>
                        <Image src={process.env.NEXT_PUBLIC_STRAPPY_BASE_URL + category.icon[0].url}
                        width={50}
                        height={50}
                               alt={'icon'}
                               className={"group-hover:scale-125 transition-all ease-in-out"}
                               unoptimized/>
                        <h2 className={'text-green-800 font-bold'}>{category.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;