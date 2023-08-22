/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../layout/HOC";
import { Table, Modal, Form, Button, FloatingLabel } from "react-bootstrap";
import SpinnerComp from "./Component/SpinnerComp";

const EProduct = () => {
  const [modalShow, setModalShow] = useState(false);
  const [edit, setEdit] = useState(false);
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
          i?.product_name?.toLowerCase().includes(query?.toLowerCase()) ||
          i?.quantity?.toString()?.toLowerCase().includes(query?.toLowerCase())
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

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {" "}
            {edit ? "Edit Product" : " Add New Product"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="d-flex gap-2" style={{ alignItems: "center" }}>
              <Form.Group className="mb-3">
                <Form.Label>Product Images</Form.Label>
                <Form.Control type="file" required multiple />
              </Form.Group>

              <Button style={{ height: "40px", marginTop: "15px" }}>
                Upload
              </Button>
            </div>

            <Form.Group className="mb-3">
              <Form.Label> Product Name</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>ID</Form.Label>
              <Form.Control type="number" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>ASIN</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <FloatingLabel controlId="floatingTextarea2" label="Description">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" min={0} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price Discount</Form.Label>
              <Form.Control type="number" min={0} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Bullet Text</Form.Label>
              <FloatingLabel controlId="floatingTextarea2">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label> Category</Form.Label>
              <Form.Select aria-label="Default select example" required>
                <option>-- Select Category --</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="number" min={0} required />
            </Form.Group>

            <Button className="btn" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  // Carousel Modal

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

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
        <div className="d-flex gap-1">
          <input type="file" id="excel" style={{ display: "none" }} />

          <button
            onClick={() => {
              setEdit(false);
              setModalShow(true);
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#19376d] text-white tracking-wider"
          >
            Add Product
          </button>
        </div>
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
                    <th>Added By</th>
                    <th>Price</th>
                    <th>Discount</th>
                    <th>Total Stock</th>
                    <th>Category</th>
                    <th> Options </th>
                  </tr>
                </thead>
                <tbody>
                  {slicedData?.map((i, index) => (
                    <tr key={index}>
                      <td>
                        <img src={i.img} alt="" style={{ width: "60px" }} />
                      </td>
                      <td>
                        {i.name}
                      </td>
                      <td>
                        {i.review}
                      </td>
                      <td>
                        {i.rating}
                      </td>
                      <td>
                        {i.discount}
                      </td>
                      <td>
                        {i.price}
                      </td>
                      <td>
                        {i.discountedPrice}
                      </td>
                      <td>
                        {i.sellerName}
                      </td>
                      <td>
                        {i.discountedPrice}
                      </td>

                      <td>
                        <span className="flexCont">
                          <i className="fa-solid fa-pen-to-square"></i>
                          <i className="fa-solid fa-eye"></i>
                          <i className="fa-sharp fa-solid fa-trash"></i>
                        </span>
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
