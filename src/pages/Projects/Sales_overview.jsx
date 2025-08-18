import React from "react";
import "./projectleft.css";
import Sales_overview from "../../assets/project/Sales_overview.png";
import financial from "../../assets/project/financial.jpg";

const ProjectPageLeft = () => {
  return (

    <>
    <div className="dashboard-container">
      <div className="gradient-block"></div>

      <div className="main-box">
        <div className="main-content">
          <div className="tagline">Sales Overview - Global</div>
          <div className="dashboard-desc">
         A Sales Overview - Global Power BI dashboard provides a comprehensive view of your business's global sales performance, allowing you to track sales trends, revenue growth, and customer acquisition by region or product. By integrating this dashboard into your website, you can gain valuable insights into your global sales operations and make informed decisions to improve business performance
        </div>
         </div>
      </div>

      <div className="image-box">
        <div className="image-placeholder">
          <img
            src={Sales_overview}
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

Financial Dashboard​</div>
          <div className="projRight-desc">
    A Financial Dashboard Power BI dashboard provides a comprehensive view of your business's financial performance, including metrics such as revenue, expenses, cash flow, and profitability. By integrating this dashboard into your website, you can gain valuable insights into your financial operations and make informed decisions to improve business performance.
       </div>
        </div>
      </div>

      <div className="projRight-imageBox">
        <div className="projRight-imagePlaceholder">
          <img
            src={financial}
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
