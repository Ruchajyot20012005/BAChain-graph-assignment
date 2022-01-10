import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import "./Activity.css";

function Activity({ title, date }) {
  return (
    <div className="activity-element">
      <div className="check-box">
        <CheckIcon sx={{ fontSize: 20 }} />
      </div>
      <div className="activity-info">
        <span className="title">{title}</span>
        <span className="date">{date}</span>
      </div>
    </div>
  );
}

export default Activity;
