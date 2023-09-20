import "./_SearchbarFilter.scss";
import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  MenuItem,
  InputLabel,
  FormControl,
  NativeSelect,
} from "@mui/material";
import { formatName } from "../../utils";

const SearchbarFilter = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Filter");
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (item) => {
    setSelectedFilter(item);
    setIsOpen(false);
  };  

  return (
    <section className="searchbar-filter">
      <input
        className="searchbar-filter__searchbar"
        type="text"
        placeholder="Search"
      />

      <div className="custom-dropdown" ref={dropdownRef}>
        <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
          {formatName(selectedFilter)}
          <span className="triangle">▼</span>
        </div>
        {isOpen && (
          <div className="dropdown-options">
            {categories.map((category, index) => (
              <div
                key={index}
                className="dropdown-option"
                onClick={() => handleOptionClick(category)}
              >
                {formatName(category)}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchbarFilter;
