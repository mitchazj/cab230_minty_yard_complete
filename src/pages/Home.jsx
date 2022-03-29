import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
    </main>
  );
}

// hero content
const Hero = () => (
  <section className="hero">
    {/* content for the hero */}
    <div className="hero__content">
      <h1 className="hero__title">Minty Yard</h1>
      <p className="hero__subtitle">A fine dining experience</p>

      <Link to="/menu">Menu</Link>
      <Link to="/book">Book</Link>
    </div>
  </section>
);

// features section
function Features() {
  /* The information for our features in JSON
  so we can reduce the amount of repetitive JSX and reuse one component instead */
  const featuresData = [
    {
      heading: "Organic & Ethical",
      text:
        "All of our ingredients are organically sourced from local producers.",
      img: { src: "img/like.png", alt: "Thumbs up icon" }
    },
    {
      heading: "Live Entertainment",
      text:
        "On the first Saturday of every month, enjoy free live jazz entertainment from local bands.",
      img: { src: "img/faces.png", alt: "Entertainment icon" }
    },
    {
      heading: "Satisfaction guaranteed",
      text:
        "Not happy with your meal? A full refund will be provided, no questions asked!",
      img: { src: "img/heart.png", alt: "Heart icon" }
    }
  ];

  return (
    <article className="features">
      <div className="features__header">
        <h2>Our Promise</h2>
      </div>

      <div className="features__box-wrapper">
        {
          // display the information for each of our features in their own Box
          featuresData.map((feature) => (
            <FeatureBox feature={feature} />
          ))
        }
      </div>
    </article>
  );
}

// Display a Feature box when passed in the information for the feature
const FeatureBox = ({ feature }) => (
  <div className="features__box">
    <img src={feature.img.src} alt={feature.img.alt} />
    <h5>{feature.heading}</h5>
    <p>{feature.text}</p>
  </div>
);
