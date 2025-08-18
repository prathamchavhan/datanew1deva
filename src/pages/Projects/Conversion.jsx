import React from "react";
import "./projectleft.css";
import sales_conversion from "../../assets/project/sales_conversion.jpg";
import retail_analytics from "../../assets/project/retail_analytics.jpg";

const ProjectPageLeft = () => {
  return (

    <>
    <div className="dashboard-container">
      <div className="gradient-block"></div>

      <div className="main-box">
        <div className="main-content">
          <div className="tagline">Sales Conversion
 Dashboard</div>
          <div className="dashboard-desc">
           A Sales Conversion Power BI dashboard can help you track the number of leads generated and how many of those leads converted into sales. By integrating this dashboard into your website, you can identify areas of the sales funnel that need improvement and make data-driven decisions to improve conversion rates and drive business grow
          </div>
        </div>
      </div>

      <div className="image-box">
        <div className="image-placeholder">
          <img
            src={sales_conversion}
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
Retail Analytics <span>Dashboard</span></div>
          <div className="projRight-desc">
          A Global Sales Power BI dashboard provides a visual representation of sales data from around the world, allowing businesses to track and analyze sales performance by region, product, or other key metrics. By integrating this dashboard into your website, you can gain valuable insights into your global sales operations and make informed decisions to improve business performance.
          </div>
        </div>
      </div>

      <div className="projRight-imageBox">
        <div className="projRight-imagePlaceholder">
          <img
            src={retail_analytics}
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
