import React from "react";
import HeroImg from "../assets/hero.png";
import Hero1 from "../assets/hero-1.svg";
import Hero2 from "../assets/hero-2.svg";
import Hero3 from "../assets/hero-3.svg";
import Hero4 from "../assets/hero-4.svg";
import HeroBlue from "../assets/heroblue.png";
const Hero = () => {
 
  return (
    <div>
      <div className="max-w-[1370px] h-[650px] mx-auto bg-[#454342] rounded-[25px] flex ">
        <img className="w-[50%] object-cover scale-110" src={HeroImg} alt="" />
        <div className="w-[50%] flex items-center justify-center">
          <div className="text-white leading-[60px] scale-[2]">
            <p className="text-[44px] text-end">Bukhara</p>
            <p className="text-[64px] text-end">Natural</p>
            <p className="text-[88px]">Product</p>
          </div>
        </div>
      </div>
      <div className="mt-[65px] max-w-[1270px] mx-auto  flex justify-between">
        <div className="flex w-[378px] gap-[20px]">
          <img src={Hero1} className="w-[68px] h-[40px]" alt="hero1" />
          <div className="flex flex-col">
            <h3>Free shipping</h3>
            <p className="text-[14px] text-gray-500">
              Free shipping on all orders
            </p>
          </div>
        </div>
        <div className="flex w-[378px] gap-[20px]">
          <img src={Hero2} className="w-[68px] h-[40px]" alt="hero1" />
          <div className="flex flex-col">
            <h3>Money back guarantee</h3>
            <p className="text-[14px] text-gray-500">30-day money back</p>
          </div>
        </div>
        <div className="flex w-[378px] gap-[20px]">
          <img src={Hero3} className="w-[68px] h-[40px]" alt="hero1" />
          <div className="flex flex-col">
            <h3>Online support 24/7</h3>
            <p className="text-[14px] text-gray-500">Technical support 24/7</p>
          </div>
        </div>
        <div className="flex w-[378px] gap-[20px]">
          <img src={Hero4} className="w-[68px] h-[40px]" alt="hero1" />
          <div className="flex flex-col">
            <h3>Secure payment</h3>
            <p className="text-[14px] text-gray-500">
              All payment methods accepted
            </p>
          </div>
        </div>
      </div>
      <div className="w-[1370px] mx-auto h-[322px] hover:shadow-2xl duration-300 hover:shadow-[#4E566F] bg-[#4E566F] mt-[200px] relative rounded-lg flex items-center justify-between p-8">
        <div className="ml-[100px] leading-[70px]">
          <h2 className="text-[80px] font-extrabold text-white">100%</h2>
          <p className="text-xl text-white font-thin">Качество материала</p>
        </div>
        <img
          src={HeroBlue}
          alt="Bukhara Natural Product"
          className="w-[450px] h-[500px] absolute left-[370px] top-[-100px]"
          style={{ objectFit: "cover" }}
        />
        <div className="mr-[90px]">
          <h2 className="text-3xl font-bold text-white">
            'Bukhara Natural Product'
          </h2>
          <p className="text-md text-white mt-2 max-w-xs font-thin">
            yже много лет является компанией, которая производит
            хлопчатобумажные ткани для использования во всем мире
          </p>
          <button className="bg-white text-black font-semibold rounded-[25px] mt-7 px-4 text-[14px] py-[5px] shadow-md">
            Коллекция
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
