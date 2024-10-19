import React from 'react'
import FallImg from '../assets/fall.png'
import Fall1 from "../assets/fall-1.jpg";
import Fall2 from "../assets/fall-2.jpg";
import Fall3 from "../assets/fall-3.jpg";
import Fall4 from "../assets/fall-4.jpg";
import Fall5 from "../assets/fall-5.jpg";
import Fall6 from "../assets/fall-6.jpg";
import Fall7 from "../assets/fall-7.jpg";
import Fall8 from "../assets/winter-7.jpg";
import Fall9 from "../assets/winter-9.jpg";
import Fall10 from "../assets/winter-10.jpg";
import { useNavigate } from 'react-router-dom';

const Fall = () => {
  const handleClick = (image) => {
    navigate('/detail', { state: image });
};
  const navigate = useNavigate();
    const images = [
        { src: Fall1, label: "Сафари" },
        { src: Fall2, label: "Разноцветный аметист" },
        { src: Fall3, label: "Лепной орнамент" },
        { src: Fall4, label: "Изумруд (A-B)" },
        { src: Fall5, label: "Малахитовая шкатулка" },
        { src: Fall6, label: "Ароматы весны" },
        { src: Fall7, label: "Осенний листопад (A-B)" },
        { src: Fall8, label: "Синий бриз (A-B)" },
        { src: Fall9, label: "Водная синь (A-B)" },
        { src: Fall10, label: "Шотландка" },
      ];
  return (
    <>
    <div className="w-[1370px] mx-auto h-[322px] hover:shadow-2xl duration-300 hover:shadow-[#5F5282] bg-[#5F5282] mt-[150px] relative rounded-lg flex items-center justify-between p-8">
        <div className="ml-[100px] leading-[70px]">
          <h2 className="text-[80px] font-extrabold text-white">100%</h2>
          <p className="text-xl text-white font-thin">Качество материала</p>
        </div>
        <img
          src={FallImg}
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
      <div className='w-[1370px] mx-auto mt-[150px]'>
      <h2 className='text-[45px] font-bold text-center'>Осенняя колекция</h2>
      <p className='text-gray-500 font-thin text-center'>Bukhara Natural Product</p>
      <div className='flex flex-wrap mt-[50px]'>
        {images.map((image, index) => (
          <div key={index} onClick={() => handleClick(image)} className='w-[270px] h-[281px] hover:text-red-600 cursor-pointer duration-300'>
            <img src={image.src} height={200} width={254} alt={`winter${index + 1}`} className='rounded-[20px]' />
            <p className='mt-[10px] text-center'>{image.label}</p>
          </div>
        ))}
      </div>
    </div>
          </>
  )
}

export default Fall