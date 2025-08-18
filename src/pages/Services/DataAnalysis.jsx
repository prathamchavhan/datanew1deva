// src/pages/services/Cloudbi.jsx
import React, { useEffect } from "react";
import "./service.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import DataAnalysis_main from "../../assets/services/DataAnalysis_main.jpg";
import DataAnalysis_vdo from "../../assets/services/DataAnalysis_vdo.mp4";
import DataAnalysis_1 from "../../assets/services/DataAnalysis_1.png";
import DataAnalysis_2 from "../../assets/services/DataAnalysis_2.png";
import DataAnalysis_3 from "../../assets/services/DataAnalysis_3.png";
import DataAnalysis_4 from "../../assets/services/DataAnalysis_4.png";
import DataAnalysis_5 from "../../assets/services/DataAnalysis_5.png";
import DataAnalysis_6 from "../../assets/services/DataAnalysis_6.png";
import DataAnalysis_7 from "../../assets/services/DataAnalysis_7.png";
import DataAnalysis_8 from "../../assets/services/DataAnalysis_8.png";
import DataAnalysis_9 from "../../assets/services/DataAnalysis_9.png";
import DataAnalysis_10 from "../../assets/services/DataAnalysis_10.png";
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

const DataAnalysis = () => 
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
      src={DataAnalysis_main}
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
               Data Analysis and Visualization
              </h3>
              <p className="mb-0 mt-3" style={{ fontSize: '18px', lineHeight: '1.6' }}>
            Data analysis and visualization services involve using advanced techniques to analyze and interpret data and present it in a meaningful and easily understandable way. 
            These services are essential for businesses that want to gain insights from their data and make informed decisions.






              </p>
            </div>
          </div>
        </div>
      </div>






      {/* What is Data Analysis and Visualization? */}
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
          fontSize: '30px', // Adjusted font size for better visibility
        }}
      >
       What is Data Analysis and Visualization?
      </h3>
      <p style={{ fontSize: '16px', lineHeight: '1.6', alignContent: 'justify' }}>
     At our company, we provide comprehensive data analysis and visualization services to help businesses gain insights from their data.
      Our team of experts uses state-of-the-art tools and technologies to analyze and interpret data, and create visually appealing reports
       and dashboards that are easy to understand and use. Our services help businesses to streamline their operations, improve their decision-making,
        and achieve their business goals. Data visualization involves using charts, graphs, and other visual tools to present data in a way that is easy to 
        understand and analyze. 
      </p>
    </div>
    <div className="col-md-6 text-center p-3 mt-5">
      <video
        src={DataAnalysis_vdo}
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
   Top 10 key business benefits of using Power BI
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
        src={DataAnalysis_1}
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
 Superior accessibility
</h2>

      <p className="mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
   Access your data and analytics from any device, anywhere—enabling distributed teams and modern workstyles.
      </p>
    </div>   
  </div>
  </div>




  {/* Identify Your Challenges*/}
   {/* Identify Your Challenges*/}
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
    Drag and drop functionality
    </h2>

    <p className="mb-0 text-white" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
    Intuitive interfaces allow users to build reports and dashboards with simple drag-and-drop actions—no coding required.
    </p>
  </div>
  {/* Right Side - Image */}
  <div className="slide-right" style={{ flexShrink: 0 }}>
    <img
      src={DataAnalysis_2}
      alt="Darag and drop"
      style={{ width: '300px', height: '300px', objectFit: 'contain' }}
      className="img-fluid"
    />
  </div>
</div>





{/* Embeddable attributes */}

<div className="container d-flex align-items-center gap-4">
    {/* Left Side - Image */}
     <div className="slide-left">
    <div style={{ width: '300px', flexShrink: 0 }}>
      <img
        src={DataAnalysis_3}
        alt="Data Mining"
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
 Embeddable attributes

