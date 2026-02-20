import { useParams } from "react-router-dom";
import cars  from "../data/cars";
import { useState } from "react";
import CarCard from "../components/cars/CarCard";


function Spec({label, value}){
    return (
        <div className="border rounded-xl p-4 text-center">
            <p className="text-gray-400 text-sm capitalize">
                {label}
            </p>
            <p className="font-semibold">
                {value}
            </p>
        </div>
    )
}

function CarDetail(){
    const { id } = useParams();

    const vehicle = cars.find(
        car => car.id === Number(id)
    );

    const [selectedImage, setSelectedImage] = 
    useState(vehicle?.images.main);
    
    if(!vehicle) {
        return <h2 className="text-center mt-20 text-2xl font-bold">Vehicle Not Found</h2>
    }
const relatedCars = cars
    .filter(car => car.id !== vehicle.id)
    .slice(0, 3);


    return (
        <section className=" bg-gray-50 min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-3 gap-8">

                    <div className="lg:col-span-2">

                    <div className="bg-white rounded-2xl p-6 shadow">
                        <img src={selectedImage} alt= {vehicle.name} 
                        className="w-full h-[420px] object-contain"/>
                    </div>

                    <div className="grid grid-cols-4 gap-4 mt-4">
                        {Object.values(vehicle.images).map((img, i) => (
                            <img key={i} src={img} onClick={() => setSelectedImage(img)} 
                            className="cursor-pointer rounded-xl border hover:border-red-500 transition"/>
                            ))}
                    </div>
                    <div className="bg-white rounded-2xl shadow p-6 mt-6">
                            <h1 className="text-3xl font-bold">
                                {vehicle.name}
                            </h1>

                            <p className="text-red-600 text-xl mt-2 font-semibold">
                                {vehicle.price.toLocaleString()} Birr/ day
                            </p>

                            <p className="text-gray-600 mt-4">
                                {vehicle.description}
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">

            {Object.entries(vehicle.specs).map(([key,value]) => (
        <Spec key={key} label={key} value={value}/>
        ))}
    </div>

 <h3 className="text-xl font-bold mt-10 mb-4">
   Key Features
</h3>

<div className="grid grid-cols-2 gap-3">
   {vehicle.features.map((feature, i) => (
      <div key={i} className="bg-gray-100 p-3 rounded-lg">
         ✅ {feature}
      </div>
   ))}
</div>
                    </div>
                </div>
                
                <div className="bg-white rounded-2xl shadow p-6 h-fit">
                    <h2 className="text-2xl font-bold mb-4">
                        Book This Vehicle
                    </h2>

                    <button className="w-full bg-red-600 text-white py-3 rounded-xl hover:bg-red-700">
                        Book Now
                    </button>
                </div>

                </div>

                <div className="mt-20">
                    <h2 className="text-2xl font-bold mb-8">
                    You May Also Like
                    </h2>
    
                    <div className="grid sm: grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {relatedCars.map(car =>(
                            <CarCard key={car.id} {...car} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );

}

export default CarDetail;