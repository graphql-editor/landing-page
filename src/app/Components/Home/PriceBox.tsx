import * as React from "react";

export const PriceBox: React.StatelessComponent<{
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  price: string;
  period: string
}> = ({ imgSrc, imgAlt, title, description, price, period }) => (
 
  <li className="animated bounceInLeft delay-250">
    <div className="images">
      <img src={imgSrc} alt={imgAlt} />
    </div>
    <h5>{title}</h5>
    <p>{description}</p>
    <span>
      <b>From</b>
    </span>
    <div className="price">
      {price}
      <span>/{period}</span>
    </div>
    <a href="service-page.html" className="custom-btn">
      Get Started Now
    </a>
  </li>
  
);