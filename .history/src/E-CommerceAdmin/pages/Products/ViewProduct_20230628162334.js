/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import { Link, useParams } from "react-router-dom";
import { Badge } from "react-bootstrap";
const ViewProduct = () => {
  const { name } = useParams();

  return (
    <>
      <p className="headP">Dashboard / <Link to='/Product' >Products</Link> / {name} </p>
 

      <section className="sectionCont">
        <div className="Detail_Section">
          <div className="Left_Cont">
            <img
              src="https://rukminim1.flixcart.com/image/416/416/kq18n0w0/mobile/y/2/b/narzo-30-rmx2156-realme-original-imag45yhzhugdcqh.jpeg?q=70"
              alt=""
            />
          </div>
          <div className="right_Cont">
            <p className="Head">
              realme Narzo 30 (Racing Silver, 128 GB) (6 GB RAM)
            </p>
            <p className="Rating">
              <Badge bg="success"> 4.3</Badge>{" "}
              <span className='rat'>77,509 Ratings & 6,081 Reviews</span>{" "}
            </p>
            <p> <Badge bg='success' >26% off</Badge> </p>
            <p> <Badge>10 in Stock</Badge> </p>

            <div className="two_Sec">
              <p className="first">
                {" "}
                <i className="fa-solid fa-indian-rupee-sign"></i>12,499{" "}
              </p>
              <p className="second">
                {" "}
                <i className="fa-solid fa-indian-rupee-sign"></i> 16,488{" "}
              </p>
            </div>

            <ul>
              <li> 6 GB RAM | 128 GB ROM | Expandable Upto 256 GB</li>
              <li>16.51 cm (6.5 inch) Full HD+ Display</li>
              <li>48MP + 2MP + 2MP | 16MP Front Camera</li>
              <li>5000 mAh Battery</li>
              <li>MediaTek Helio G95 Processor</li>
              <li>30W Charger</li>
            </ul>

            <div className="two_Sec" style={{alignItems : 'flex-start'}}>
              <p> <strong>Description</strong> </p> :{" "}
              <p>
                With the realme Narzo 30, make your mobile gaming experience
                smooth, lag-free, and immersive. This smartphone runs on the
                Helio G95 Gaming Processor for intense gaming, a 90 Hz
                Ultra-smooth Display for smooth scrolling, and a 5000 mAh
                Massive Battery for hours of gaming marathons
              </p>
            </div>
            <div className="two_Sec" style={{alignItems : 'flex-start'}}>
              <p> <strong>Color</strong> :</p> <p>Red , Black</p>
            </div>
            <div className="two_Sec" style={{alignItems : 'flex-start'}}>
              <p> <strong>Seller Name</strong> :</p> <p>Seller Name</p>
            </div>
            <div className="two_Sec" style={{alignItems : 'flex-start'}}>
              <p><strong>Store Name</strong> :</p> <p>Store Name</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HOC(ViewProduct);
