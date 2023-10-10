import React from "react";
import CardItem from "./CardItem";
import axois from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCarDataReducer } from "../Redux/carsSlice";
import Loader from "./Loader";
import { API } from "../Utils/utils";

const Card = () => {
  const dispatch = useDispatch();

  const carsData = useSelector((state) => state.car.CarList);
  console.log("carsData", carsData);

  const pageNumber = useSelector((state) => state.car.pageNO);
  console.log("pageNumber : ", pageNumber);

  const searchList = useSelector((state) => state.car.SearchList);
  console.log("searchList : -", searchList);

  const searchQuery = useSelector((state) => state.car.searchQuery)

  const [carData, setCarData] = useState([]);

  useEffect(() => {
    fetchAllCars();
  }, [pageNumber]);

  const fetchAllCars = async () => {
    try {
      const response = await axois.get(
        `${API}/api/new/fetctAllCars/page/${pageNumber}`
      );
      console.log("responseData", response.data);
      const data = response.data.cars;
      dispatch(setCarDataReducer(data));
      setCarData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {searchList && searchList.length >0 && searchQuery && (
        <div className="bg-slate-200 rounded-2xl p-2 border-2 border-black shadow shadow-slate-200 ">
          <div className="text-slate-700 font-semibold text-2xl">Search Result : </div>
          <div className="grid grid-cols-3 gap-6 ">
            {searchList.map((car) => (
              <CardItem id={car.id} car={car} />
            ))}
          </div>
        </div>
      )}

      {console.log("carsData -", carsData)}
      {carsData.length >0 ? (
        <div className="grid grid-cols-3 gap-6 ">
          {/* {console.log("carData", carData)} */}
          {carsData.map((car) => (
            <div>
              <CardItem id={car.id} car={car} />
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="w-full h-[590px]  ">
            <Loader />
          </div>
        </>
      )}
    </>
  );
};

export default Card;
