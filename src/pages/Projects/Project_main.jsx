// src/pages/services/Cloudbi.jsx
import React, { useEffect } from "react";
import "./Project_main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sales from "./Sales.jsx";
import Conversion from "./Conversion.jsx";
import Mangement from "./Mangement.jsx";
import Drive from "./Sales_overview.jsx";
import Manufacture from "./Manufacture.jsx";
import Socialmedia from "./Socialmedia.jsx";
import Project_main from "../../assets/project/Project_main.jpeg";


const ProjectPage = () => 
  {

  return ( 
    <div className="cloudbi-page">
      {/* Hero Section */}
      <div className="container py-5">
        <div className="row align-items-center cloudbi-row">
          <div className="col-md-5 mb-4 mb-md-0 me-4">
            <img
              src={Project_main}
              alt="Project_main"
              className="cloudbi-img"
            />
          </div>

          <div className="col-md-6">
            <div className="cloudbi-card" style={{height:'270px'}}>
              <h3 className="cloudbi-title">Project</h3>
              <p className="cloudbi-text" style={{ fontSize: '18px', lineHeight: '1.6'}}>
                Discover our stunning project dashboards, showcasing data turned
                into actionable insights. Gain a competitive edge with our
                visually captivating data visualizations.
              </p>
            </div>
          </div>
        </div>
      </div>
   


<Sales/>
<Conversion/>
<Mangement/>
<Drive/>
<Manufacture/>
<Socialmedia/>
   </div>

  );
};

export default ProjectPage;
