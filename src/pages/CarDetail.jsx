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
    .filter(car => car.id !== vehicle.id && car.catagory === vehicle.catagory)
    .slice(0, 4);


    return (
        <section className=" bg-gray-50 min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-3 gap-8">

                    <div className="lg:col-span-2">

                    <div className="bg-white rounded-2xl p-6 mt-9 shadow">
                        <img src={selectedImage} alt= {vehicle.name} 
                        className="w-full h-[420px] object-contain"/>
                    </div>
                     {/* differnt angle of the car */}
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
                
                <div className="bg-white rounded-2xl shadow-xl  p-8 py-15 flex flex-col align-top h-fit sticky top-24 border">
                    <h2 className="text-2xl font-bold mb-6">
                        Book This Vehicle
                    </h2>

                    

                            <div className="mb-6">
                        <p className="text-gray-500 text-sm">Starting From</p>
                        <p className="text-3xl font-bold text-red-600">
                            {vehicle.price.toLocaleString()}Birr
                            <span className="text-base text-gray-500 font-normal">
                            {" "}/ day
                            </span>
                        </p>
                    </div>
                    <div className=" border-t my-6"></div>

                    <ul className="space-y-3 text-sm text-gray-600 mb-6">
                        <li>✔ Free cancellation</li>
                        <li>✔ Insurance included</li>
                        <li>✔ 24/7 Customer support</li>
                    </ul>

                    
                    <button className="w-full bg-red-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-red-700 transition duration-300 shadow-md">
                        Book Now
                    </button>

                </div>

                </div>

                <div className="mt-20">
            <h2 className="text-2xl font-bold mb-8">
                You May Also Like
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {relatedCars.map(car => (
                <CarCard key={car.id} {...car} />
                ))}
            </div>
            </div>  
            </div>
        </section>
    );

}

export default CarDetail;