import cars from "../data/cars";
import CarCard from "../components/cars/CarCard";

function CarService() {
  return (
    <section className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-3xl font-bold mb-10 mt-10">
          Our Vehicles
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          
          {cars.map((car) => (
            <CarCard
              key={car.id}
              {...car}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default CarService;
