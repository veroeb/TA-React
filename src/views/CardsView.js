import React from "react";
import Card from "../components/Card";
import "../styles/CardsView.css";

const CardsView = () => {
  return (
    <div className="cards-view">
      <h2>TA 1: Card Component with Props</h2>
      <div className="card-container">
        <Card 
          title="Task 1" 
          description="This is the first task" 
          assignedTo="John Doe" 
          startDate="2024-09-10" 
          endDate="2024-09-15" 
        />
        <Card 
          title="Task 2" 
          description="This is the second task" 
          assignedTo="Jane Smith" 
          startDate="2024-09-11" 
          endDate="2024-09-16" 
        />
        <Card 
          title="Task 3" 
          description="This is the third task" 
          assignedTo="Bob Brown" 
          startDate="2024-09-12" 
          endDate="2024-09-17" 
        />
      </div>

      <h2>TA 2: Card Component with Children</h2>
      <div className="card-container">
        <Card>
          <h3>Task 1</h3>
          <p>This is the first task</p>
          <p><strong>Assigned to:</strong> John Doe</p>
          <p><strong>Start Date:</strong> 2024-09-10</p>
          <p><strong>End Date:</strong> 2024-09-15</p>
        </Card>
        <Card>
          <h3>Task 2</h3>
          <p>This is the second task</p>
          <p><strong>Assigned to:</strong> Jane Smith</p>
          <p><strong>Start Date:</strong> 2024-09-11</p>
          <p><strong>End Date:</strong> 2024-09-16</p>
        </Card>
        <Card>
          <h3>Task 3</h3>
          <p>This is the third task</p>
          <p><strong>Assigned to:</strong> Bob Brown</p>
          <p><strong>Start Date:</strong> 2024-09-12</p>
          <p><strong>End Date:</strong> 2024-09-17</p>
        </Card>
      </div>
    </div>
  );
};

export default CardsView;
