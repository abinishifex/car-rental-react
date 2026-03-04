import Aboutcar from "../assets/image.png"

function About() {
  return (
   <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold  mt-12">
        About Us
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
            <div className="grid lg: grid-cols-2 gap-6">
         <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-6">
            Send Us a Message
          </h2>

          <form className="space-y-5">  
          <div className=" flex flex-col">
          <label className=" block text-sm mb-2 font-bold">Full Name *</label>
          <input className="w-full border border-gray-400  rounded-lg p-2 shadow-xl bg-gray-100" type="text" placeholder="Enter your full name" />
          </div>
          
          <div className=" flex flex-col">
            <label className=" block text-sm mb-2 font-bold">Email Address *</label>
            <input className="w-full border border-gray-400  rounded-lg p-2 shadow-xl bg-gray-100" type="text" placeholder="Enter your email" />
          </div>

          <div className=" flex flex-col">
            <label className=" block text-sm mb-2 font-bold">Phone Number </label>
            <input className="w-full border border-gray-400  rounded-lg p-2 shadow-xl bg-gray-100" type="text" placeholder="Enter your phone number" />
          </div>

          <div>
            <label className="block text-sm mb-2">Subject *</label>
            <select className="w-full border border-gray-400 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500">
              <option>Select a subject</option>
              <option>Booking Inquiry</option>
              <option>Pricing Question</option>
              <option>Other</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label className="block text-sm mb-2"> Message *</label>
            <textarea className="w-full border border-gray-400 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500" rows="4" placeholder="How can we help you?"></textarea>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <span className="text-sm">Subscribe to our newsletter</span>
          </div>

          <button type="submit"
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
            Send Message
          </button>
          </form>
         </div>
         <div className="bg-white p-8 rounded-2xl shadow-md space-y-8">

  <h2 className="text-xl font-semibold border-l-4 border-red-600 pl-3">
    Contact Information
  </h2>

  <div>
    <h3 className="font-semibold mb-2">Phone Number</h3>
    <p className="text-gray-600 text-sm">
      +251 912 345 678 <br />
      +251 912 345 679
    </p>
  </div>

  <div>
    <h3 className="font-semibold mb-2">Our Location</h3>
    <p className="text-gray-600 text-sm">
      Haile Gebreselassie St. Addis Ababa, Ethiopia
    </p>
  </div>

  <div>
    <h3 className="font-semibold mb-2">Email Address</h3>
    <p className="text-gray-600 text-sm">
      info@autonest.com
    </p>
  </div>

  <div>
    <h3 className="font-semibold mb-2">Business Hours</h3>
    <p className="text-gray-600 text-sm">
      Monday - Friday: 8:00 AM - 8:00 PM <br />
      Saturday - Sunday: 9:00 AM - 6:00 PM
    </p>
  </div>

</div>
      </div>
    </div>
    
  );
}

export default About;
