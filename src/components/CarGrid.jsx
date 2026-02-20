import CarCard from "./PopularCars/CarCard";

function CarGrid({cars}){
    return (
        <div>
            {cars.map((cars)=> (
                <CarCard key={cars.id} car= {car} />
            ))}
        </div>
    );
};

export default CarCard;