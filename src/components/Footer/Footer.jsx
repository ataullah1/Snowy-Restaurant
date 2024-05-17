import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white mt-10">
      <div className="flex flex-col md:flex-row items-center ">
        <div className="w-full md:w-1/2 bg-gray-800 py-20 text-right md:pr-10 lg:pr-20">
          <div className=" max-w-96 text-center flex flex-col justify-center items-center ml-auto">
            <h3 className="text-white text-[32px] font-medium font-['Inter']">
              CONTACT US
            </h3>
            <div className="text-white text-xl font-medium font-['Inter'] leading-9">
              123 ABS Street, Uni 21, Bangladesh
              <br />
              +88 123456789
              <br />
              Mon - Fri: 08:00 - 22:00
              <br />
              Sat - Sun: 10:00 - 23:00
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-gray-900 py-20 md:pl-10 lg:pl-20">
          <div className="max-w-80 text-center flex flex-col justify-center items-center">
            <h2 className="text-white text-[32px] font-medium font-['Inter']">
              Follow US
            </h2>
            <p className="text-white text-xl font-medium font-['Inter'] leading-9">
              Join us on social media
            </p>
            <div className="flex items-center gap-3 text-2xl pt-6">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
      <p className="text-center py-4">
        Copyright © 2024 - All right reserved by{' '}
        <a
          href="https://www.facebook.com/ataullah0"
          className="text-pink-500 italic font-semibold tracking-wide"
        >
          Md Ataullah
        </a>
      </p>
    </footer>
  );
};

export default Footer;
