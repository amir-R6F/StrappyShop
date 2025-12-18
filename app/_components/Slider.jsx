import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

const Slider = ({sliderList}) => {
    return (
        <div>
            <Carousel>
                <CarouselContent>
                    {sliderList.map((slider, index)=>(
                        <CarouselItem key={index}>
                            <Image src={process.env.NEXT_PUBLIC_STRAPPY_BASE_URL + slider.image.url}
                            width={1000}
                            height={1000}
                                   alt={"slider"}
                            className={"w-full h-[200px] md:h-[400px] object-cover rounded-2xl"}
                                   unoptimized
                            />
                        </CarouselItem>
                    ))}



                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default Slider;