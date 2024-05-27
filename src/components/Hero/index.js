import React, { useState } from 'react';
import Boxes from '../../components/Boxes';

const Hero = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-full  mx-auto overflow-hidden  shadow-lg">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
     
                {images.map((image, index) => (
                    <div className="min-w-full box-border" key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} className="w-full block" />
                    </div>
                ))}
            </div>
            <button
                className="absolute top-0 transform-translate-y-1/2 w-20 h-80  hover:bg-opacity-50 text-white border-none p-2 cursor-pointer"
                onClick={prevSlide}
            >
                <span className='text-5xl text-gray-600'>&#10094;</span>
            </button>
            <button
                className="absolute top-0 right-0 transform-translate-y-1/2 border w-20 h-80 hover:bg-opacity-50 text-white border-none p-2 cursor-pointer"
                onClick={nextSlide}
            >
                 <span className='text-5xl text-gray-600'>&#10095;</span>
            </button>
     
        </div>
    );
};

export default Hero;
