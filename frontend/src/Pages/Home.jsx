import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero';
import Footer from '../Components/Footer';

function Home() {
    const navigate = useNavigate();
    const eventData = [
        {
          image: "https://www.hindustantimes.com/ht-img/img/2023/06/21/1600x900/narendra-modi-Yoga_1687347314338_1687347328015.jpg",
          title: "Yoga for Beginners",
          description: "Start your journey with calming yoga postures.",
        },
        {
          image: "https://www.hindustantimes.com/ht-img/img/2023/06/21/1600x900/narendra-modi-Yoga_1687347314338_1687347328015.jpg",
          title: "Meditation Workshop",
          description: "Learn techniques to enhance mindfulness and clarity.",
        },
        {
          image: "https://www.hindustantimes.com/ht-img/img/2023/06/21/1600x900/narendra-modi-Yoga_1687347314338_1687347328015.jpg",
          title: "Breathwork & Flow",
          description: "Practice deep breathing for better energy flow.",
        },
        {
          image: "https://www.hindustantimes.com/ht-img/img/2023/06/21/1600x900/narendra-modi-Yoga_1687347314338_1687347328015.jpg",
          title: "Ayurveda Talk",
          description: "Explore the benefits of Ayurveda in daily life.",
        },
      ];

  return (
      <div>
        <Navbar/>
        <div
      className="relative w-full h-screen bg-center bg-no-repeat bg-cover flex items-center"
      style={{
        backgroundImage:
          "url('https://akm-img-a-in.tosshub.com/indiatoday/images/story/202106/pic-main-image.jpg?size=690:388')", // use your image URL or import
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  "></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 md:px-12 text-[#fca311]">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Your Space<br />
          Your Practice<br />
          Your Community
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          250+ Free on-demand yoga classes,<br />
          meditations and more...
        </p>
        <button
          onClick={() => navigate("/courses")}
          className="mt-6 px-6 py-3 bg-[#fca311] text-black font-semibold rounded-full hover:bg-[#e68a00] transition"
        >
          Our Courses
        </button>
      </div>
    </div>
      <Hero/>
      <div className="bg-[#fef9f5] py-12 px-4 md:px-10">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
        Latest <span className="text-[#f97316]">Events</span>
      </h2>

      <div className="flex flex-wrap gap-6 justify-center">
        {eventData.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg w-full sm:w-[47%] lg:w-[23%] hover:shadow-xl transition duration-300"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800">{event.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{event.description}</p>
            </div>
          </div>
        ))}

        {/* "More Events" button at the end of the row */}
        <div className="flex items-end">
          <button
            onClick={() => navigate("/event-gallery")}
            className="h-12 px-6 bg-[#f97316] text-white font-semibold rounded-full shadow-md hover:bg-orange-500 transition duration-300"
          >
            More Events
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Home