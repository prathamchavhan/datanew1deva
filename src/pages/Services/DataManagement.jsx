// src/pages/services/Cloudbi.jsx
import React, { useEffect } from "react";
import "./service.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import DataMngmt_main from "../../assets/services/DataMngmt_main.png";
import DataMngmt_vdo from "../../assets/services/DataMngmt_vdo.mp4";
import DataMngmt_1 from "../../assets/services/DataMngmt_1.png";
import DataMngmt_2 from "../../assets/services/DataMngmt_2.png";
import DataMngmt_3 from "../../assets/services/DataMngmt_3.png";
import DataMngmt_4 from "../../assets/services/DataMngmt_4.png";
import DataMngmt_5 from "../../assets/services/DataMngmt_5.png";
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


const DataManagement = () => 
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
      src={DataMngmt_main}
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
                fontSize: '30px' // Adjusted font size for better visibility
              }}>
                Data Management and Governance
              </h3>
              <p className="mb-0 mt-3" style={{ fontSize: '18px', lineHeight: '1.6' }}>
             Data management and governance refer to the processes, policies, and technologies used to manage and control data assets within an organization. This includes everything from collecting, storing, and organizing data, to ensuring its accuracy, security, and privacy.


              </p>
            </div>
          </div>
        </div>
      </div>



      {/* What is Data Management and Governance ? */}


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
          fontSize: '28px' // Adjusted font size for better visibility
        }}
      >
       
What is Data Management and Governance ?
      </h3>
      <p style={{ fontSize: '17px' , lineHeight: '1.6', textAlign: 'justify' }}>
       Cloud-based BI services are a powerful way to manage and analyze large volumes of data in the cloud.
        These services offer a range of tools and features for reporting, analytics, and data visualization,
         all accessible through a web-based interface. With cloud-based BI services, businesses can access their data from anywhere, 
         collaborate more easily with team members, and make faster and more informed decisions based on real-time insights.
          Plus, the scalability and flexibility of cloud-based BI services make them a cost-effective solution for businesses of all sizes
      </p>
    </div>
    <div className="col-md-6 text-center p-3 mt-5">
      <video
        src={DataMngmt_vdo}
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





{/* Define */}
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
  <div className="container d-flex align-items-center gap-4 ">
    {/* Left Side - Image */}
    <div className="slide-left">
    <div style={{ width: '300px', flexShrink: 0 }}>
      <img
        src={DataMngmt_1}
        alt="Data Mining"
        style={{ width: '260px', height: '300px', objectFit: 'contain' }}
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
 Define
</h2>

      <p className="mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
        Define business goals and data needs to align data efforts with strategy, ensuring relevance,
         focus, and support for organizational objectives.
      </p>
    </div>   
  </div>
  </div>




  {/* Profile*/}
   {/* Profile */}
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
      Profile
    </h2>

    <p className="mb-0 text-white" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
     Assess your data by examining its structure, quality, and sources to identify inconsistencies, 
     risks, and areas for improvement before analysis.
    </p>
  </div>
  {/* Right Side - Image */}
  <div className="slide-right" style={{ flexShrink: 0 }}>
    <img
      src={DataMngmt_2}
      alt="Data Mining"
      style={{ width: '300px', height: '300px', objectFit: 'contain' }}
      className="img-fluid"
    />
  </div>
</div>





{/*Standardize*/}

<div className="container d-flex align-items-center gap-4">
    {/* Left Side - Image */}
     <div className="slide-left">
    <div style={{ width: '300px', flexShrink: 0 }}>
      <img
        src={DataMngmt_3}
        alt="Standardize"
        style={{ width: '260px', height: '300px', objectFit: 'contain' }}
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
Standardize
</h2>

      <p className="mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
    Standardize data by applying consistent formats and conventions to improve quality, comparability,
     and system interoperability for better analytics and reporting.
      </p>
    </div>
  </div>




  {/*Measure*/}


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
      Measure
    </h2>

    <p className="mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
    Define KPIs to track data quality and governance by measuring accuracy, 
    completeness, consistency, 
    and timeliness, helping identify issues and show progress.
    </p>
  </div>

  {/* Right Side - Image */}
   <div className="slide-right" style={{ flexShrink: 0 }}>
  <div style={{ width: '300px', flexShrink: 0 }}>
    <img
      src={DataMngmt_4}
      alt="Data Mining"
      style={{ width: '250px', height: '300px', objectFit: 'contain' }}
      className="img-fluid"
    />
  </div>
</div>
</div>



{/*Monitor*/}

<div className="slide-left">
  <div className="container d-flex align-items-center gap-4">
    
    {/* Left Side - Image */}
    <div style={{ width: '300px', flexShrink: 0 }}>
      <img
        src={DataMngmt_5}
        alt=" Monitor"
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
      Monitor
      </h2>

      <p className="mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
      Use audits and automated tools to monitor data, ensure standards are met, detect issues,
       and maintain quality and compliance over time.
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

export default DataManagement;
