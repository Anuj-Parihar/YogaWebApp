import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0c0f19] text-gray-300 px-6 md:px-16 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm md:text-base">

        {/* About Us */}
        <div>
          <h3 className="text-[#f59e0b] font-semibold text-lg border-l-2 pl-2 border-[#f59e0b] mb-3">
            ABOUT US
          </h3>
          <p>
            Our trusted team delivers innovative solutions, empowering businesses to achieve new heights.
          </p>
          <p className="mt-2">
            Partner with us for sustainable growth and a brighter future.
          </p>
        </div>

        {/* Our Courses */}
        <div>
          <h3 className="text-[#f59e0b] font-semibold text-lg border-l-2 pl-2 border-[#f59e0b] mb-3">
            OUR COURSES
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start">○ Yoga & Wellness</li>
            <li className="flex items-start">○ Mindfulness Training</li>
            <li className="flex items-start">○ Ayurvedic Lifestyle</li>
            <li className="flex items-start">○ Personal Coaching</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-[#f59e0b] font-semibold text-lg border-l-2 pl-2 border-[#f59e0b] mb-3">
            CONTACT INFO
          </h3>
          <p className="mb-2">
            <strong>Address:</strong> E-96, Road No-1, MIA<br />
            Udaipur, Rajasthan-313003
          </p>
          <p className="flex items-center gap-2 mb-2">
            <FaPhoneAlt className="text-[#f59e0b]" /> +91 9414136598, +91 9116007738
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-[#f59e0b]" /> info@protaskssolution.com
          </p>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-[#f59e0b] font-semibold text-lg border-l-2 pl-2 border-[#f59e0b] mb-3">
            FOLLOW US
          </h3>
          <div className="flex space-x-4 mt-2">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-400 mt-10">
        © COPYRIGHT 2024 - PROTASKS SOLUTION
      </div>
    </footer>
  );
};

export default Footer;
