"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const topDestinations = [
  {
    name: "Uttarkhand",
    image: "/uttarakhand.webp",
  },
  {
    name: "Jaipur",
    image: "/jaipur.jpg",
  },
  {
    name: "Amritsar",
    image: "/amritsar.jpg",
  },
];

const trendingDestinations = [
  {
    name: "Mumbai, Maharashtra",
    description:
      "Mumbai is the financial capital of India, known for its vibrant culture and iconic landmarks.",
    image: "/mumbai.jpg",
  },
  {
    name: "Delhi, Delhi",
    description:
      "Delhi is the capital city of India, rich in history and home to numerous monuments and museums.",
    image: "/delhi.jpg",
  },
  {
    name: "Bangalore, Karnataka",
    description:
      "Bangalore is the tech hub of India, known for its pleasant weather and bustling IT industry.",
    image: "/Bangalore.jpg",
  },
  {
    name: "Jaipur, Rajasthan",
    description:
      "Jaipur, also known as the Pink City, is famous for its palaces, forts, and vibrant bazaars.",
    image: "/jaipur.jpg",
  },
  {
    name: "Kolkata, West Bengal",
    description:
      "Kolkata is known for its colonial architecture, cultural festivals, and delicious cuisine.",
    image: "/Kolkata.jpg",
  },
  {
    name: "Goa, Goa",
    description:
      "Goa is famous for its stunning beaches, vibrant nightlife, and Portuguese heritage.",
    image: "/goa.jpg",
  },
  {
    name: "Amritsar, Punjab",
    description:
      "Amritsar is home to the Golden Temple, a significant spiritual site for Sikhs, and known for its rich history.",
    image: "/amritsar.jpg",
  },
  {
    name: "Udaipur, Rajasthan",
    description:
      "Udaipur, the City of Lakes, is known for its beautiful palaces, serene lakes, and romantic ambiance.",
    image: "/udaipur.webp",
  },
  {
    name: "Varanasi, Uttar Pradesh",
    description:
      "Varanasi, one of the oldest cities in the world, is a spiritual hub known for its ghats and temples.",
    image: "/Varanasi.jpg",
  },
  {
    name: "Mysore, Karnataka",
    description:
      "Mysore is known for its royal heritage, the grand Mysore Palace, and the vibrant Dasara festival.",
    image: "/mysore.jpg",
  },
  {
    name: "Shimla, Himachal Pradesh",
    description:
      "Shimla, a popular hill station, is known for its colonial architecture, scenic beauty, and pleasant climate.",
    image: "/shimla.webp",
  },
];

