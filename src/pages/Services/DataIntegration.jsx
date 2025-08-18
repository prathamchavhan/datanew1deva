// src/pages/services/Cloudbi.jsx
import React, { useEffect } from "react";
import "./service.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import DataIntegr_main from "../../assets/services/DataIntegr_main.png";
import DataIntegr_vdo from "../../assets/services/DataIntegr_vdo.mp4";
import DataIntegr_1 from "../../assets/services/DataIntegr_1.png";
import DataIntegr_2 from "../../assets/services/DataIntegr_2.png";
import DataIntegr_3 from "../../assets/services/DataIntegr_3.png";
import DataIntegr_4 from "../../assets/services/DataIntegr_4.png";
import DataIntegr_5 from "../../assets/services/DataIntegr_5.png";
import mongodb from "../../assets/services/tools/mongodb.png"; // Corrected import pat
import oracle from "../../assets/services/tools/oracle.png";
import qlik from "../../assets/services/tools/qlik.png";
import ibm from "../../assets/services/tools/ibm.png";
import tableau from "../../assets/services/tools/tableau.png";
import hadoop from "../../assets/services/tools/hadoop.png";
import thought from "../../assets/services/tools/thought.png";
import microstrategy from "../../assets/services/tools/microstrategy.png";
import sqlserver from "../../assets/services/tools/sqlserver.png";
import azure from "../../assets/services/tools/azure.png";
import snowflake from "../../assets/services/tools/snowflake.png";
import looker from "../../assets/services/tools/looker.png";
import mysql from "../../assets/services/tools/mysql.png";
import informatica from "../../assets/services/tools/informatica.png";
import powerbi from "../../assets/services/tools/powerbi.png";
import powerapp from "../../assets/services/tools/powerapp.png";
import bigquery from "../../assets/services/tools/bigquery.png";
import amazon from "../../assets/services/tools/amazon.png";
import datastudio from "../../assets/services/tools/datastudio.png";
import powerautomate from "../../assets/services/tools/powerautomate.png";
import microsoft from "../../assets/services/tools/microsoft.png";
import postgresql from "../../assets/services/tools/postgresql.png";
const DataIntegration = () => 
  {

    useEffect(() => {
    const lefts = document.querySelectorAll('.slide-left');
    const rights = document.querySelectorAll('.slide-right');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('slide-left')) {
              entry.target.classList.add('animate-left');
            }
            if (entry.target.classList.contains('slide-right')) {
              entry.target.classList.add('animate-right');
            }
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.3 }
    );

    [...lefts, ...rights].forEach(el => observer.observe(el));
  }, []);
  return (
    <div className="cloudbi-page">
      {/* Hero Section */}
      <div className="container py-5">
      <div className="row align-items-center" style={{ paddingTop: '0px', paddingLeft: '0px' }}>
  <div className="col-md-5 mb-4 mb-md-0 me-4">
    <img
      src={DataIntegr_main}
      alt="Cloud BI"
      className="img-fluid rounded shadow"
      style={{
        height: "400px",
        width: "100%",
        objectFit: "cover",
        marginTop: '0px',
        marginLeft: '0px'
      }}
    />
  </div>

          <div className="col-md-6">
            <div
              className="p-4 px-4 text-white bg-dark"
              style={{
                border: '2px solid #00ffff',
                height: '270px',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderRadius: '15px',
                boxShadow: 'inset 0 0 30px rgba(255, 255, 255, 0.2)'
              }}
            >
              <h3 className="text-center fw-bold underline-hover" style={{
                background: 'linear-gradient(90deg, #29F1E5 0%, #00BCEB 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                cursor: 'pointer',
                fontSize: '30px',
              }}>
                
       Data Integration and Warehousing
              </h3>
              <p className="mb-0 mt-3" style={{ fontSize: '16px', lineHeight: '1.6' }}>
             Data integration and warehousing services involve combining data from different sources to create a unified view of the business and storing, managing, and analyzing it in a centralized repository. 
             These services enable businesses to gain valuable insights from their data and make informed decisions.
              Our company provides end-to-end data integration and warehousing services using the latest tools and technologies to ensure that your data is stored securely and can be easily accessed for analysis, reporting, and decision-making.



              </p>
            </div>
          </div>
        </div>
      </div>






      {/*What is Data Integration and Warehousing ?*/}
<section className="container my-5">
  <div
    className="row text-white bg-dark border border-white rounded-4"
    style={{
      borderWidth: 'px',
      borderStyle: 'solid',
      boxShadow: 'inset 0 0 30px rgba(255, 255, 255, 0.3)',
    }}
  >
    <div className="col-md-6 p-4 px-4 border-end d-flex flex-column justify-content-center">
      <h3
        className="fw-semibold mb-3 underline-hover"
        style={{
          background: 'linear-gradient(90deg, #29F1E5 0%, #00BCEB 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          cursor: 'pointer',
          fontSize: '30px',
        }}
      >
        What is Data Integration and Warehousing ?
      </h3>
      <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
        Data integration and warehousing services are essential tools for managing and analyzing large volumes of data.
         Data integration involves combining data from various sources to create a unified view of the business, 
         while data warehousing involves storing, managing, and analyzing data in a centralized repository.
          These services enable businesses to gain insights from their data and make informed decisions.
           At our company, we provide end-to-end data integration and warehousing services using cutting-edge tools and technologies 
           to ensure that your data is secure and easily accessible for analysis, reporting, and decision-making.
      </p>
    </div>
    <div className="col-md-6 text-center p-3 mt-5">
      <video
        src={DataIntegr_vdo}
        autoPlay
        muted
        loop
        playsInline
        className="rounded"
        style={{ maxWidth: '80%', width: '80%' }}
      />
    </div>
  </div>
</section>




{/* how we work */}
<section
  className="py-3 px-3"
  style={{ backgroundColor: 'transparent' }}
>
  <h2
    className="fw-bold mb-2"
    style={{
      background: 'linear-gradient(90deg, #29F1E5 0%, #00BCEB 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      display: 'inline-block',
      marginLeft: '5rem' // You can adjust (e.g., '1.5rem', '2rem')
    }}
  >
    How we work
  </h2>
</section>






<div
  className="py-4 px-4 text-white border border-white bg-dark"
  style={{
    border: '2px solid #ffffffff',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    borderRadius: '10px',
    boxShadow: 'inset 0 0 30px rgba(255, 255, 255, 0.2)',
    maxWidth: '90%',       // Adjust width here (or use '500px' for fixed)
    margin: '0 auto'       // Center it horizontally
  }}
>
  
  {/* Data Analysis*/}


  <div className="container d-flex align-items-center gap-4 ">
    {/* Left Side - Image */}
    <div className="slide-left">
    <div style={{ width: '300px', flexShrink: 0 }}>
      <img
        src={DataIntegr_1}
        alt="Data analysis"
        style={{ width: '300px', height: '300px', objectFit: 'contain' }}
        className="img-fluid"
      />
    </div>
</div>
    {/* Right Side - Text */}
     <div className="slide-right">
    <div>
     <h2
  className="fw-bold mb-2"
  style={{
    background: 'linear-gradient(90deg, #29F1E5 0%, #00BCEB 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '2rem',
    display: 'inline-block',
  }}
>
 Data Analysis
</h2>

      <p className="mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
      Data analysis is the process of preparing and modeling data to extract insights, 
      draw conclusions, and support informed decisions.
      </p>
    </div>   
  </div>
  </div>




  {/* Analytical Processing -sites*/}
   {/* Analytical Processing Section */}
<div className="container d-flex align-items-center gap-4 py-5">
  {/* Left Side - Text */}
  <div className="slide-left">
    <h2
      className="fw-bold mb-2"
      style={{
        background: 'linear-gradient(90deg, #29F1E5 0%, #00BCEB 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: '2rem',
        display: 'inline-block',
      }}
    >
     Visual Analytics
    </h2>

    <p className="mb-0 text-white" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
      Visual analytics uses interactive visuals and analytics to help users explore complex data and make informed decisions.
    </p>
  </div>
  {/* Right Side - Image */}
  <div className="slide-right" style={{ flexShrink: 0 }}>
    <img
      src={DataIntegr_2}
      alt="visual"
      style={{ width: '300px', height: '300px', objectFit: 'contain' }}
      className="img-fluid"
    />
  </div>
</div>





{/*Advance Analystics*/}

<div className="container d-flex align-items-center gap-4">
    {/* Left Side - Image */}
     <div className="slide-left">
    <div style={{ width: '300px', flexShrink: 0 }}>
      <img
        src={DataIntegr_3}
        alt="advance"
        style={{ width: '300px', height: '300px', objectFit: 'contain' }}
        className="img-fluid"
      />
    </div>
</div>
{/* Right Side - Text */}
     <div className="slide-right">
     <h2
  className="fw-bold mb-2"
  style={{
    background: 'linear-gradient(90deg, #29F1E5 0%, #00BCEB 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '2rem',
    display: 'inline-block',
  }}
>
  Advance Analystics
</h2>

      <p className="mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
      Advanced analytics uses AI, machine learning, and data mining to uncover patterns, predict trends, and provide insights for proactive business decisions.
      </p>
    </div>
  </div>




  {/*Data Governance */}


   <div className="container d-flex align-items-center gap-4">
  {/* Left Side - Text */}
  <div className="slide-left">
    <h2
      className="fw-bold mb-2"
      style={{
        background: 'linear-gradient(90deg, #29F1E5 0%, #00BCEB 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: '2rem',
        display: 'inline-block',
      }}
    >
     Data Governance
    </h2>

    <p className="mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
    Data governance ensures data quality, security, and availability through policies and practices that guide its collection, storage, and use for trust and compliance.

      
    </p>
  </div>

  {/* Right Side - Image */}
   <div className="slide-right" style={{ flexShrink: 0 }}>
  <div style={{ width: '300px', flexShrink: 0 }}>
    <img
      src={DataIntegr_4}
      alt="goverance"
      style={{ width: '300px', height: '300px', objectFit: 'contain' }}
      className="img-fluid"
    />
  </div>
</div>
</div>




{/*Strategy Documentation*/}


<div className="slide-left">
  <div className="container d-flex align-items-center gap-4">
    
    {/* Left Side - Image */}
    <div style={{ width: '300px', flexShrink: 0 }}>
      <img
        src={DataIntegr_5}
        alt="strategy"
        style={{ width: '300px', height: '300px', objectFit: 'contain' }}
        className="img-fluid"
      />
    </div>

    {/* Right Side - Text */}
    <div className="slide-right">
      <h2
        className="fw-bold mb-2"
        style={{
          background: 'linear-gradient(90deg, #29F1E5 0%, #00BCEB 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: '2rem',
          display: 'inline-block',
        }}
      >
      Strategy Documentation
      </h2>

      <p className="mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
       A strategy document outlines goals, tactics, and KPIs to align teams, guide actions, and ensure resources support business objectives.
      </p>
    </div>
  </div>
</div>
</div>




   <section style={{ textAlign: 'center', marginTop: '80px' }}>
  <h2
    className="fw-bold mb-3"
    style={{
      background: 'linear-gradient(90deg, #29F1E5 0%, #00BCEB 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      display: 'inline-block'
    }}
  >
    Tools & Integration
  </h2>

  <div
    className="py-4 px-4 text-white border border-white bg-dark"
    style={{
      border: '2px solid #fff',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderRadius: '10px',
      boxShadow: 'inset 0 0 30px rgba(255, 255, 255, 0.2)',
      maxWidth: '90%',
      margin: '10px auto',
      marginBottom: '100px'
    }}
  >

<div className="d-flex justify-content-center align-items-center gap-5">
  <img src={mongodb} alt="1" style={{ width: '100px', height: 'auto' }} />
  <img src={oracle} alt="2" style={{ width: '100px', height: 'auto' }} />
  <img src={qlik} alt="3" style={{ width: '100px', height: 'auto' }} />
  <img src={ibm} alt="4" style={{ width: '100px', height: 'auto' }} />
  <img src={tableau} alt="5" style={{ width: '100px', height: 'auto' }} />
</div>
<div className="d-flex justify-content-center align-items-center gap-5">
  <img src={hadoop} alt="1" style={{ width: '100px', height: 'auto' }} />
  <img src={thought} alt="2" style={{ width: '150px', height: 'auto' }} />
  <img src={microstrategy} alt="3" style={{ width: '100px', height: 'auto' }} />
  <img src={sqlserver} alt="4" style={{ width: '100px', height: 'auto' }} />
  <img src={azure} alt="4" style={{ width: '100px', height: 'auto' }} />
  <img src={snowflake} alt="5" style={{ width: '100px', height: 'auto' }} />
</div>
  <div className="d-flex justify-content-center align-items-center gap-5">
  <img src={looker} alt="1" style={{ width: '100px', height: 'auto' }} />
  <img src={mysql} alt="2" style={{ width: '150px', height: 'auto' }} />
  <img src={informatica} alt="3" style={{ width: '100px', height: 'auto' }} />
  <img src={powerbi} alt="4" style={{ width: '100px', height: 'auto' }} />
  <img src={powerapp} alt="4" style={{ width: '100px', height: 'auto' }} />
  <img src={bigquery} alt="5" style={{ width: '100px', height: 'auto' }} />
</div>
<div className="d-flex justify-content-center align-items-center gap-5">
  <img src={amazon} alt="1" style={{ width: '100px', height: 'auto' }} />
  <img src={datastudio} alt="2" style={{ width: '100px', height: 'auto' }} />
  <img src={powerautomate} alt="3" style={{ width: '100px', height: 'auto' }} />
  <img src={microsoft} alt="4" style={{ width: '100px', height: 'auto' }} />
  <img src={postgresql} alt="5" style={{ width: '100px', height: 'auto' }} />
</div>
  
</div>
</section>
  </div>

  );
};

export default DataIntegration;
