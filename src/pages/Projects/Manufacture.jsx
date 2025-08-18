import React from "react";
import "./projectleft.css";
import manufacturing from "../../assets/project/manufacturing.jpg";
import Supply_Chain from "../../assets/project/Supply_Chain.jpg";

const ProjectPageLeft = () => {
  return (

    <>
    <div className="dashboard-container">
      <div className="gradient-block"></div>

      <div className="main-box">
        <div className="main-content">
          <div className="tagline">Manufacturing Dashboard</div>
          <div className="dashboard-desc">
        The Manufacturing power BI dashboard provides a comprehensive view of the production process, from raw material inventory to finished goods, enabling manufacturers to identify bottlenecks and optimize the supply chain.​
        </div>
         </div>
      </div>

      <div className="image-box">
        <div className="image-placeholder">
          <img
            src={manufacturing}
            alt="Dashboard Preview"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />
        </div>
      </div>
    </div>
     <div className="projRight-container">
      <div className="projRight-gradient"></div>

      <div className="projRight-mainBox">
        <div className="projRight-mainContent">
          <div className="projRight-tagline">


Supply Chain Management Dashboard</div>
          <div className="projRight-desc">
    The Supply Chain Management power BI dashboard offers real-time visibility into inventory levels, order fulfillment, and shipping status, enabling supply chain professionals to identify issues and improve responsiveness.​
       </div>
        </div>
      </div>

      <div className="projRight-imageBox">
        <div className="projRight-imagePlaceholder">
          <img
            src={Supply_Chain}
            alt="Dashboard Preview"
            style={{
              width: "100%",
              height: "325px",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default ProjectPageLeft;
