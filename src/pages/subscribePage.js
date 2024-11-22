import axios from "axios";
import { useEffect } from "react";

const SubscribePage = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "tel:*149*01*33%23";
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex flex-col  w-11/12 mx-auto justify-between min-h-screen">
      <img
        alt="voda"
        className="w-full md:w-6/12  mt-4    md:h-auto"
        src="/showmax.jpg"
      />
      <div className="mt-3">
        <div className="mb-4 text-sm text-slate-600 text-center  ">
          <a
            onClick={() => {
              window.open("tel:*149*01*33%23");
            }}
            className="  hover:text-indigo-600 cursor-pointer underline "
          >
            Subscribe
          </a>
        </div>
        <div className="flex space-x-3 text-sm text-slate-600 mb-24 md:mb-4 justify-center">
          <a
            href="https://vodacom.co.tz/privacy"
            target="_blank"
            alt="Privacy Policy"
            className=" hover:text-indigo-600 cursor-pointer underline pb-1"
          >
            Privacy Policy
          </a>
          <a
            href="https://vodacom.co.tz/terms-conditions"
            alt="Terms & conditions"
            target="_blank"
            className=" hover:text-indigo-600 cursor-pointer underline pb-1"
          >
            Terms & conditions
          </a>
        </div>
      </div>
    </div>
  );
};

export default SubscribePage;
