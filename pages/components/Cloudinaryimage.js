import React from "react";
import styles from "/styles/Home.module.css";
import Image from "next/image";

const Cloudinary = () => {
  const cloudinaryImageLoader = ({ src }) => {
    return `https://res.cloudinary.com/ugwutotheeshoes/image/upload/bo_10px_solid_rgb:f78585,e_blur:290,b_rgb:e1e6e9,c_scale,r_10,h_280,w_450/v1632752254/${src}`;
  };
  return (
    <div className={styles.nextcard}>
      <Image
        loader={cloudinaryImageLoader}
        src="eatery/item-8.jpg"
        alt="Food"
        width={450}
        height={280}
      />
      <h1>Cloudinary Image</h1>
    </div>
  );
};

export default Cloudinary;
