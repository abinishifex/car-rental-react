import { useState } from "react";

function FilterSection(){

    const [activeTab, setActiveTab] = useState("price");

    const[selectedPrice, setSelectedPrice] = useState(null);

    return (
        <section className=" w-full bg-gray-50  px-6 py-6 mb-5">
            <div className="flex items-center gap-2 mb-6">
                <span className="w-1 h-6 bg-red-600"></span>
                <h2 className="text-lg font-semibold text-gray-900"> 
                    Find New Cars of Your Choice
                </h2>
            </div>

                    <div className="grid grid-cols-4 gap-6 border-b mb-6">
                        <button onClick={function(){
                            setActiveTab("price")
                        }} className={`pb-3 text-sm  border-b-2 font-medium ${
                            activeTab ===  "price" ? " border-red-600  text-gray-900" 
                            : "border-transparent text-gray-500"
                        } `}>
                            Price Range
                        </button>
                        <button onClick={function(){
                            setActiveTab("fuel")
                        }} className={`pb-3 text-sm  border-b-2 font-medium ${
                            activeTab ===  "fuel" ? " border-red-600  text-gray-900" 
                            : "border-transparent text-gray-500"
                        } `}>
                            Fuel Range
                        </button>
                        <button onClick={function(){
                            setActiveTab("body")}} 
                            className={`pb-3 text-sm  border-b-2 font-medium ${
                                activeTab === "body" 
                                ? " border-red-600  text-gray-900"
                                : "border-transparent text-gray-500"
                            }`}>
                            Body Type
                        </button>
                        <button onClick={function(){
                            setActiveTab("more")
                        }} className={`pb-3 text-sm  border-b-2 font-medium ${
                            activeTab ===  "more" ? " border-red-600  text-gray-900" 
                            : "border-transparent text-gray-500"
                        } `}>
                           More
                        </button>
                    </div>

              {activeTab === "price" && (
        <div className="flex flex-wrap gap-3">
          {[
            "Under 2000 ETB",
            "2,000 - 3,000 ETB",
            "3,000 - 4,000 ETB",
            "4,000 - 5,000 ETB",
            "5,000 - 6,000 ETB",
            "Above 6,000 ETB",
          ].map((price) => (
            <button
              key={price}
              onClick={() => setSelectedPrice(price)}
              className={`px-4 py-2 rounded-full border text-sm transition ${
                selectedPrice === price
                  ? "bg-red-600 text-white border-red-600"
                  : "bg-white text-gray-700 hover:border-gray-400"
              }`}
            >
              {price}
            </button>
          ))}
        </div>
      )}


        </section>
    )
}

export default FilterSection;