export default function LandingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startAutoSlide = useCallback(() => {
    stopAutoSlide(); // Clear any existing interval
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds
  }, []);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [startAutoSlide]);

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === trendingDestinations.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? trendingDestinations.length - 3 : prevIndex - 1
    );
  };

  const handleMouseEnter = () => {
    stopAutoSlide();
  };

  const handleMouseLeave = () => {
    startAutoSlide();
  };
  return (
    <div className="bg-[#FFCBA5] min-h-screen">
      <header className="p-4 flex justify-between items-center">
        <Image src="/placeholder.svg" alt="Logo" width={40} height={40} />
        <nav className="flex space-x-4">
          {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
          <a href="#" className="text-[#4A0E0E]">
            Destination
          </a>
          {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
          <a href="#" className="text-[#4A0E0E]">
            Tour Guide
          </a>
          {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
          <a href="#" className="text-[#4A0E0E]">
            FAQ&rsquo;s
          </a>
          {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
          <a href="#" className="text-[#4A0E0E]">
            Blogs
          </a>
          <Button className="bg-[#4A0E0E] text-white rounded-full px-4 py-1 -mt-2">
            Let&rsquo;s Talk
          </Button>
        </nav>
      </header>

      <main className="flex flex-col md:flex-row items-center justify-between px-8 py-12 max-w-6xl mx-auto">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl font-bold text-[#4A0E0E] mb-4">
            Discover <span className="text-[#FF5722]">INDIA</span>
          </h1>
          <h2 className="text-3xl font-semibold text-[#4A0E0E] mb-4">
            Where every
            <br />
            corner tells a<br />
            <span className="text-[#FF5722]">STORY</span>
          </h2>
          <p className="text-[#4A0E0E] mb-6 max-w-md">
            Discover India culture tradition and diversity of food that will
            enhance your feeling for Indian culture
          </p>
          <Button className="bg-[#4A0E0E] text-white px-8 py-2 rounded-full text-lg">
            Explore
          </Button>
        </div>
        <div className="md:w-1/2">
          <Image src="/india.png" alt="India Map" width={500} height={500} />
        </div>
      </main>

      {/* Booking Form */}
      <section className="bg-white max-w-4xl mx-auto p-6 rounded-lg shadow-lg -mt-8 relative z-10">
        <form className="flex flex-wrap -mx-2">
          <div className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4">
            <label className="block text-sm font-medium mb-1">
              Destination
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Exploring India"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4">
            <label className="block text-sm font-medium mb-1">Check In</label>
            <input type="date" className="w-full p-2 border rounded" />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4">
            <label className="block text-sm font-medium mb-1">Check Out</label>
            <input type="date" className="w-full p-2 border rounded" />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4">
            <label className="block text-sm font-medium mb-1">
              Room & Person
            </label>
            <select className="w-full p-2 border rounded">
              <option>2 Adults, 1 Room</option>
              <option>2 Adults, 2 Rooms</option>
              <option>4 Adults, 2 Rooms</option>
            </select>
          </div>
        </form>
      </section>

      {/* Our Top Values */}
      <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Our Top Values Section */}
        <div className="text-center mb-12">
          <h2 className="text-gray-600 text-lg mb-2">What we serve</h2>
          <h3 className="text-4xl font-bold text-[#4A0E0E] mb-2">
            Our Top Values
          </h3>
          {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <div className="w-48 h-1 bg-[#4A0E0E] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: (
                // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto mb-4"
                  viewBox="0 0 20 20"
                  fill="#4A0E0E"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              ),
              title: "Home Stay",
              description:
                "Best Home Stay to experience the tradition with locals",
            },
            {
              icon: (
                // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto mb-4"
                  viewBox="0 0 20 20"
                  fill="#4A0E0E"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              ),
              title: "Explore India",
              description:
                "Explore the best places in India with Namaste Kutumb",
            },
            {
              icon: (
                // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto mb-4"
                  viewBox="0 0 20 20"
                  fill="#4A0E0E"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              ),
              title: "Local Guides",
              description:
                "Get the best Experience from the Local people that will guide for every place and tradition",
            },
            {
              icon: (
                // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto mb-4"
                  viewBox="0 0 20 20"
                  fill="#4A0E0E"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              ),
              title: "Easy Booking",
              description:
                "Get the best Experience from the Local people that will guide for every place and tradition",
            },
          ].map((item, index) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              className="bg-orange-200 p-6 rounded-lg text-center"
            >
              {item.icon}
              <h4 className="text-xl font-bold text-[#4A0E0E] mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Stats */}
      <section className="bg-orange-200 py-12">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex justify-center items-center lg:w-1/2 mb-8 lg:mb-0">
            <Image
              src="/kathakali.png"
              alt="Traditional Kathakali Dancer"
              width={400}
              height={400}
              className="rounded-lg transform scale-x-[-1] ml-9"
            />
          </div>
          <div className="lg:w-1/3 lg:pl-16">
            <h3 className="text-4xl font-bold text-[#4A0E0E] mb-8">
              With Our Experience We Will Serve You
            </h3>
            <div className="flex justify-between">
              {[
                { number: "100+", text: "Holiday Packagte" },
                { number: "200+", text: "Luxury Home Stay" },
                { number: "15+", text: "Travel Places" },
              ].map((item, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <div key={index} className="text-center">
                  <p className="text-4xl font-bold text-[#B91C1C]">
                    {item.number}
                  </p>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="bg-orange-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#4A0E0E] text-center mb-2">
            Explore Top Destinations by Region
          </h2>
          {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <div className="w-96 h-1 bg-[#4A0E0E] mx-auto mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {topDestinations.map((destination, index) => (
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={index}
                className={`relative rounded-2xl overflow-hidden ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <Image
                  src={destination.image}
                  alt={destination.name}
                  width={index === 0 ? 800 : 400}
                  height={index === 0 ? 600 : 300}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 px-4 py-2 rounded-lg">
                  <h3 className="text-xl font-bold text-[#4A0E0E]">
                    {destination.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-4xl font-bold text-[#4A0E0E] text-center mb-2">
            Top Trending Destinations
          </h2>
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-96 h-1 bg-[#4A0E0E] mx-auto mb-8" />

            <div className="overflow-hidden">
              <div
                className="flex justify-center space-x-5 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
              >
                {trendingDestinations.map((destination, index) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  <div key={index} className="flex-none w-1/3">
                    <div className="relative rounded-2xl overflow-hidden">
                      <Image
                        src={destination.image}
                        alt={destination.name}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                        <h3 className="text-white font-bold">
                          {destination.name}
                        </h3>
                        <p className="text-white text-sm">
                          {destination.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button
              onClick={prevSlide}
              className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            >
              <ChevronLeft className="w-6 h-6 text-[#4A0E0E]" />
            </button>
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button
              onClick={nextSlide}
              className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            >
              <ChevronRight className="w-6 h-6 text-[#4A0E0E]" />
            </button>
          </div>
        </div>
      </div>

      {/* Customer Testimonial */}
      <section className="bg-[#FFCBA5] py-16 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl text-[#4A0E0E] mb-2">Our Experience</h2>
          <h3 className="text-5xl font-bold text-[#B91C1C] mb-8">
            What Our Customer
            <br />
            Say About Us
          </h3>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <p className="text-xl text-[#4A0E0E] font-semibold mb-4">
                The best way to explore INDIA is with Namaste Kutumb,
                <br />
                we have served more than 200+
                <br />
                Foreign Tourists and 400+ Indian Tourist
              </p>
              <div className="flex space-x-4 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Image
                    key={i}
                    src="/placeholder.svg"
                    alt={`Customer ${i}`}
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((i) => (
                  // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-lg relative">
              <p className="text-[#4A0E0E] mb-4">
                With Namste Kutumb I have received the best experience I can
                every wish for, I really love this concept of Home Stay Option ,
                where we can communicate with the local people and know more
                about their tradition
              </p>
              <p className="text-[#B91C1C] font-semibold">Mitchel Marsh</p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/demo.png"
              alt="Indian Palace Illustration"
              width={800}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Large opening quotation mark */}
        <div
          className="absolute top-16 right-8 text-[#B91C1C] text-9xl"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          &quot;
        </div>

        {/* Large closing quotation mark */}
        <div
          className="absolute bottom-48 right-8 text-[#B91C1C] text-9xl rotate-180"
          style={{ fontFamily: "Georgia, serif" }}
        >
          &quot;
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4A0E0E] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Namaste Kutumb</h3>
              <p className="text-sm">
                Discover the beauty and culture of India with our expertly
                curated tours and experiences.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-300 transition-colors"
                  >
                    Home
                  </a>
                </li>
                {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-300 transition-colors"
                  >
                    Destinations
                  </a>
                </li>
                {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-300 transition-colors"
                  >
                    Tour Packages
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-300 transition-colors"
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li>123 Tourism Street, Delhi, India</li>
                <li>Phone: +91 123 456 7890</li>
                <li>Email: info@namastekutumb.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-sm mb-4">
                Subscribe to our newsletter for the latest updates and offers.
              </p>
              <form className="space-y-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white text-black rounded-full"
                />
                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-colors"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              &copy; 2024 Namaste Kutumb. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="bg-white text-[#4A0E0E] rounded-full p-2 hover:bg-orange-300 transition-colors"
              >
                <FontAwesomeIcon icon={faFacebookF} className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-white text-[#4A0E0E] rounded-full p-2 hover:bg-orange-300 transition-colors"
              >
                <FontAwesomeIcon icon={faTwitter} className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-white text-[#4A0E0E] rounded-full p-2 hover:bg-orange-300 transition-colors"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-white text-[#4A0E0E] rounded-full p-2 hover:bg-orange-300 transition-colors"
              >
                <FontAwesomeIcon icon={faYoutube} className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
