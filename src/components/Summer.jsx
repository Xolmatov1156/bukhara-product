import React from 'react';
import { useNavigate } from 'react-router-dom';
import Summer1 from "../assets/summer-1.jpg";
import Summer2 from "../assets/summer-2.jpg";
import Summer3 from "../assets/summer-3.jpg";
import Summer4 from "../assets/summer-4.jpg";
import Summer5 from "../assets/summer-5.jpg";
import Summer6 from "../assets/summer-6.jpg";
import Summer7 from "../assets/summer-7.jpg";
import Summer8 from "../assets/summer-8.jpg";
import Summer9 from "../assets/fall-3.jpg";
import Summer10 from "../assets/fall-5.jpg";
import Sum from '../assets/summer.png';

const Summer = () => {
    const navigate = useNavigate();

    const images = [
        { src: Summer1, label: "Vintage style" },
        { src: Summer2, label: "Трепещущий одуванчик" },
        { src: Summer3, label: "Французская Ривьера" },
        { src: Summer4, label: "Овечка Долли" },
        { src: Summer5, label: "Альпийские травы" },
        { src: Summer6, label: "Вдохновеные" },
        { src: Summer7, label: "Зелёный лотос" },
        { src: Summer8, label: "Горный василёк" },
        { src: Summer9, label: "Ветка сакуры" },
        { src: Summer10, label: "Оливковая ветвь" },
    ];

    const handleClick = (image) => {
        navigate('/detail', { state: image });
    };

    return (
        <>
            <div className="w-[1370px] mx-auto h-[322px] hover:shadow-2xl duration-300 hover:shadow-[#317E7A] bg-[#317E7A] mt-[150px] relative rounded-lg flex items-center justify-between p-8">
                <div className="ml-[100px] leading-[70px]">
                    <h2 className="text-[80px] font-extrabold text-white">100%</h2>
                    <p className="text-xl text-white font-thin">Качество материала</p>
                </div>
                <img
                    src={Sum}
                    alt="Bukhara Natural Product"
                    className="w-[450px] h-[500px] absolute left-[370px] top-[-100px]"
                    style={{ objectFit: "cover" }}
                />
                <div className="mr-[90px]">
                    <h2 className="text-3xl font-bold text-white">'Bukhara Natural Product'</h2>
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
                <h2 className='text-[45px] font-bold text-center'>Летняя колекция</h2>
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
        </>
    );
};

export default Summer;
