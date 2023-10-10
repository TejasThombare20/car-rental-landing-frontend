import React from "react";
import { GoPeople } from "react-icons/go";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFuelPumpDiesel } from "react-icons/bs";
import { IoSpeedometerOutline } from "react-icons/io5";
import { PiSteeringWheel } from "react-icons/pi";
import { useState } from "react";
// import { set } from "mongoose";
import { Carousel } from "@material-tailwind/react";

const CardItem = ({ car }) => {
  const arrayImage = [
    car.image,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Lkq4kfTviGNqSuTzPd8OA7thMDUhUOJv_w&usqp=CAU",
    "https://baybee.co.in/cdn/shop/files/614OBcoOM_L.jpg?v=1686573503",
  ];
  const [count, setcount] = useState("0");

  const handlePreviousButton = () => {
    if (count === 0) {
      setcount(arrayImage.length - 1);
      console.log("count", count);
    } else {
      setcount(count - 1);
      console.log("count", count);
    }
  };

  const handleNextButton = () => {
    if (count === arrayImage.length - 1) {
      setcount(0);
      console.log("count", count);
    } else {
      setcount(count + 1);
      console.log("count", count);
    }
  };

  return (
    <div className="bg-gray-200 border border-gray-50  shadow-lg shadow-gray-200 rounded-lg px-3 py-2 ">
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="  w-full h-[400px] rounded-xl">
          <Carousel
            className="rounded-xl object-cover w-full h-[400px]"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            <img
              src={car.image}
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Lkq4kfTviGNqSuTzPd8OA7thMDUhUOJv_w&usqp=CAU"
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <img
              src="https://baybee.co.in/cdn/shop/files/614OBcoOM_L.jpg?v=1686573503"
              alt="image 3"
              className="h-full w-full object-cover"
            />
          </Carousel>
        </div>
        <div className=" w-full flex justify-between items-center px-2 ">
          <div className="text-2xl text-gray-700 font-semibold flex-initial">
            {car.name}
          </div>
          <div className=" border-2 border-dashed border-blue-500 px-3 py-2  rounded-xl flex-initial ">
            {car.year}
          </div>
        </div>
        <div className="w-full grid grid-cols-2 px-2">
          <div className="flex justify-start items-center  gap-2  ">
            <GoPeople size={20} className="text-blue-500" />
            <div className="text-gray-700 font-semibold">4 people</div>
          </div>
          <div className="flex justify-start items-center gap-2 ">
            <BsFuelPumpDiesel size={20} className="text-blue-500" />
            <div className="text-gray-700 font-semibold">{car.type}</div>
          </div>
          <div className="flex justify-start items-center  gap-2">
            <IoSpeedometerOutline size={20} className="text-blue-500" />
            <div className="text-gray-700 font-semibold">
              {car.milage}/1-litre
            </div>
          </div>
          <div className="flex justify-start items-center gap-2 ">
            <PiSteeringWheel size={20} className="text-blue-500 " />
            <div className="text-gray-700 font-semibold">Automatic</div>
          </div>
        </div>

        <div className="w-full px-2">
          <hr className=" mx-4 h-[2px] bg-slate-400 " />
        </div>

        <div className="w-full flex justify-between items-center px-2 mb-2 ">
          <div className=" flex justify-center items-center gap-1">
            <div className="text-2xl text-gray-700">
              {" "}
              <span className=" font-bold">$</span>
              {car.price}
            </div>
            <div className="font-bold text-gray-700"> /month</div>
          </div>
          <div className="flex justify-center items-center gap-2  ">
            <div className="bg-sky-50 rounded-xl">
              <AiOutlineHeart
                size={25}
                className="p-1 w-full h-full  text-blue-500 "
              />
            </div>
            <div className="bg-blue-500 text-sky-50 font-semibold  rounded-lg px-4 py-2">
              Rent Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
