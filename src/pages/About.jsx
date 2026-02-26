import Aboutcar from "../assets/image.png"

function About() {
  return (
   <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold  mt-12">
        Contact Us
      </h1>

      <div className="grid grid-cols-2 sm:grid-row-1 gap-6">
        <div className="bg-gray-100 max-w-xl p-8 rounded-2xl mt-6 shadow-md ">
          <h1>About us</h1>
          <p>
            Founded in 2025, Auto-Nest Car Rental emerged from
             a simple idea: making car rental effortless, affordable, 
             and reliable for everyone. What started as a small local service
              has grown into a trusted name in vehicle rentals.
            We believe that every journey should start with confidence. 
            That's why we maintain our fleet to the highest standards and
             provide transparent pricing with no hidden fees.
          </p>
        
        </div>
        <div className="bg-gray-100 p-8 max-w-xl V rounded-2xl mt-6 shadow-md ">
        <img src={Aboutcar} alt="imageof" className="rounded-3xl" />
        </div>
      </div>
    </div>
  );
}

export default About;
