// src/pages/services/Cloudbi.jsx
import React, { useEffect } from "react";
import "./service.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import AppDev_main from "../../assets/services/AppDev_main.png";
import AppDev_vdo from "../../assets/services/AppDev_vdo.mp4";
import AppDev_1 from "../../assets/services/AppDev_1.png";
import AppDev_2 from "../../assets/services/AppDev_2.png";
import AppDev_3 from "../../assets/services/AppDev_3.png";
import AppDev_4 from "../../assets/services/AppDev_4.png";
import AppDev_5 from "../../assets/services/AppDev_5.png";
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


const Application= () => 
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
      src={AppDev_main}
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
               Application Development
              </h3>
              <p className="mb-0 mt-3" style={{ fontSize: '17px', lineHeight: '1.6' }}>
        We offer professional application development services to help you boost your digital presence. Our team creates customized web, mobile, and desktop applications designed to meet your specific goals. Using the latest tools and technologies, we build high-performance, user-friendly, and scalable solutions that fit your business needs.
              </p>
            </div>
          </div>
        </div>
      </div>



      {/* What we provide */}


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
          fontSize: '30px' // Adjusted font size for better visibility
        }}
      >
        What we provide
      </h3>
      <p style={{ fontSize: '18px' , lineHeight: '1.6', textAlign: 'justify' }}>
       The application development process involves several stages, including requirements gathering,
        planning and design, development, testing and quality assurance, and deployment and maintenance. 
        Our team works closely with clients to understand their needs and goals, and we use the latest tools and 
        technologies to build high-quality, user-friendly applications. We also provide ongoing support and maintenance 
        services to ensure that the application runs smoothly and stays up-to-date with the latest technology trends.
      </p>
    </div>
    <div className="col-md-6 text-center p-3 mt-5">
      <video
        src={AppDev_vdo}        
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





{/* Data Mining Section */}
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
        src={AppDev_1}
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
 Requirements gathering
</h2>

      <p className="mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
        Identifying the needs and goals of the client and gathering requirements for the application.
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
     Planning and design
    </h2>

    <p className="mb-0 text-white" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
     Creating a detailed plan for the application, including the architecture, user interface, and functionality.
    </p>
  </div>
  {/* Right Side - Image */}
  <div className="slide-right" style={{ flexShrink: 0 }}>
    <img
      src={AppDev_2}
      alt="planning"
      style={{ width: '300px', height: '300px', objectFit: 'contain' }}
      className="img-fluid"
    />
  </div>
</div>





{/*Development */}

<div className="container d-flex align-items-center gap-4">
    {/* Left Side - Image */}
     <div className="slide-left">
    <div style={{ width: '300px', flexShrink: 0 }}>
      <img
        src={AppDev_3}
        alt="Devlopment"
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
  Development
</h2>

      <p className="mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
      Building the application using the latest tools and technologies.
      </p>
    </div>
  </div>




  {/*Testing and quality assurance*/}


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
      Testing and quality assurance
    </h2>

    <p className="mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
     Thoroughly testing the application to ensure that it meets the client's requirements and is free of bugs and errors.
    </p>
  </div>

  {/* Right Side - Image */}
   <div className="slide-right" style={{ flexShrink: 0 }}>
  <div style={{ width: '300px', flexShrink: 0 }}>
    <img
      src={AppDev_4}
      alt="testing"
      style={{ width: '300px', height: '300px', objectFit: 'contain' }}
      className="img-fluid"
    />
  </div>
</div>
</div>



{/*Deployment and  maintenance*/}

<div className="slide-left">
  <div className="container d-flex align-items-center gap-4">
    
    {/* Left Side - Image */}
    <div style={{ width: '300px', flexShrink: 0 }}>
      <img
        src={AppDev_5}
        alt="Deployment"
        style={{ width: '280px', height: '300px', objectFit: 'contain' }}
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
       Deployment and  maintenance
      </h2>

      <p className="mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
       Deploying the application and providing ongoing support and maintenance services
        to ensure that it runs smoothly and stays up-to-date with the latest technology trends.
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

export default Application;

