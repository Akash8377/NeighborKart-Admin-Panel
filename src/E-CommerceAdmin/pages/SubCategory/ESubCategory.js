/** @format */
import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import { Table, Modal, Form, Button, Alert } from "react-bootstrap";
import { Dropdown, Menu } from "antd";
import BreadCamp from "../Component/BreadCamp";

const ESubCategory = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [edit, setEdit] = useState("");

  const data = [
    {
      category: "Electronics",
      name: "Mobile",
    },
    {
      category: "Electronics",
      name: "Mobile Accessories",
    },
    {
      category: "Electronics",
      name: "Laptops",
    },
    {
      category: "Fashion",
      name: "Men's Top Wear",
    },
    {
      category: "Home & Furniture",
      name: "Bed Lines",
    },
    {
      category: "Appliances",
      name: "Refrigerator",
    },
    {
      category: "Appliances",
      name: "4K Samrt TVS",
    },
    {
      category: "Appliances",
      name: "Air Conditioners",
    },
    {
      category: "Appliances",
      name: "Fans",
    },
  ];

  // Pagination and Filter
  const [query, setQuery] = useState("");
  const [currentPage2, setCurrentPage2] = useState(1);
  const [postPerPage2] = useState(10);
  const lastPostIndex2 = currentPage2 * postPerPage2;
  const firstPostIndex2 = lastPostIndex2 - postPerPage2;

  let pages2 = [];

  const TotolData = query
    ? data?.filter((i) => i?.name?.toLowerCase().includes(query?.toLowerCase()))
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
            {edit ? "Edit Sub Category" : " Add Sub Category"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>

            <Form.Select aria-label="Default select example" className="mb-3">
              <option>-- Select Category --</option>
              <option>Electronics</option>
              <option>Grocery</option>
              <option>Mobiles</option>
              <option>Appliances</option>
            </Form.Select>

            <Button
              style={{
                backgroundColor: "#19376d",
                borderRadius: "0",
                border: "1px solid #19376d",
              }}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <section>
        <BreadCamp name='Sub-Category' />
        <div
          className="pb-4   w-full flex justify-between items-center"
          style={{ width: "98%", marginLeft: "2%" }}
        >
          <span
            className="tracking-widest text-slate-900 font-semibold uppercase"
            style={{ fontSize: "1.5rem" }}
          >
            All Sub-Category's ( Total : {data?.length} )
          </span>
          <button
            onClick={() => {
              setEdit(false);
              setModalShow(true);
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#19376d] text-white tracking-wider"
          >
            Add Sub-Category
          </button>
        </div>

        <section className="sectionCont">
          {data?.length === 0 || !data ? (
            <Alert>Sub-Categories Not Found</Alert>
          ) : (
            <>
              <div className="filterBox">
                <img
                  src="https://t4.ftcdn.net/jpg/01/41/97/61/360_F_141976137_kQrdYIvfn3e0RT1EWbZOmQciOKLMgCwG.jpg"
                  alt=""
                />
                <input
                  type="search"
                  placeholder="Search By Category Name"
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>

              <div className="overFlowCont">
                <Table>
                  <thead>
                    <tr>
                      <th>SNo.</th>
                      <th>Name</th>
                      <th>Category</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {slicedData?.map((i, index) => (
                      <tr key={index}>
                        <td>#{index + 1} </td>
                        <td>{i.name} </td>
                        <td> {i.category} </td>
                        <td>
                          <Dropdown
                            overlay={
                              <Menu>
                                <Menu.Item key="2">
                                  <div
                                    className="two_Sec_Div"
                                    onClick={() => {
                                      setEdit(true);
                                      setModalShow(true);
                                    }}
                                  >
                                    <i className="fa-solid fa-pen-to-square"></i>

                                    <p>Edit </p>
                                  </div>
                                </Menu.Item>
                                <Menu.Item key="3">
                                  <div className="two_Sec_Div">
                                    <i className="fa-sharp fa-solid fa-trash"></i>
                                    <p>Delete </p>
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
                {/* Pagination */}
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
      </section>
    </>
  );
};

export default HOC(ESubCategory);
