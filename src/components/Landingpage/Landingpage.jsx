import React from 'react';
import { FaStore } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import image1 from '../../assets/image/blackchair.jpg';
import image2 from '../../assets/image/chair1.jpg';
import image3 from '../../assets/image/orangechair.jpg';
import image4 from '../../assets/image/bgorangechair.png';

// import { IoMdSearch } from "react-icons/io";

const Landingpage = () => {
  const chairs = [
    {
      name: 'Nordic Chair',
      price: 50.00,
      image: image1
    },
    {
      name: 'Kruzo Aero Chair',
      price: 78.00,
      image: image2
    },
    {
      name: 'Ergonomic Chair',
      price: 43.00,
      image: image3
    }
  ];

  const features = [
    {
      icon: <FaShoppingCart className="w-6 h-6" />,
      title: 'Fast & Free Shipping',
      description: 'Donec vitae odio quis nisl dapibus malesuada'
    },
    {
      icon: <FaStore className="w-6 h-6" />,
      title: 'Easy to Shop',
      description: 'Donec vitae odio quis nisl dapibus malesuada'
    },
    {
      icon: <FaStore className="w-6 h-6" />,
      title: 'Hassle Free Returns',
      description: 'Donec vitae odio quis nisl dapibus malesuada'
    }
  ];

  return (
    <div>
        {/* Navigation */}
      <nav className="bg-emerald-800 text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold">Modern Furniture</h1>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About us</a>
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">Blog</a>
            <a href="#" className="hover:underline">Contact us</a>
          </div>
          <div className="flex items-center space-x-4">
            <FaShoppingCart className="w-6 h-6 hover:bg-gray-200 duration-300" /> 
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-emerald-800 text-white py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8 px-4">
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl font-bold mb-6">Modern Interior Design Studio</h2>
            <p className="text-lg mb-8">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
            <div className="flex space-x-4">
              <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-medium hover:bg-slate-200 duration-300">Shop Now</button>
              <button className="border-2 border-white px-8 py-3 rounded-full font-medium hover:bg-yellow-500 duration-300">Explore</button>
            </div>
          </div>
          <div className="relative">
            <img src={image4} alt="Modern green sofa" className="h-[320px] w-[350px] object-cover rounded-md" />
          </div>
        </div>
      </section>

      {/* Crafted Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8">Crafted with excellent material.</h3>
          <div className="grid grid-cols-3 gap-8">
            {chairs.map((chair) => (
              <div key={chair.id} className="bg-gray-100 p-6 rounded-lg">
                <img src={chair.image} alt="" className="w-full h-48 object-cover mb-4 rounded" />
                <h4 className="text-lg font-medium">{chair.name}</h4>
                <p className="text-gray-600">${chair.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-8">Why Choose Us</h3>
              <div className="grid grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="mb-4">{feature.icon}</div>
                    <h4 className="text-lg font-medium mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src={image3} alt="Interior design" className="h-[320px] w-[350px] rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 gap-12">
            <div className="grid grid-cols-2 gap-4">
              <img src={image1} alt="Interior 1" className="rounded-lg" />
              <img src={image2} alt="Interior 2" className="rounded-lg" />
              <img src={image3} alt="Interior 3" className="rounded-lg" />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">We Help You Make Modern Interior Design</h3>
              <p className="text-gray-600 mb-8">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-emerald-800 rounded-full"></span>
                  <span>Donec vitae odio quis nisl dapibus malesuada</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-emerald-800 rounded-full"></span>
                  <span>Donec vitae odio quis nisl dapibus malesuada</span>
                </li>
              </ul>
              <button className="bg-black text-white px-8 py-3 rounded-full font-medium">Explore</button>
            </div>
          </div>
        </div>
      </section>

      {/* Product List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-8">
            {chairs.map((chair, index) => (
              <div key={index} className="flex space-x-4">
                <img src={chair.image} alt={chair.name} className="w-24 h-24 object-cover rounded" />
                <div>
                  <h4 className="font-medium">{chair.name}</h4>
                  <p className="text-gray-600 mb-2">Donec vitae odio quis nisl dapibus malesuada</p>
                  <button className="text-sm underline">Read More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* contact us */}
      <section className="py-20 bg-emerald-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3">
            <FaMobileAlt />
            <p>+254 778 136 430</p>
          </div>
          <div>
            <h1 className="text-center font-semibold">Copy right 2024</h1>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Landingpage;