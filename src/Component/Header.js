import React from "react";
import { BsSearch } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { searchCarReducer, searchQueryReducer } from "../Redux/carsSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async (req, res) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/new/searchCars?search=${searchValue}`
      );
      console.log("responseData", response.data);

      if (response.status === 200) {
        dispatch(searchCarReducer(response.data.searchCars));
      }
    } catch (error) {
      console.error("error in searching cars ", error);
    }
  };

  return (
    <div className=" w-full bg-gray-200 rounded-2xl border border-white shadow-xl shadow-gray-300">
      <div className="flex justify-start items-center my-2 gap-6 mx-4 ">
        <div className=" flex justify-between items-center bg-white border border-gray-50 rounded-2xl my-2 w-80  ">
          <input
            type="text"
            value={searchValue}
            placeholder="Search..."
            className="px-4 py-2 rounded-2xl  text-gray-700 outline-none hover:outline-none flex-initial "
            onChange={(e) => {
              dispatch(searchCarReducer(null))
              setSearchValue(e.target.value);
              dispatch(searchQueryReducer(e.target.value));
            }}
          />
          <BsSearch
            className="flex-initial mr-2 cursor-pointer"
            onClick={handleSearch}
          />
        </div>

        <div className="flex justify-center items-center gap-1 text-gray-700 font-semibold">
          <div>Relevance</div>
          <BiChevronDown />
        </div>

        <div className="flex justify-center items-center gap-1 text-gray-700 font-semibold">
          <div>All Brands</div>
          <BiChevronDown />
        </div>
      </div>
    </div>
  );
};

export default Header;