</h2>

      <p className="mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
     Seamlessly embed dashboards and analytics into your applications, portals, or client-facing solutions.
      </p>
    </div>
  </div>




  {/*Rich features */}


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
     Rich features
    </h2>

    <p className="mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
   Leverage advanced analytics, natural language query, interactive visualizations, machine learning integration, and collaborative tools.
    </p>
  </div>

  {/* Right Side - Image */}
   <div className="slide-right" style={{ flexShrink: 0 }}>
  <div style={{ width: '300px', flexShrink: 0 }}>
    <img
      src={DataAnalysis_4}
      alt="dataanalysis"
      style={{ width: '300px', height: '300px', objectFit: 'contain' }}
      className="img-fluid"
    />
  </div>
</div>
</div>



{/*Powerful connectivity*/}

<div className="slide-left">
  <div className="container d-flex align-items-center gap-4">
    
    {/* Left Side - Image */}
    <div style={{ width: '300px', flexShrink: 0 }}>
      <img
        src={DataAnalysis_5}
        alt="Data Mining"
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
     Powerful connectivity
      </h2>

      <p className="mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
    Connects effortlessly to a wide range of data sources—relational databases, cloud platforms, APIs, and spreadsheets.
      </p>
    </div>
  </div>




{/*Data refresh */}
  
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
     Data refresh
    </h2>

    <p className="mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
 Schedule automatic data refreshes to ensure analyses always utilize the most current information.
    </p>
  </div>

  {/* Right Side - Image */}
   <div className="slide-right" style={{ flexShrink: 0 }}>
  <div style={{ width: '300px', flexShrink: 0 }}>
    <img
      src={DataAnalysis_6}
      alt="Data refresh"
      style={{ width: '300px', height: '300px', objectFit: 'contain' }}
      className="img-fluid"
    />
  </div>
</div>
</div>


{/*No upfront costs */}

<div className="container d-flex align-items-center gap-4">
    {/* Left Side - Image */}
     <div className="slide-left">
    <div style={{ width: '300px', flexShrink: 0 }}>
      <img
        src={DataAnalysis_7}
        alt="Data Mining"
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
No upfront costs


</h2>

      <p className="mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
    Cloud-based and SaaS solutions minimize initial investment; pay-as-you-go models reduce barriers to entry.
      </p>
    </div>
  </div>




  {/*Uncover actionable insights*/}


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
  Uncover actionable insights
    </h2>

    <p className="mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
 Leverage smart analytics to translate complex data into clear, actionable business recommendations—empowering faster, smarter decisions.
    </p>
  </div>

  {/* Right Side - Image */}
   <div className="slide-right" style={{ flexShrink: 0 }}>
  <div style={{ width: '300px', flexShrink: 0 }}>
    <img
      src={DataAnalysis_8}
      alt="uncover"
      style={{ width: '300px', height: '300px', objectFit: 'contain' }}
      className="img-fluid"
    />
  </div>
</div>
</div>




{/** Meaningful reports */}


<div className="container d-flex align-items-center gap-4">
    {/* Left Side - Image */}
     <div className="slide-left">
    <div style={{ width: '300px', flexShrink: 0 }}>
      <img
        src={DataAnalysis_9}
        alt="Data Mining"
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
 Meaningful reports

</h2>

      <p className="mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
  Generate actionable, interactive, and visually appealing reports tailored to specific business needs.
      </p>
    </div>
  </div>




  {/*Continuous updates*/}


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
    Continuous updates
    </h2>

    <p className="mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
    Benefit from regular feature enhancements and security updates delivered automatically via cloud platforms.
    </p>
  </div>

  {/* Right Side - Image */}
   <div className="slide-right" style={{ flexShrink: 0 }}>
  <div style={{ width: '300px', flexShrink: 0 }}>
    <img
      src={DataAnalysis_10}
      alt="continious"
      style={{ width: '300px', height: '300px', objectFit: 'contain' }}
      className="img-fluid"
    />
  </div>
</div>
</div>





</div>
</div>





{/*tools & intergration */}


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

export default DataAnalysis;
