import React from "react";
import "./projectleft.css";
import Sales_perf from "../../assets/project/Sales_perf.png";
import ecommerce from "../../assets/project/ecommerce.jpg";

const ProjectPageLeft = () => {
  return (
    <>
    <div className="dashboard-container">
      <div className="gradient-block"></div>

      <div className="main-box">
        <div className="main-content">
          <div className="tagline">Sales Performance Dashboard</div>
          <div className="dashboard-desc">
            A sales information Power BI dashboard can provide real-time insights
            into revenue, sales trends, customer acquisition, and other key
            metrics. By integrating this dashboard into your website, you can
            empower your sales team to make data-driven decisions and drive
            business growth.
          </div>
        </div>
      </div>

      <div className="image-box">
        <div className="image-placeholder">
          <img
            src={Sales_perf}
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

{/*e-commerce */}


     <div className="projRight-container">
      <div className="projRight-gradient"></div>

      <div className="projRight-mainBox">
        <div className="projRight-mainContent">
          <div className="projRight-tagline">E-Commerce Dashboard</div>
          <div className="projRight-desc">
            A Revenue vs Budget Power BI dashboard provides a comprehensive view
            of your business's financial performance by comparing actual revenue
            against budgeted revenue. By integrating this dashboard into your
            website, you can make informed decisions to stay on track with
            financial goals and adjust your strategy as needed.
          </div>
        </div>
      </div>

      <div className="projRight-imageBox">
        <div className="projRight-imagePlaceholder">
          <img
            src={ecommerce}
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
