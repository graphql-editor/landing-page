import * as React from "react";

export const TrustedBox: React.StatelessComponent<{
  address: string;
  imgSrc: string;
  altImg: string;
}> = ({ address, imgSrc, altImg }) => (
  <div className="item animated bounceInLeft">
    <a href={address}>
      <img src={imgSrc} alt={altImg} />
    </a>
  </div>
);
