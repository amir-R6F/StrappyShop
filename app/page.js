import Image from "next/image";
import {Button} from "@/components/ui/button";
import Slider from "@/app/_components/Slider.jsx";
import GlobalApi from "@/app/_utils/GlobalApi.jsx";
import CategoryList from "@/app/_components/CategoryList.jsx";
import ProductList from "@/app/_components/ProductList.jsx";
import Footer from "@/app/_components/Footer.jsx";

export default async function Home() {
    const sliderList = await  GlobalApi.getSliders();
    const categoryList = await  GlobalApi.getCategoryList();
    const productList = await  GlobalApi.getAllProducts();

  return (
    <div className={"p-5 md:p-10 px-16"}>
        <Slider sliderList = {sliderList}/>

        <CategoryList categoryList = {categoryList}/>

        <ProductList productList={productList}/>

        <Image src={'/banner.jpg'} width={1000} height={300}
        alt={'banner'}
        className={'w-full h-[300px] object-contain pt-10'}/>

        <Footer/>
    </div>
  );
}
