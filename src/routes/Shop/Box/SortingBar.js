import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faThLarge } from "@fortawesome/free-solid-svg-icons";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import React from "react";

function SortingBar(props) {
    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (
    <div className="sorting-bar">
      {/* =============================== */}
      <div
        data-aos="fade-right"
        data-aos-duration="900"
        data-aos-offset="100"
        className="paragraph-content"
      >
        <p>
          Page {props.currentPage} / Showing - {props.resultNumber} results
        </p>
      </div>
      <div className="sorting-side">
        {/* =============================== */}
        {/* ============ Start List of Sorting ============ */}
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-autowidth-label">Sort</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={age}
            onChange={handleChange}
            autoWidth
            label="Age"
          >
            <MenuItem
              onClick={() => {
                props.setState("def");
              }}
              value={"def"}
            >
              Default
            </MenuItem>
            {/* -------------- */}

            <MenuItem
              onClick={() => {
                props.setState("lth");
              }}
              value={"lth"}
            >
              From Low to High
            </MenuItem>
            {/* -------------- */}

            <MenuItem
              onClick={() => {
                props.setState("htl");
              }}
              value={22}
            >
              From High to Low
            </MenuItem>
            {/* -------------- */}
            <MenuItem
              onClick={() => {
                props.setState("best");
              }}
              value={26}
            >
              Best Selling
            </MenuItem>
            {/* -------------- */}
          </Select>
        </FormControl>
        {/* ============ End List of Sorting ============ */}
        {/* =============================== */}
        <div className="icon-container">
          <FontAwesomeIcon
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-offset="650"
            onClick={(e) => {
              e.preventDefault();
              const cardContainer = document.querySelector(".box-wrapper");
              cardContainer.classList.add("box-wrapper-list-view");
            }}
            icon={faList}
          />
          <FontAwesomeIcon
            data-aos="fade-up"
            data-aos-duration="1400"
            data-aos-offset="700"
            onClick={(e) => {
              e.preventDefault();
              const cardContainer = document.querySelector(".box-wrapper");
              cardContainer.classList.remove("box-wrapper-list-view");
            }}
            icon={faThLarge}
          />
        </div>
        {/* =============================== */}
      </div>
    </div>
  );
}

export default SortingBar;
