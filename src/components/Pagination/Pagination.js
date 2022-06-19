import React from "react";
import { Pagination } from "@mui/material";
import "./style/style.css";

function PaginationComp({ setCurrentPage, postsPerPage, totalPosts }) {
  // 1- Create an empty array
  // 2- push the whole number of pages (by doing this: Math.ceil(totalPosts / postsPerPage) )
  // 3- set the Pagination's attribute with this total number.
  const pageNum = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNum.push(i);
  }

  const handleChange = (page) => {
    setCurrentPage(page);
    // When scrooling up, it is done with a transition.
    window.scroll({
      top: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="pagination-container">
      <Pagination
        // On change, call the handleChange function to set the props [ setCurrentPage ] with
        // the number of the current link. In this case the link number is translated as: (e) => handleChange(e.target.textContent)
        onChange={(e) => handleChange(e.target.textContent)}
        count={pageNum.length}
        color="primary"
        hidePrevButton
        hideNextButton
      />
    </div>
  );
}

export default PaginationComp;
