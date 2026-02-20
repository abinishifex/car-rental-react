import { useState } from "react";
import BrandCard from "./BrandCard";

function SearchByBrand(){
    const [showAll, setShowAll] = useState(false);

    const mainBrands = [
            {id:1, name:"Toyota", logo: "/brands/toyota-brand-logo.svg"},
            {id: 2, name:"Hyundai", logo: "/brands/hyundai.svg"},
            {id: 3, name:"BMW", logo: "/brands/bmw.svg"},
            {id: 4, name:"Volkswagen", logo: "/brands/volkswagen.svg"},
    ];

    const extraBrands = [
             {id:5, name:"Merchedes", logo: "/brands/mercedes.svg"},
            {id:6, name:"Isusu", logo: "/brands/isuzu.svg"},
    ];
    return (
        <section className="bg-gray-50 py-16">
            <div className="max-w-6xl mx-auto px-4  py-6">
                <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
                    <span className="w-1 h-6 bg-red-600 inline-block"></span>
                    Search new Cars by brand
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {mainBrands.map((brand)=>(
                        <BrandCard 
                        key={brand.id}
                         logo={brand.logo} 
                         name={brand.name}
                          />
                    ))}

                    {showAll && extraBrands.map((brand) => (
                        <BrandCard 
                        key={brand.id}
                         logo={brand.logo} 
                         name={brand.name}
                          />
                    ))}
                </div>

                <div flex justify-center mt-10>
                    <button onClick={() => setShowAll(!showAll)} 
                        className="mt-4 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">
                    {showAll ? "Show Less" : "Show More"}
                    </button>
                </div>
            </div>
        </section>
    )
}


export default SearchByBrand;