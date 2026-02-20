import PopularCars from "../components/PopularCars/PopularCars";
import SearchByBrand from "../components/SearchByBrand/SearchByBrand";
import Footer from "../components/footer/Footer";
import FilterSection from "../components/FilterSection";
import CarCard from "../components/cars/CarCard";
import cars from "../data/cars";
function Home() {
  const featuredCars = cars.filter((car) => car.featured);
  return (
    <>
    <section className="w-full h-screen pt-20 relative bg-cover bg-center"
    style={{
        backgroundImage: `url('/src/assets/car.jpg')`,
    }}
    >
      <div className="absolute inset-0 bg-black/60 "></div>

      <div className="relative z-10 max-w-xl ml-auto mr-16 mt-40 text-white">
        <h1 className="text-4xl font-bold mb-4">
        Auto Nest Car <span className="text-red-500">Rental</span>
        </h1>
        <p className="text-sm mb-6">
        Your trusted partner for premium vehicles, smooth rentals,
        and unbeatable car deals.
        </p>

        <button className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded">
        Explore Cars
        </button>
      </div>
      Home page
    </section>

    <SearchByBrand />

    <PopularCars />
     <FilterSection />


    </>
  );
}
export default Home;
