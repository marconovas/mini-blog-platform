import { FaCode, FaBolt, FaPenNib, FaLayerGroup } from "react-icons/fa";
import "./FeatureSection.css";

export default function FeatureSection() {
  const features = [
    {
      icon: <FaCode />,
      title: "Clean Code",
      text: "Readable and scalable development practices."
    },
    {
      icon: <FaBolt />,
      title: "Fast Experience",
      text: "Optimized performance and smooth navigation."
    },
    {
      icon: <FaPenNib />,
      title: "Creative Writing",
      text: "Share ideas, stories and technical content."
    },
    {
      icon: <FaLayerGroup />,
      title: "Modern Stack",
      text: "Built with React, Node and modern tools."
    }
  ];

  return (
    <section className="features-section">
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-item" key={index}>
            <div className="icon-box">
              {feature.icon}
            </div>

            <div className="feature-content">
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}