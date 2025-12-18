import React from 'react';
import Image from "next/image.js";
import {Button} from "@/components/ui/button.jsx";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import ProductItemDetail from "@/app/_components/ProductItemDetail.jsx";

const ProductItem = ({product}) => {
    return (
        <div className={'p-2 md:p-6 flex flex-col items-center justify-center gap-3 border rounded-lg hover:scale-110 hover:shadow-md transition-all ease-in-out'}>
            <Image src={process.env.NEXT_PUBLIC_STRAPPY_BASE_URL + product.images[0].url}
            width={500}
            height={200}
                   className={'h-[150px] w-[200px] object-contain'}
            alt={product.name + ' img'}
                   unoptimized
            />

            <h2 className={'font-bold text-lg'}>{product.name}</h2>

            <div className={'flex gap-3'}>
                {
                    product.sellingPrice &&
                    <h2 className={'font-bold text-md'}>${product.sellingPrice}</h2>
                }
                <h2 className={`font-bold ${product.sellingPrice&&'line-through text-gray-500'}`}>${product.mrp}</h2>
            </div>



            <Dialog>
                <DialogTrigger asChild>
                    <Button variant={"outline"}
                            className={'text-green-500 hover:text-white hover:bg-green-700'}>Add to cart</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>

                        <DialogDescription>
                            <ProductItemDetail product={product}/>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    );
};

export default ProductItem;