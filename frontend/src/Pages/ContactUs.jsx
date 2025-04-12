import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Footer from '../Components/Footer';
import Navbar from './../Components/Navbar';


function ContactUs() {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div>
      <Navbar/>
      <div className="p-6 md:p-12 bg-gray-50">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row md:space-x-8 max-w-7xl mx-auto">
        {/* Feedback Form */}
        <div className="md:w-1/2 w-full bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Feedback Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded"
              required
              pattern="[A-Za-z\s]{3,50}"
              title="Name should be 3-50 letters only."
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded"
              required
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full px-4 py-2 border rounded"
              required
              maxLength={10}
              pattern="\d{10}"
              title="Please enter a 10-digit mobile number"
            />
            <textarea
              placeholder="Feedback"
              className="w-full h-32 px-4 py-2 border rounded resize-none"
              required
            />
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700"
            >
              Submit
            </button>
          </form>

          {showAlert && (
            <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
              ✅ Registration successful!
            </div>
          )}
        </div>

        {/* Contact Info */}
        <div className="md:w-1/2 w-full mt-10 md:mt-0 space-y-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>

          <div className="flex items-start space-x-4 p-6 rounded-xl shadow-md bg-white">
            <FaPhoneAlt className="text-[#0B3159] text-2xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold mb-1">Call Us</h3>
              <p>+35 1234567891</p>
              <p>+35 1234567892</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-6 rounded-xl shadow-md bg-white">
            <FaEnvelope className="text-[#0B3159] text-2xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold mb-1">Message</h3>
              <p>jyotiawasty@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-6 rounded-xl shadow-md bg-white">
            <FaMapMarkerAlt className="text-[#0B3159] text-2xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold mb-1">Our Location</h3>
              <p>221B Baker Street, London NW1 6XE, United Kingdom</p>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="my-12 max-w-7xl mx-auto">
        <iframe
          title="Google Maps - Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.4248528798116!2d-0.16113062332752565!3d51.523766971817004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761acf33628211%3A0x445d7677a88322e1!2s221B%20Baker%20St%2C%20London%20NW1%206XE%2C%20UK!5e0!3m2!1sen!2sin!4v1744489300070!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl shadow-lg"
        ></iframe>
      </div>

      {/* Footer */}
     <Footer/>
    </div>

    </div>
  )
}

export default ContactUs