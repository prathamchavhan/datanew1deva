import React from "react";
import "./projectleft.css";
import Social_media from "../../assets/project/Social_media.webp";
import education from "../../assets/project/education.jpg";

const ProjectPageLeft = () => {
  return (
    <>
    <div className="dashboard-container">
      <div className="gradient-block"></div>

      <div className="main-box">
        <div className="main-content">
          <div className="tagline">
Social Media Analytics Dashboard</div>
          <div className="dashboard-desc">
           The Social Media Analytics power BI dashboard provides 
           a comprehensive view of social media performance, 
           analyzing metrics such as engagement, reach, sentiment, 
           and follower growth across multiple platforms.​
          </div>
        </div>
      </div>

      <div className="image-box">
        <div className="image-placeholder">
          <img
            src={Social_media}
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
          <div className="projRight-tagline">Education Dashboard</div>
          <div className="projRight-desc">
           The Education Dashboard power BI dashboard provides insights into student performance, 
           attendance, and engagement, enabling educators to identify trends and make data-driven 
           decisions to improve learning outcomes.​
          </div>
        </div>
      </div>

      <div className="projRight-imageBox">
        <div className="projRight-imagePlaceholder">
          <img
            src={education}
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
