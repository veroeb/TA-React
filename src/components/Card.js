import React from "react";
import "../styles/Card.css";

const Card = ({ title, description, assignedTo, startDate, endDate, children }) => {
  if (title && description && assignedTo && startDate && endDate) {
    return (
      <div className="card">
        <h3>{title}</h3>
        <p>{description}</p>
        <p><strong>Assigned to:</strong> {assignedTo}</p>
        <p><strong>Start Date:</strong> {startDate}</p>
        <p><strong>End Date:</strong> {endDate}</p>
      </div>
    );
  }

  return (
    <div className="card">
      {children}
    </div>
  );
};

export default Card;
