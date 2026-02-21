import { Link } from "react-router-dom";

function CarCard({ id, images, name, price }) {
  return (
    <div className="bg-white w-72 rounded-xl shadow hover:shadow-lg transition duration-300">
      <div className="p-5 flex flex-col h-full">
        <img
          src={images.main}
          alt={name}
          className="w-full h-40 object-contain mb-4"
        />

        <h3 className="text-center font-semibold text-gray-800">{name}</h3>
        <p className="text-center text-sm text-black/80 mt-1">
          {price.toLocaleString()} Birr
        </p>

        <Link to={`/cars/${id}`} className="mt-auto">
          <button className="w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 rounded-lg transition">
            View details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CarCard;
