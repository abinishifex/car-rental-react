import CarCard from "./CarCard";

function CarList({ cars }){
    return (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {cars.map(car => (
                <CarCard key={car.id} {...car} />
            ))}
        </div>
    );
}

export default CarList;