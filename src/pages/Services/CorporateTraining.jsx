// src/pages/services/Cloudbi.jsx
import React, { useEffect } from "react";
import "./service.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CorpTraining_main from "../../assets/services/CorpTraining_main.png";
import CorpTraining_vdo from "../../assets/services/CorpTraining_vdo.mp4";
import CorpTraining_1 from "../../assets/services/CorpTraining_1.png";
import CorpTraining_2 from "../../assets/services/CorpTraining_2.png";
import CorpTraining_3 from "../../assets/services/CorpTraining_3.png";
import CorpTraining_4 from "../../assets/services/CorpTraining_4.png";
import CorpTraining_5 from "../../assets/services/CorpTraining_5.png";
import CorpTraining_6 from "../../assets/services/CorpTraining_6.png";
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

const CorpTraining = () => 
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
      src={CorpTraining_main}
      alt="Corporate Training"
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
                
       Corporate Training and Development
              </h3>
              <p className="mb-0 mt-3" style={{ fontSize: '18px', lineHeight: '1.6' }}>
              Our customizable training programs cater to all levels of expertise, and our ongoing training opportunities ensure your team stays up-to-date with the latest BI trends and best practices.
               Empower your team with the skills and knowledge they need to unlock the full potential of your data and drive business growth.



              </p>
            </div>
          </div>
        </div>
      </div>






      {/* What is BI */}
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
        What we provide?
      </h3>
      <p style={{ fontSize: '17px' , lineHeight: '1.6', textAlign: 'justify' }}>
       Our company specializes in providing industry-leading BI corporate training services to help organizations develop the skills and knowledge they need to harness the power of data.
        We offer customized training programs tailored to the specific needs of your industry, covering everything from data analysis and visualization to dashboard design and business analytics.
         Our experienced trainers provide hands-on training that equips your team with the skills they need to extract insights from your data and make informed decisions. With our BI corporate training services,
          your organization can stay ahead of the curve in today's data-driven business landscape.
      </p>
    </div>
    <div className="col-md-6 text-center p-3 mt-5">
      <video
        src={CorpTraining_vdo}
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
        src={CorpTraining_1}
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
  Understand Your Corporate House
</h2>

      <p className="mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
       Ensuring training fits your organization’s structure, culture, goals, and workforce needs to support business objectives.
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
    Identify Your Challenges
    </h2>

    <p className="mb-0 text-white" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
     Pinpointing training challenges involves identifying performance gaps, workflow inefficiencies, and behavioral issues that reduce productivity or compliance. 
    </p>
  </div>
  {/* Right Side - Image */}
  <div className="slide-right" style={{ flexShrink: 0 }}>
    <img
      src={CorpTraining_2}
      alt="identify"
      style={{ width: '300px', height: '300px', objectFit: 'contain' }}
      className="img-fluid"
    />
  </div>
</div>





{/* Brainstorm About Your Requirements */}

<div className="container d-flex align-items-center gap-4">
    {/* Left Side - Image */}
     <div className="slide-left">
    <div style={{ width: '300px', flexShrink: 0 }}>
      <img
        src={CorpTraining_3}
        alt="brain strom"
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
 Brainstorm About Your Requirements

</h2>

      <p className="mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
      Defining training requirements means stakeholders specify needed competencies, skills, and logistics like format, duration, and materials.
      </p>
    </div>
  </div>




  {/*Focus on Your Priorities */}


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
      Focus on Your Priorities
    </h2>

    <p className="mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
    Prioritize training with the greatest impact on success by aligning with strategy and focusing resources on key skills and departments.
    </p>
  </div>

  {/* Right Side - Image */}
   <div className="slide-right" style={{ flexShrink: 0 }}>
  <div style={{ width: '300px', flexShrink: 0 }}>
    <img
      src= {CorpTraining_4}
      alt="Data Mining"
      style={{ width: '250px', height: '300px', objectFit: 'contain' }}
      className="img-fluid"
    />
  </div>
</div>
</div>



{/*Launch the Training Program*/}

<div className="slide-left">
  <div className="container d-flex align-items-center gap-4">
    
    {/* Left Side - Image */}
    <div style={{ width: '300px', flexShrink: 0 }}>
      <img
        src={CorpTraining_5}
        alt="launch"
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
       Launch the Training Program
      </h2>

      <p className="mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
      A successful launch involves coordinating facilitators, setting clear goals, ensuring accessibility, and adapting delivery to engage learners effectively.
      </p>
    </div>
  </div>




{/*Evaluate Its Reports */}
  
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
      Evaluate Its Reports
    </h2>

    <p className="mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
  Evaluating training measures success by analyzing participation, scores, behavior, and feedback against goals to assess effectiveness and ROI.
    </p>
  </div>

  {/* Right Side - Image */}
   <div className="slide-right" style={{ flexShrink: 0 }}>
  <div style={{ width: '260px', flexShrink: 0 }}>
    <img
      src={CorpTraining_6}
      alt="Data Mining"
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

export default CorpTraining;
