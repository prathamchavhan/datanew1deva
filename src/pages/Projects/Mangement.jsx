import React from "react";
import "./projectleft.css";
import energy_mngmt from "../../assets/project/energy_mngmt.jpg";
import marketing_analysis from "../../assets/project/marketing_analysis.png";

const ProjectPageLeft = () => {
  return (

    <>
    <div className="dashboard-container">
      <div className="gradient-block"></div>

      <div className="main-box">
        <div className="main-content">
          <div className="tagline">Energy Management Dashboard</div>
          <div className="dashboard-desc">
           A Sales & Target Power BI dashboard provides a visual comparison between actual sales and targeted sales, enabling businesses to track their progress towards achieving their sales goals. By integrating this dashboard into your website, you can make informed decisions to stay on track with your sales targets and adjust your strategy as needed to maximize revenue.
          </div>
        </div>
      </div>

      <div className="image-box">
        <div className="image-placeholder">
          <img
            src={energy_mngmt}
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

Marketing Analytics Dashboard</div>
          <div className="projRight-desc">
      A KPI Power BI dashboard provides a visual representation of your business's key performance indicators (KPIs), such as revenue growth, customer acquisition, and product performance. By integrating this dashboard into your website, you can easily monitor your KPIs and make data-driven decisions to improve business performance and achieve your goals.
        </div>
        </div>
      </div>

      <div className="projRight-imageBox">
        <div className="projRight-imagePlaceholder">
          <img
            src={marketing_analysis}
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
    </>
  );
};

export default ProjectPageLeft;
