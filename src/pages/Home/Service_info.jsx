import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service_info.css"; // your CSS file
import Service_main_1 from "../../assets/images/Service_main_1.png";
import Service_main_2 from "../../assets/images/Service_main_2.png";
import Service_main_3 from "../../assets/images/Service_main_3.png";
import Service_main_4 from "../../assets/images/Service_main_4.png";
import Service_main_5 from "../../assets/images/Service_main_5.png";
import Service_main_6 from "../../assets/images/Service_main_6.png";
import Service_types from "../../assets/videos/Service_types.mp4";
import Cloudbi from "../Services/CloudBI";
import DataIntegration from "../Services/DataIntegration";
import DataAnalysis from "../Services/DataAnalysis";
import DataManagement from "../Services/DataManagement";
import CorpTraining from "../Services/CorporateTraining";
import AppDev from "../Services/AppDev";


const industries = [
  {
    title: "Cloud-based Solutions",
    description:
      "Empower businesses to manage and analyze their data seamlessly from anywhere, at any time, enabling them to make informed decisions faster and more accurately.",
    image: Service_main_1,
    link: "/Services/Cloudbi",
  },
  {
    title: "Data Analysis and Visualization",
    description:
      "Provide businesses with actionable insights and intuitive visualizations to help them make informed decisions and drive growth.",
    image: Service_main_2,
    link: "/Services/DataAnalysis",
  },
  {
    title: "Data Integration and Warehousing",
    description:
      "We help businesses manage their data, improve its quality, and gain valuable insights to boost their performance & their busniess",
    image: Service_main_3,
    link: "/Services/DataIntegration",
  },
  {
    title: "Data Management and Governance",
    description:
      "Help businesses to ensure data accuracy, compliance, and security, and optimize their data assets for maximum efficiency and value.",
    image: Service_main_4,
    link: "/Services/DataManagement",
  },
  {
    title: "Corporate Training and Development",
    description:
      "Businesses to enhance the skills and performance of their employees, improve organizational efficiency, and drive business growth.",
    image: Service_main_5,
    link: "/Services/CorporateTraining",
  },
  {
    title: "Application Development",
    description:
      "We build custom software to help businesses optimize processes, improve customer experiences, and achieve digital goals.",
    image: Service_main_6,
    link: "/Services/AppDev",
  },
];

export default function ServicePage() {
  const navigate = useNavigate();

  return (
    <div id="service-section" className="our-services-page">
      <div className="our-services-container">
        {/* background grid */}
        <div className="grid-background"></div>
        {/* vertical line */}
        <div className="vertical-divider"></div>

        <div className="our-services-content">
          {/* left visual image */}
          <div className="our-services-visual">
            <video autoPlay muted loop playsInline>
                                <source src={Service_types} type="video/mp4" 
                                className="visual-img"/>
                                Your browser does not support the video tag.
                              </video>
          </div>

          {/* right side with two columns */}
          <div className="our-services-cards">
            {/* left column */}
            <div className="card-column column-left">
              {industries
                .filter((_, index) => index % 2 === 0)
                .map((item, idx) => (
                  <div className="our-services-card" key={idx}>
                    <div className="card-icon">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <h3 className="industry-title">{item.title}</h3>
                    <p className="industry-description">{item.description}</p>
                    <button
                      className="more-info-btn"
                      onClick={() => navigate(item.link)}
                    >
                      View Info
                    </button>
                  </div>
                ))}
            </div>

            {/* right column */}
            <div className="card-column column-right">
              {industries
                .filter((_, index) => index % 2 !== 0)
                .map((item, idx) => (
                  <div className="our-services-card" key={idx}>
                    <div className="card-icon">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <h3 className="industry-title">{item.title}</h3>
                    <p className="industry-description">{item.description}</p>
                    <button
                      className="more-info-btn"
                      onClick={() => navigate(item.link)}
                    >
                      View Info
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
