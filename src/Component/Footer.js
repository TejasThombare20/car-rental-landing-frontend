import React from "react";
import {useDispatch,useSelector} from "react-redux"
import { pageNoReducer } from "../Redux/carsSlice";
import {NavLink} from 'react-router-dom'

const Footer = () => {
    const dispatch = useDispatch();
    const pageNumber = useSelector((state)=>state.car.pageNO);
    console.log(" page number in footer", pageNumber);

  const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleClick = (element) => {
    dispatch(pageNoReducer(element))

  };

  return (
    <div className="w-full flex justify-between items-center  bg-gray-200 border border-slate-100 drop-shadow-lg shadow-gray-200 rounded-xl px-2 py-1  ">
        <div className="flex-initial ">
          {pageNumber} from 10 
        </div>
      <div className="flex justify-center items-center gap-4 my-2 flex-initial ">
        {Array.map((element) => (
          <NavLink className="  bg-gray-100 border text-center h-10 w-10 border-white px-2 py-2 text-gray-700 font-semibold rounded-lg cursor-pointer"
           key={element._id}
          onClick={()=>handleClick(element)}
          to={`/page/:${element}`}>
            {element}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Footer;
