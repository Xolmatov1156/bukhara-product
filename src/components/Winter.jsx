import React from 'react';
import Winter1 from "../assets/winter-1.jpg";
import Winter2 from "../assets/winter-2.jpg";
import Winter3 from "../assets/winter-3.jpg";
import Winter4 from "../assets/winter-4.jpg";
import Winter5 from "../assets/winter-5.jpg";
import Winter6 from "../assets/winter-6.jpg";
import Winter7 from "../assets/winter-7.jpg";
import Winter8 from "../assets/winter-8.jpg";
import Winter9 from "../assets/winter-9.jpg";
import Winter10 from "../assets/winter-10.jpg";
import { useNavigate } from 'react-router-dom';

const Winter = () => {
  const handleClick = (image) => {
    navigate('/detail', { state: image });
};
const navigate = useNavigate();
  const images = [
    { src: Winter1, label: "Квадраты" },
    { src: Winter2, label: "Овал" },
    { src: Winter3, label: "Круг" },
    { src: Winter4, label: "Прямоугольник" },
    { src: Winter5, label: "Ромб" },
    { src: Winter6, label: "Треугольник" },
    { src: Winter7, label: "Пентагон" },
    { src: Winter8, label: "Шестиугольник" },
    { src: Winter9, label: "Сердце" },
    { src: Winter10, label: "Звезда" },
  ];

  return (
    <div className='w-[1370px] mx-auto mt-[150px]'>
      <h2 className='text-[45px] font-bold text-center'>Зимняя коллекция</h2>
      <p className='text-gray-500 font-thin text-center'>Bukhara Natural Product</p>
      <div className='flex flex-wrap mt-[50px]'>
                    {images.map((image, index) => (
                        <div 
                            key={index} 
                            className='w-[270px] h-[281px] hover:text-red-600 cursor-pointer duration-300'
                            onClick={() => handleClick(image)}
                        >
                            <img src={image.src} height={200} width={254} alt={`summer${index + 1}`} className='rounded-[20px]' />
                            <p className='mt-[10px] text-center'>{image.label}</p>
                        </div>
                    ))}
                </div>
    </div>
  );
}

export default Winter;
