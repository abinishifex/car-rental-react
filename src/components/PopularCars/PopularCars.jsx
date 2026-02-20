import cars from "../../data/cars";
import CarList from "../cars/CarList";

function PopularCars(){

 const featuredCars = cars.filter(car => car.featured);

 return (
   <section className="bg-gray-50 py-16"> 
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-600 inline-block"></span>
          Popular New Cars
        </h2>

        <CarList cars={featuredCars} />

      </div>
   </section>
 );
}

export default PopularCars;
