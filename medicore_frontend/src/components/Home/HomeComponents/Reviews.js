import React, { useState } from "react";
import "../Styles/Reviews.css";

function Reviews() {

  return (
    <div className="review-section" id="reviews">
      <div className="rw-text-content">
        <p className="rw-text-title">
          More over <span className="rw-text-num">1500+ Customers</span>
        </p>

        <p className="rw-text-desc">Don't believe us, Check clients word</p>

        <p className="rw-text-format">
          <span className="rw-text-quote1">''</span>
          <span className="rw-review">tttt</span>
          <span className="rw-text-quote2">''</span>
        </p>

        <div className="rw-authors">
          <div className="rw-names">
            <p className="rw-reviewer-name">tttt</p>
            <p className="rw-reviewer-place">tttt</p>
          </div>

          <div className="rw-btns">
            <button
              className="rw-next-btn"
              type="button"
              // onClick={backBtnClick}
            >
              ←
            </button>
            <button
              className="rw-next-btn"
              type="button"
              // onClick={frontBtnClick}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
