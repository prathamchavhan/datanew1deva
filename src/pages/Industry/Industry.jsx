import React from "react";
import "./IndustryShowcase.css";
import Industry_steps from "../../assets/videos/Industry_steps.mp4";
import pharma from "../../assets/images/pharma.png";
import banking from "../../assets/images/banking.png";
import hospitality from "../../assets/images/hospitality.png";
import retail from "../../assets/images/retail.png";
import financialservices from "../../assets/images/financialservices.png";
import ecommerce from "../../assets/images/ecommerce.png";

const industries = [
  {
    title: "Banking",
    description:
      "BI can help banks analyze customer data, market trends, and risk factors to make informed decisions about strategy, product development, and risk management.",
    image: banking,
  },
  {
    title: "Pharma",
    description:
      "Provide valuable insights into sales, clinical trials, and regulatory compliance data, helping pharmaceutical companies make data-driven decisions and gain a competitive advantage in the industry.",
    image: pharma,
  },
  {
    title: "Hospitality",
    description:
      "BI can help hospitality businesses analyze customer preferences, optimize pricing, and manage resources more efficiently to improve customer satisfaction and increase profitability.",
    image: hospitality,
  },
  {
    title: "Retail",
    description:
      "Help retailers analyze customer behavior, inventory levels, and market trends, and make informed decisions about merchandising, pricing, and supply chain management.",
    image: retail,
  },
  {
    title: "Financial Services",
    description:
      "Financial services companies analyze data on market trends, customer behavior, and risk factors to make informed decisions about investment, risk management, and product development.",
    image: financialservices,
  },
  {
    title: "ECommerce",
    description:
      "Help ecommerce businesses analyze customer data, optimize pricing and promotions, and improve supply chain management to enhance customer experience and increase sales.",
    image: ecommerce,
  },
];

export default function IndustryShowcase() {
  return (
    <div className="industry-page">
      <div className="industry-container">
        <div className="grid-background"></div>

        {/* Partition Line */}
        <div className="vertical-divider"></div>

        <div className="industry-content">
          {/* Card Section */}
          <div className="industry-cards">
            <div className="card-column column-left">
              {industries.filter((_, i) => i % 2 === 0).map((industry) => (
                <div className="industry-card" key={industry.title}>
                  <div className="icon-wrapper">
                    <img src={industry.image} alt={industry.title} className="icon" />
                  </div>
                  <h3 className="industry-title">{industry.title}</h3>
                  <p className="industry-description">{industry.description}</p>
                </div>
              ))}
            </div>

            <div className="card-column column-right">
              {industries.filter((_, i) => i % 2 !== 0).map((industry) => (
                <div className="industry-card" key={industry.title}>
                  <div className="icon-wrapper">
                    <img src={industry.image} alt={industry.title} className="icon" />
                  </div>
                  <h3 className="industry-title">{industry.title}</h3>
                  <p className="industry-description">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="industry-visual">
                  <video autoPlay muted loop playsInline>
                    <source src={Industry_steps} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
        </div>
      </div>
    </div>
  );
}

