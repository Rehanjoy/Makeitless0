import HerroCarousel from "@/components/home/HerroCarousel";
import HerroCategory from "@/components/home/HerroCategory";
import Layout from "@/components/layout/Layout";
import HeroTest1 from "@/components/home/HeroTest1";
import LatestProduct from "@/components/home/LastestProduct";
import CarouselTest1 from "@/components/home/CarouselTest1"
import CarouselTest2 from "@/components/home/CarouselTest2";
import OurProducts from "@/components/home/OurProduct";
import Categories from "@/components/home/Categories";
import Contact from "@/components/home/Contact";
import NewsLetter from "@/components/home/NewLetter";
import WhatOffers from "@/components/home/WhatOffers"
import Bannermostselling from "@/components/Banner/Bannermostselling";
import Bannerproducts from "@/components/Banner/Bannerproducts";
import Bannernewarrival from "@/components/Banner/Bannernewarrival";
export default function Home() {
  return (
<>
<Layout>
{/* 
<CarouselTest2/>
<CarouselTest1/>
<NewsLetter/>
*/}
<HerroCarousel />
<HerroCategory />
<HeroTest1/>
<Bannerproducts/>
<Categories/>
<Bannermostselling/>
<LatestProduct/>
<WhatOffers/>
<Bannernewarrival/>
<OurProducts/>
<Contact/> 
</Layout>
</>
  )
}
