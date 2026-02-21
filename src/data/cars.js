const cars = [
  {
    id: 1,
    name: "Toyota Corolla",
    price: 2000,
    featured: true,

    description:
      "Reliable, fuel-efficient sedan ideal for city driving and long trips. Comfortable interior with modern safety features.",

    specs: {
      fuel: "Petrol",
      transmission: "Automatic",
      seats: 5,
      mileage: "18 km/l",
      power: "138 HP",
      location: "Addis Ababa",
    },

    features: [
      "Bluetooth",
      "Reverse Camera",
      "Cruise Control",
      "Air Conditioning",
      "ABS",
      "Parking Sensors",
    ],

    images: {
      main: "/cars/corolla.png",
      front: "/cars/corolla.png",
      interior: "/cars/corolla.png",
      side: "/cars/corolla.png",
    },
  },

  {
    id: 2,
    name: "Hyundai Elantra",
    price: 2300,
    featured: true,

    description:
      "A modern sedan with sleek design, smooth performance, and advanced technology for everyday comfort.",

    specs: {
      fuel: "Petrol",
      transmission: "Automatic",
      seats: 5,
      mileage: "17 km/l",
      power: "147 HP",
      location: "Bole",
    },

    features: [
      "Apple CarPlay",
      "Android Auto",
      "Lane Assist",
      "Smart Key",
      "Touchscreen Display",
    ],

    images: {
      main: "/cars/hyundaiElantra.png",
      front: "/cars/elantra-front.png",
      interior: "/cars/elantra-interior.png",
      side: "/cars/elantra-side.png",
    },
  },

  {
    id: 3,
    name: "BYD Seagull",
    price: 2500,
    featured: true,

    description:
      "Compact electric vehicle offering zero emissions, smart tech, and surprisingly spacious comfort.",

    specs: {
      fuel: "Electric",
      transmission: "Automatic",
      seats: 5,
      mileage: "400 km range",
      power: "74 HP",
      location: "Addis Ababa",
    },

    features: [
      "Fast Charging",
      "Digital Dashboard",
      "Keyless Entry",
      "Parking Camera",
      "Touchscreen",
    ],

    images: {
      main: "/cars/BYD.png",
      front: "/cars/byd-front.png",
      interior: "/cars/byd-interior.png",
      side: "/cars/byd-side.png",
    },
  },

  {
    id: 4,
    name: "Toyota Rav4",
    price: 4500,
    featured: true,

    description:
      "Adventure-ready SUV with powerful performance, excellent ground clearance, and premium safety.",

    specs: {
      fuel: "Hybrid",
      transmission: "Automatic",
      seats: 5,
      mileage: "20 km/l",
      power: "203 HP",
      location: "Kazanchis",
    },

    features: [
      "All Wheel Drive",
      "Sunroof",
      "Leather Seats",
      "Blind Spot Monitor",
      "Wireless Charging",
    ],

    images: {
      main: "/cars/RAV4.png",
      front: "/cars/rav4-front.png",
      interior: "/cars/rav4-interior.png",
      side: "/cars/rav4-side.png",
    },
  },

  {
    id: 5,
    name: "Suzuki Dzire",
    price: 3500,
    featured: true,

    description:
      "Affordable compact sedan with excellent fuel economy and smooth handling.",

    specs: {
      fuel: "Petrol",
      transmission: "Manual",
      seats: 5,
      mileage: "22 km/l",
      power: "89 HP",
      location: "Piassa",
    },

    features: [
      "Rear Parking Sensors",
      "Touchscreen",
      "Air Conditioning",
      "ABS",
    ],

    images: {
      main: "/cars/Dezire.png",
      front: "/cars/dzire-front.png",
      interior: "/cars/dzire-interior.png",
      side: "/cars/dzire-side.png",
    },
  },

  {
    id: 6,
    name: "Jetour Dashing",
    price: 5500,
    featured: true,

    description:
      "A futuristic SUV combining aggressive styling with cutting-edge technology.",

    specs: {
      fuel: "Petrol",
      transmission: "Automatic",
      seats: 5,
      mileage: "15 km/l",
      power: "197 HP",
      location: "CMC",
    },

    features: [
      "Panoramic Roof",
      "360 Camera",
      "Ambient Lighting",
      "Voice Control",
    ],

    images: {
      main: "/cars/dashing.png",
      front: "/cars/dashing-front.png",
      interior: "/cars/dashing-interior.png",
      side: "/cars/dashing-side.png",
    },
  },

  {
    id: 7,
    name: "Volkswagen ID4",
    price: 6500,
    featured: true,

    description:
      "Premium electric SUV delivering instant torque, silent driving, and advanced driver assistance.",

    specs: {
      fuel: "Electric",
      transmission: "Automatic",
      seats: 5,
      mileage: "520 km range",
      power: "201 HP",
      location: "Bole",
    },

    features: [
      "Autopilot Assist",
      "Massive Touchscreen",
      "Wireless Charging",
      "Heated Seats",
    ],

    images: {
      main: "/cars/id4.png",
      front: "/cars/id4-front.png",
      interior: "/cars/id4-interior.png",
      side: "/cars/id4-side.png",
    },
  },

  {
    id: 8,
    name: "BMW 3 Series",
    price: 5800,
    featured: false,

    description:
      "Luxury sports sedan engineered for drivers who love performance and premium comfort.",

    specs: {
      fuel: "Petrol",
      transmission: "Automatic",
      seats: 5,
      mileage: "14 km/l",
      power: "255 HP",
      location: "Bole",
    },

    features: [
      "Harman Kardon Audio",
      "Leather Interior",
      "Heads-Up Display",
      "Gesture Control",
    ],

    images: {
      main: "/cars/bmw3.png",
      front: "/cars/bmw-front.png",
      interior: "/cars/bmw-interior.png",
      side: "/cars/bmw-side.png",
    },
  },
];

export default cars;
