/** @format */
import React, { useEffect, useState } from "react";
import { Alert, Table } from "react-bootstrap";
import { Modal, Form, Button} from "react-bootstrap";
import HOC from "../../layout/HOC";
import { Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";
import BreadCamp from "../Component/BreadCamp";
import './Seller.css'
import DeliveryRadius from './DeliveryRadius';
// import DisableProperty from './DisableProperty'
import { read, utils, writeFile } from 'xlsx';
const EVendorList = () => {
  const datas = [
    {
      fullName: "Full Name",
      displayName: "Display Name",
      storeName: "Store Name",
      storeAddress: "Store Address",
      email: "Email@gmail.com",
      phone: "7896541236",
      GST: "GSTNumber",
      Pan: "PANNumber",
      Option:"Enable",
      Distance:"Distance",
      Import:'Import',
      Export:'Export'
    },
  ];
  const [data, setData] = useState([]);

  const handleImport = ($event) => {
      const files = $event.target.files;
      if (files.length) {
          const file = files[0];
          const reader = new FileReader();
          reader.onload = (event) => {
              const wb = read(event.target.result);
              const sheets = wb.SheetNames;

              if (sheets.length) {
                  const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
                  setData(rows)
              }
          }
          reader.readAsArrayBuffer(file);
      }
  }

  const handleExport = () => {
      const headings = [[
          'fullName',
    'displayName',
    'storeName',
    'storeAddress',
    'email',
    'phone',
    'GST',
    'Pan',
    'Option',
    'Distance',
    'Commission'
      ]];
      const wb = utils.book_new();
      const ws = utils.json_to_sheet([]);
      utils.sheet_add_aoa(ws, headings);
      utils.sheet_add_json(ws, data, { origin: 'A2', skipHeader: true });
      utils.book_append_sheet(wb, ws, 'Report');
      writeFile(wb, 'Data Report.xlsx');
  }
  

  // Pagination and Filter
  const [query, setQuery] = useState("");
  const [currentPage2, setCurrentPage2] = useState(1);
  const [postPerPage2] = useState(10);
  const lastPostIndex2 = currentPage2 * postPerPage2;
  const firstPostIndex2 = lastPostIndex2 - postPerPage2;

  const [modalShow, setModalShow] = React.useState(false);
  const [edit, setEdit] = useState("");
 
  let pages2 = [];

  const Totoldatas = query
    ? datas?.filter(
        (i) =>
          i?.fullName?.toLowerCase().includes(query?.toLowerCase()) ||
          i?.displayName?.toLowerCase().includes(query?.toLowerCase()) ||
          i?.email?.toLowerCase().includes(query?.toLowerCase())
      )
    : datas;

  useEffect(() => {
    if (query) {
      setCurrentPage2(1);
    }
  }, [query]);

  const sliceddatas = Totoldatas?.slice(firstPostIndex2, lastPostIndex2);

  for (let i = 1; i <= Math.ceil(Totoldatas?.length / postPerPage2); i++) {
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
            {edit ? "Edit Category" : " Add Category"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Display Name</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Store Name</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Store Adress</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email Adress</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>GST</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Pan Number</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>

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
      <BreadCamp name="Seller's" />
      <div
        className="pb-4  w-full flex justify-between items-center"
        style={{ width: "98%", marginLeft: "2%" }}
      >
        <span
          className="tracking-widest text-slate-900 font-semibold uppercase "
          style={{ fontSize: "1.5rem" }}
        >
          All Seller's ( Total : {data?.length} )
        </span>

        <div className="">
                <div className="">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="input-group">
                                <div className="custom-file">
                                    <input type="file" name="file" className="custom-file-input" id="inputGroupFile" required onChange={handleImport}
                                        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"/>
                                    <label className="custom-file-label" htmlFor="inputGroupFile"></label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <button onClick={handleExport} className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#19376d] text-white float-right ">
                                Export <i className="fa fa-download"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        <button
            onClick={() => {
              setEdit(false);
              setModalShow(true);
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#19376d] text-white tracking-wider"
          >
            Add Vendor
          </button>
      </div>

      <section className="sectionCont">
        {datas?.length === 0 || !datas ? (
          <Alert>No datas Found</Alert>
        ) : (
          <>
            <div className="filterBox">
              <img
                src="https://t4.ftcdn.net/jpg/01/41/97/61/360_F_141976137_kQrdYIvfn3e0RT1EWbZOmQciOKLMgCwG.jpg"
                alt=""
              />
              <input
                type="search"
                placeholder="Start typing to search for Customers"
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <div className="overFlowCont">
              <Table>
                <thead>
                  <tr>
                    <th>SNo.</th>
                    <th>Full Name</th>
                    <th>Display Name</th>
                    <th>Store Name</th>
                    <th>Store Address</th>
                    <th>Email Address</th>
                    <th>Phone Number</th>
                    <th>GST</th>
                    <th>PAN Number</th>
                    <th>Option</th>
                    <th>Distance</th>
                    <th>Commission</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody> 
                                {
                                    data.length
                                    ?
                                    data.map((data, index) => (
                                        <tr key={index}>
                                            <th scope="row">{ index + 1 }</th>
                                            <td>{ data.fullName }</td>
                                            <td>{ data.displayName }</td>
                                            <td>{ data.storeName }</td>
                                            <td>{ data.storeAddress }</td>
                                            <td>{ data.email }</td>
                                            <td>{ data.phone }</td>
                                            <td>{ data.GST }</td>
                                            <td>{ data.Pan }</td>
                                            <td>{ data.Option }</td>
                                            <td><DeliveryRadius/></td>
                                            <td> {data.Commission} </td>
                                            <td><span className="badge bg-warning text-dark">{ data.Rating }</span></td>
                                            <td><span className="badge bg-warning text-dark">{ data.Rating }</span></td>
                                            <td>
                        <Dropdown
                          overlay={
                            <Menu>
                              <Menu.Item key="2">
                                <div className="two_Sec_Div">
                                  <i className="fa-solid fa-eye"></i>
                                  <Link to={`/product/`}>
                                    <p>View Product</p>
                                  </Link>
                                </div>
                              </Menu.Item>
                              <Menu.Item key="3">
                                <div className="two_Sec_Div">
                                  <i className="fa-sharp fa-solid fa-trash"></i>
                                  <p>Delete</p>
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
                                    ))
                                    :
                                    <tr>
                                        <td colSpan="5" className="text-center">No Data Found.</td>

                                    </tr> 
                                }
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
    </>
  );
};

export default HOC(EVendorList);
