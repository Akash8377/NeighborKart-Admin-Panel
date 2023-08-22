/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import { Table } from "react-bootstrap";
import SpinnerComp from "../Component/SpinnerComp";
import { Dropdown, Menu } from "antd";
import { useParams } from "react-router-dom";

const ViewProduct = () => {

    const { name } = useParams()

  const data = [
    {
      img: "https://rukminim1.flixcart.com/image/416/416/kq18n0w0/mobile/y/2/b/narzo-30-rmx2156-realme-original-imag45yhzhugdcqh.jpeg?q=70",
      name: "realme Narzo 30 (Racing Silver, 128 GB)  (6 GB RAM)",
      review: "4.3",
      rating: "77,509 Ratings & 6,081 Reviews",
      discount: "26% off",
      price: "12,499",
      discountedPrice: "16,999",
      features: [
        "6 GB RAM | 128 GB ROM | Expandable Upto 256 GB",
        "16.51 cm (6.5 inch) Full HD+ Display",
        "48MP + 2MP + 2MP | 16MP Front Camera ",
        "5000 mAh Battery ",
        "MediaTek Helio G95 Processor",
        "30W Charger",
      ],
      description:
        "With the realme Narzo 30, make your mobile gaming experience smooth, lag-free, and immersive. This smartphone runs on the Helio G95 Gaming Processor for intense gaming, a 90 Hz Ultra-smooth Display for smooth scrolling, and a 5000 mAh Massive Battery for hours of gaming marathons.",
      sellerName: "Seller Name",
      storeName: "Store Name",
      color: ["Red", "Black", "Green"],
      size: [""],
      stock: 10,
    },
    {
      img: "https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/x/v/e/l-all-rbcropn-sky-one-nb-nicky-boy-original-imagkq6hgg5gqsep.jpeg?q=70",
      name: "Men Printed Round Neck Cotton Blend Light Blue T-Shirt",
      review: "3.7",
      rating: "10,297 ratings and 467 reviews",
      discount: "61% off",
      price: "10,000",
      discountedPrice: "20,000",
      features: [
        "Round Neck",
        "  Full Sleeve",
        "Regular",
        "Cotton Blend",
        "All RBCPON SKY-One ",
      ],
      description:
        "Look confident with this Casual Men T-Shirt It is regular machine wash. This fabric is soft in touch and it makes feel so comfort when you wear. The fabric does not pill and the colour will not fade easily.Available in various color and designs for your every day fashion",
      sellerName: "Seller Name",
      storeName: "Store Name",
      color: ["Red", "Black", "Green"],
      size: ["S", "M", "L", "XL"],
      stock: 10,
    },
  ];


  

  return (
    <>
      <p className="headP">Dashboard / {name} </p>

      <section className="sectionCont">
            <div className="Left_Cont">
                <img src='https://rukminim1.flixcart.com/image/416/416/kq18n0w0/mobile/y/2/b/narzo-30-rmx2156-realme-original-imag45yhzhugdcqh.jpeg?q=70' alt='' />
            </div>
            <div className=""></div>
      </section>
    </>
  );
};

export default HOC(ViewProduct);
