/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../layout/HOC";
import { Table } from "react-bootstrap";
import SpinnerComp from "./Component/SpinnerComp";
import { Dropdown, Menu } from "antd";

const EProduct = () => {
  const [query, setQuery] = useState("");

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
        "Round Neck" , 
        "  Full Sleeve" , 
        "Regular" , 
        "Cotton Blend" , 
        ""
      ],
      description:
       "Look confident with this Casual Men T-Shirt It is regular machine wash. This fabric is soft in touch and it makes feel so comfort when you wear. The fabric does not pill and the colour will not fade easily.Available in various color and designs for your every day fashion",
      sellerName: "Seller Name",
      storeName: "Store Name",
      color: ["Red", "Black", "Green"],
      size: [""],
      stock: 10,
    },
  ];

  // Pagination
  const [currentPage2, setCurrentPage2] = useState(1);
  const [postPerPage2] = useState(10);
  const lastPostIndex2 = currentPage2 * postPerPage2;
  const firstPostIndex2 = lastPostIndex2 - postPerPage2;

  let pages2 = [];

  const TotolData = query
    ? data?.filter(
        (i) =>
          i?.name?.toLowerCase().includes(query?.toLowerCase()) ||
          i?.sellerName
            ?.toString()
            ?.toLowerCase()
            .includes(query?.toLowerCase())
      )
    : data;

  useEffect(() => {
    if (query) {
      setCurrentPage2(1);
    }
  }, [query]);

  const slicedData = TotolData?.slice(firstPostIndex2, lastPostIndex2);

  for (let i = 1; i <= Math.ceil(TotolData?.length / postPerPage2); i++) {
    pages2.push(i);
  }

  function Next() {
    setCurrentPage2(currentPage2 + 1);
  }

  function Prev() {
    if (currentPage2 !== 1) {
      setCurrentPage2(currentPage2 - 1);
    }
  }

  return (
    <>
      <p className="headP">Dashboard / Products</p>

      <div
        className="pb-4  w-full flex justify-between items-center"
        style={{ width: "98%", marginLeft: "2%" }}
      >
        <span
          className="tracking-widest text-slate-900 font-semibold uppercase"
          style={{ fontSize: "1.5rem" }}
        >
          All Product's ( Total : {data?.length} )
        </span>
      </div>

      <section className="sectionCont">
        {data?.length === 0 || !data ? (
          <SpinnerComp />
        ) : (
          <>
            <div className="filterBox">
              <img
                src="https://t4.ftcdn.net/jpg/01/41/97/61/360_F_141976137_kQrdYIvfn3e0RT1EWbZOmQciOKLMgCwG.jpg"
                alt=""
              />
              <input
                type="search"
                placeholder="Start typing to search for products"
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <div className="overFlowCont">
              <Table>
                <thead>
                  <tr>
                    <th>Sno.</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Reviews</th>
                    <th>Discount</th>
                    <th>Total Stock</th>
                    <th>Price</th>
                    <th>Discounted Price</th>
                    <th>Seller Name</th>
                    <th>Seller Store</th>
                    <th> Options </th>
                  </tr>
                </thead>
                <tbody>
                  {slicedData?.map((i, index) => (
                    <tr key={index}>
                      <td> {index + 1} </td>
                      <td>
                        <img src={i.img} alt="" style={{ width: "60px" }} />
                      </td>
                      <td>{i.name}</td>
                      <td>{i.review}</td>
                      <td>{i.discount}</td>
                      <td>{i.stock}</td>
                      <td>{i.price}</td>
                      <td>{i.discountedPrice}</td>
                      <td>{i.sellerName}</td>
                      <td>{i.storeName}</td>

                      <td style={{ textAlign: "center" }}>
                        <Dropdown
                          overlay={
                            <Menu>
                              <Menu.Item key="2">
                                <div className="two_Sec_Div">
                                  <i className="fa-solid fa-eye"></i>
                                  <p>View Product</p>
                                </div>
                              </Menu.Item>
                              <Menu.Item key="3">
                                <div className="two_Sec_Div">
                                  <i className="fa-sharp fa-solid fa-trash"></i>
                                  <p>Delete Product</p>
                                </div>
                              </Menu.Item>
                            </Menu>
                          }
                          trigger={["click"]}
                        >
                          <i className="fa-solid fa-ellipsis-vertical"></i>
                        </Dropdown>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              <div className="pagination">
                <button onClick={() => Prev()} className="prevBtn">
                  <i className="fa-solid fa-backward"></i>
                </button>
                {currentPage2 === 1 ? (
                  ""
                ) : (
                  <button onClick={() => setCurrentPage2(1)}>1</button>
                )}

                {pages2
                  ?.slice(currentPage2 - 1, currentPage2 + 3)
                  .map((i, index) =>
                    i === pages2?.length ? (
                      ""
                    ) : (
                      <button
                        key={index}
                        onClick={() => setCurrentPage2(i)}
                        className={currentPage2 === i ? "activePage" : ""}
                      >
                        {" "}
                        {i}{" "}
                      </button>
                    )
                  )}

                <button
                  onClick={() => setCurrentPage2(pages2?.length)}
                  className={
                    currentPage2 === pages2?.length ? "activePage" : ""
                  }
                >
                  {" "}
                  {pages2?.length}{" "}
                </button>

                {currentPage2 === pages2?.length ? (
                  ""
                ) : (
                  <button onClick={() => Next()} className="nextBtn">
                    {" "}
                    <i className="fa-sharp fa-solid fa-forward"></i>
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default HOC(EProduct);
