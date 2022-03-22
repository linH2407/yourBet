import React from "react";
import logo1 from "../atoms/logo1.png";
const Footer = () => {
  return (
    <div className="bg-black  rounded-t-xl">
      <div className="py-9 border-b ">
        <div className="px-20 mx-10 flex">
          <div className="border-r pr-7">
            <img src={logo1} alt="logo1" />
            <div className="text-[#6f6f6f] pr-16">
              <p className="text-[#6f6f6f]">Terms & Conditions</p>
              <p className="text-[#6f6f6f]">Privacy Policy</p>
              <p className="text-[#6f6f6f]">AML/KYC Policy</p>
              <p className="text-[#6f6f6f]">Partner program</p>
              <p className="text-[#6f6f6f]">Press</p>
            </div>
          </div>
          <div className="border-r pl-16 pr-16 ml-6">
            <h2>HELP</h2>
            <div className="flex">
              <div>
                <p className="text-[#6f6f6f]">Deposit</p>
                <p className="text-[#6f6f6f]">Withdrawal</p>
                <p className="text-[#6f6f6f]">FAQ</p>
                <p className="text-[#6f6f6f]">Support</p>
                <p className="text-[#6f6f6f]">Other</p>
                <p className="text-[#6f6f6f]">Account protection</p>
              </div>
              <div>
                <p className="text-[#6f6f6f]">Support</p>
                <p className="text-[#6f6f6f]">Other</p>
                <p className="text-[#6f6f6f]">Account protection</p>
              </div>
            </div>
          </div>
          <div className="border-r mx-6">
            <div className="px-14 mx-5 ml-6 mr-8">
              <h2>SPORTS</h2>
              <div>
                <p className="text-[#6f6f6f]">Live betting</p>
                <p className="text-[#6f6f6f]">Mobile app</p>
                <p className="text-[#6f6f6f]">Mobile version</p>
                <p className="text-[#6f6f6f]">CashOut</p>
                <p className="text-[#6f6f6f]">Video Streams</p>
              </div>
            </div>
          </div>
          <div className="pl-16 ">
            <div className="text-[#6f6f6f]">
              <h2>PAYMENT METHOD</h2>
              <div className="flex justify-between mt-3">
                <i className="fa-brands fa-cc-visa"></i>
                <i className="fa-brands fa-adversal"></i>
                <i className="fa-brands fa-amilia"></i>
                <i className="fa-solid fa-baht-sign"></i>
              </div>
            </div>
            <div className="text-[#6f6f6f] mt-4">
              <h2>SOCIAL NETWORK</h2>
              <div className="flex justify-between mt-3">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-pinterest"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2 px-20 ml-10 text-[#6f6f6f]">
        <p className="text-[#6f6f6f]">All rights reserved 2021 @</p>
      </div>
    </div>
  );
};

export default Footer;
