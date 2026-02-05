import { useState } from "react";
import "../styles/search.css";

const classesData = [
  // Class 6
  "Class 6 Maths",
  "Class 6 Science",
  "Class 6 English",
  "Class 6 Hindi",
  "Class 6 Social Science",
  "Class 6 Sanskrit",

  // Class 7
  "Class 7 Maths",
  "Class 7 Science",
  "Class 7 English",
  "Class 7 Hindi",
  "Class 7 Social Science",
  "Class 7 Sanskrit",

  // Class 8
  "Class 8 Maths",
  "Class 8 Science",
  "Class 8 English",
  "Class 8 Hindi",
  "Class 8 Social Science",
  "Class 8 Sanskrit",

  // Class 9
  "Class 9 Maths",
  "Class 9 Science",
  "Class 9 English",
  "Class 9 Hindi",
  "Class 9 Social Science",
  "Class 9 Sanskrit",

  // Class 10
  "Class 10 Maths",
  "Class 10 Science",
  "Class 10 English",
  "Class 10 Hindi",
  "Class 10 Social Science",
  "Class 10 Sanskrit",

  // Class 11
  "Class 11 Maths",
  "Class 11 Physics",
  "Class 11 Chemistry",
  "Class 11 Biology",
  "Class 11 English",
  "Class 11 Computer Science",
  "Class 11 Economics",
  "Class 11 Business Studies",
  "Class 11 Accountancy",

  // Class 12
  "Class 12 Maths",
  "Class 12 Physics",
  "Class 12 Chemistry",
  "Class 12 Biology",
  "Class 12 English",
  "Class 12 Computer Science",
  "Class 12 Economics",
  "Class 12 Business Studies",
  "Class 12 Accountancy",
];


function SearchClass() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredClasses = classesData.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleKeyDown = (e: { key: string; }) => {
    if (!showDropdown) return;

    if (e.key === "ArrowDown") {
      setActiveIndex((prev) =>
        prev < filteredClasses.length - 1 ? prev + 1 : 0
      );
    }

    if (e.key === "ArrowUp") {
      setActiveIndex((prev) =>
        prev > 0 ? prev - 1 : filteredClasses.length - 1
      );
    }

    if (e.key === "Enter" && activeIndex >= 0) {
      setSearchTerm(filteredClasses[activeIndex]);
      setShowDropdown(false);
    }
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Class..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowDropdown(true);
            setActiveIndex(-1);
          }}
          onKeyDown={handleKeyDown}
          onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
          onFocus={() => searchTerm && setShowDropdown(true)}
        />
        <button className="search-btn">🔍</button>
      </div>

      {/* Dropdown */}
      {showDropdown && filteredClasses.length > 0 && (
        <ul className="dropdown">
          {filteredClasses.map((item, index) => (
            <li
              key={index}
              className={`dropdown-item ${
                index === activeIndex ? "active" : ""
              }`}
              onMouseDown={() => {
                setSearchTerm(item);
                setShowDropdown(false);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchClass;
