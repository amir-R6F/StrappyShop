import React from 'react';
import Image from "next/image.js";
import {Button} from "@/components/ui/button";
import {ShoppingBasket} from "lucide-react";

const ProductItemDetail = ({product}) => {
    return (
        <div>
            <div className={'grid grid-cols-1 md:grid-cols-2 p-7 bg-white text-black'}>
                <Image src={process.env.NEXT_PUBLIC_STRAPPY_BASE_URL + product.images[0].url}
                       width={300}
                       height={300}
                       alt={"img"}
                       className={"bg-state-200  h-[320px] w-[300px] rounded-lg"}
                       unoptimized
                />

                <div className={'flex flex-col gap-3'}>
                    <h2 className={'text-2xl font-bold'}>
                        {product.name}
                    </h2>
                    <h2 className={'text-sm text-gray-500'}>
                        {product.description}
                    </h2>
                    <div className={'flex gap-3'}>
                        {
                            product.sellingPrice &&
                            <h2 className={'font-bold text-3xl'}>${product.sellingPrice}</h2>
                        }
                        <h2 className={`font-bold ${product.sellingPrice && 'line-through text-gray-500 text-3xl'}`}>${product.mrp}</h2>
                    </div>
                    <h2 className={'font-bold text-lg'}>Quantity {product.itemQuantityType}</h2>
                    <div className={'flex flex-col items-baseline'}>
                        <div className={'p-2 border flex gap-10 items-center px-5'}>
                            <button>-</button>
                            <h2>0</h2>
                            <button>+</button>
                        </div>
                        <Button className={'flex gap-3'}>
                            <ShoppingBasket/>
                            Add To Cart
                        </Button>
                        <h2><span className={'font-bold'}>Category:</span> {product.categories[0]}</h2>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItemDetail;
