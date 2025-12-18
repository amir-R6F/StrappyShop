import React from 'react';
import ProductItem from "@/app/_components/ProductItem.jsx";

const ProductList = ({productList}) => {
    return (
        <div className={'mt-10'}>
            <h2 className={'text-green-600 font-bold text-2xl'}>our popular products</h2>

            <div className={'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '}>
                {productList.map((product, index)=>(
                    <ProductItem key={index} product={product}/>
                ))}
            </div>
        </div>
    );
};

export default ProductList;