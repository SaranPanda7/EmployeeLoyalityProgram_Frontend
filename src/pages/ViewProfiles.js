import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal, Nav, Tab, Dropdown } from "react-bootstrap";
import Footer from "../components/footer";
import Theme from "../components/theme";
import axios from "axios";

function ViewProfiles() {
  const [modal, setModal] = useState(false);

  const handleClose = () => setModal(false);
  const handleShow = () => setModal(true);

  // eslint-disable-next-line no-unused-vars
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        var config = {
          method: "get",
          url: `${process.env.REACT_APP_BACKEND_URL}/user/all`,
          headers: {},
        };

        axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));

            setUserData(response.data);
          })
          .catch(function (error) {});
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Tab.Container id="left-tabs-example" defaultActiveKey="gridView">
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col">
                  <h3 className="page-title">Employee</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="index.html">
                        <i className="la la-home"></i> Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">
                      <i className="la la-users"></i> Employees
                    </li>
                  </ul>
                </div>
                <div className="col-auto float-right ml-auto">
                  <Nav as="ul" variant="pills" className="view-icons">
                    <Nav.Item as="li">
                      <Nav.Link eventKey="gridView" className="grid-view btn">
                        <i className="fa fa-th"></i>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link eventKey="listView" className="grid-view btn">
                        <i className="fa fa-bars"></i>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>
            </div>
            <div className="row filter-row">
              <div className="col-sm-4 col-md-6">
                <div className="top-nav-search position-relative form-focus">
                  <input
                    className="form-control floating"
                    placeholder="&nbsp;"
                    type="text"
                  />
                  <button className="btn" type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                  <label className="focus-label">Employee ID / Employee Name</label>
                </div>
              </div>
              <div className="col-sm-4 col-md-3">
                <div className="form-group form-focus select-focus">
                  <select className="select form-control">
                    <option>Select Department</option>
                    <option>Employees on Probation</option>
                    <option>Interns</option>
                    <option> Consultants</option>
                    <option>Confirmed Employees</option>
                    <option>Trainees</option>
                  </select>
                  <label className="focus-label">User Group</label>
                </div>
              </div>
              <div className="col-sm-4 col-md-3">
                <Link className="btn btn-success btn-block"> Search </Link>
              </div>
            </div>
            <Tab.Content>
              <Tab.Pane eventKey="gridView">
                <div className="row staff-grid-row">
                  {Array.isArray(userData.items) &&
                    userData.items.map((req) => (
                      <>
                        <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                          <div className="profile-widget" onClick={handleShow}>
                            <div className="profile-img">
                              <span className="avatar">
                                <img
                                  src={require("../assets/img/profiles/avatar-02.jpg")}
                                  alt=""
                                />
                              </span>
                            </div>
                            <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                              {req.first_name} {req.last_name}
                            </h4>
                            <div className="small text-muted">
                              {req.designation}
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="listView">
                <div className="row staff-list-row">
                  <div className="col-md-12 col-sm-12 col-12 col-lg-12 col-xl-12">
                    <div className="table-responsive">
                      <table className="table table-striped custom-table datatable">
                        <thead>
                          <tr>
                            <th>Recognized</th>
                            <th>Email</th>
                            <th>Type</th>
                            <th>Points</th>
                            <th className="text-nowrap">Date</th>
                            <th>Reward Citation</th>
                            <th className="text-right no-sort">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <span className="avatar">
                                  <img
                                    alt=""
                                    src={require("../assets/img/profiles/avatar-02.jpg")}
                                  />
                                </span>
                                <span>Sridhar Kambala</span>
                              </h2>
                            </td>
                            <td>sridhar.kambala@evolutyz.com</td>
                            <td>Spot Award</td>
                            <td>500</td>
                            <td>6/6/2022</td>
                            <td>Congrats on the great work</td>
                            <td className="text-right">
                              <Dropdown className="dropdown-action" as="div">
                                <Dropdown.Toggle
                                  className="action-icon"
                                  as="a"
                                  id="dropdown-basic1"
                                >
                                  <i className="material-icons">more_vert</i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="dropdown-menu-right">
                                  <Dropdown.Item
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#edit_employee"
                                  >
                                    <i className="fa fa-pencil m-r-5"></i> Edit
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#delete_employee"
                                  >
                                    <i className="fa fa-trash-o m-r-5"></i>{" "}
                                    Delete
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <span className="avatar">
                                  <img
                                    alt=""
                                    src={require("../assets/img/profiles/avatar-09.jpg")}
                                  />
                                </span>
                                <span>Ganesh Varikuti</span>
                              </h2>
                            </td>
                            <td>ganesh.varikuti@evoutyz.com</td>
                            <td>Happy Birthday</td>
                            <td>500</td>
                            <td>25-05-2022</td>
                            <td>yes they are great at doing their work</td>
                            <td className="text-right">
                              <Dropdown className="dropdown-action" as="div">
                                <Dropdown.Toggle
                                  className="action-icon"
                                  as="a"
                                  id="dropdown-basic1"
                                >
                                  <i className="material-icons">more_vert</i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="dropdown-menu-right">
                                  <Dropdown.Item
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#edit_employee"
                                  >
                                    <i className="fa fa-pencil m-r-5"></i> Edit
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#delete_employee"
                                  >
                                    <i className="fa fa-trash-o m-r-5"></i>{" "}
                                    Delete
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <span className="avatar">
                                  <img
                                    alt=""
                                    src={require("../assets/img/profiles/avatar-10.jpg")}
                                  />
                                </span>
                                <span>Srikanth Guttula</span>
                              </h2>
                            </td>
                            <td>srikanth.guttula@evoutyz.com</td>
                            <td>Spot Award</td>
                            <td>500</td>
                            <td>2/5/2022</td>
                            <td>Great job done by him this month</td>
                            <td className="text-right">
                              <Dropdown className="dropdown-action" as="div">
                                <Dropdown.Toggle
                                  className="action-icon"
                                  as="a"
                                  id="dropdown-basic1"
                                >
                                  <i className="material-icons">more_vert</i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="dropdown-menu-right">
                                  <Dropdown.Item
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#edit_employee"
                                  >
                                    <i className="fa fa-pencil m-r-5"></i> Edit
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#delete_employee"
                                  >
                                    <i className="fa fa-trash-o m-r-5"></i>{" "}
                                    Delete
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <span className="avatar">
                                  <img
                                    alt=""
                                    src={require("../assets/img/profiles/avatar-05.jpg")}
                                  />
                                </span>
                                <span>Aditya Ramella</span>
                              </h2>
                            </td>
                            <td>aditya.ramella@evolutyz.com</td>
                            <td>Service Award</td>
                            <td>5000</td>
                            <td>12/4/2022</td>
                            <td>Congrats on reaching this milestone</td>
                            <td className="text-right">
                              <Dropdown className="dropdown-action" as="div">
                                <Dropdown.Toggle
                                  className="action-icon"
                                  as="a"
                                  id="dropdown-basic1"
                                >
                                  <i className="material-icons">more_vert</i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="dropdown-menu-right">
                                  <Dropdown.Item
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#edit_employee"
                                  >
                                    <i className="fa fa-pencil m-r-5"></i> Edit
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#delete_employee"
                                  >
                                    <i className="fa fa-trash-o m-r-5"></i>{" "}
                                    Delete
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <span className="avatar">
                                  <img
                                    alt=""
                                    src={require("../assets/img/profiles/avatar-11.jpg")}
                                  />
                                </span>
                                <span>Rajinikant Sharma</span>
                              </h2>
                            </td>
                            <td>rajinikant.sharma@evolutyz.com</td>
                            <td>Spot Award</td>
                            <td>500</td>
                            <td>28-03-2022</td>
                            <td>Well done kudos good job</td>
                            <td className="text-right">
                              <Dropdown className="dropdown-action" as="div">
                                <Dropdown.Toggle
                                  className="action-icon"
                                  as="a"
                                  id="dropdown-basic1"
                                >
                                  <i className="material-icons">more_vert</i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="dropdown-menu-right">
                                  <Dropdown.Item
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#edit_employee"
                                  >
                                    <i className="fa fa-pencil m-r-5"></i> Edit
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#delete_employee"
                                  >
                                    <i className="fa fa-trash-o m-r-5"></i>{" "}
                                    Delete
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <span className="avatar">
                                  <img
                                    alt=""
                                    src={require("../assets/img/profiles/avatar-04.jpg")}
                                  />
                                </span>
                                <span>Dungi Pravalika Reddy</span>
                              </h2>
                            </td>
                            <td>pravalika.dungi@evolutyz.com</td>
                            <td>Happy Birthday</td>
                            <td>500</td>
                            <td>28-03-2022</td>
                            <td>Many Happy Returns of the Day</td>
                            <td className="text-right">
                              <Dropdown className="dropdown-action" as="div">
                                <Dropdown.Toggle
                                  className="action-icon"
                                  as="a"
                                  id="dropdown-basic1"
                                >
                                  <i className="material-icons">more_vert</i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="dropdown-menu-right">
                                  <Dropdown.Item
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#edit_employee"
                                  >
                                    <i className="fa fa-pencil m-r-5"></i> Edit
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#delete_employee"
                                  >
                                    <i className="fa fa-trash-o m-r-5"></i>{" "}
                                    Delete
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <span className="avatar">
                                  <img
                                    alt=""
                                    src={require("../assets/img/profiles/avatar-08.jpg")}
                                  />
                                </span>
                                <span>Shalini Vinolia</span>
                              </h2>
                            </td>
                            <td>shalini.vinolia@evolutyz.com</td>
                            <td>Thank You Card</td>
                            <td></td>
                            <td>24-02-2022</td>
                            <td>Thank you for all the help</td>
                            <td className="text-right">
                              <Dropdown className="dropdown-action" as="div">
                                <Dropdown.Toggle
                                  className="action-icon"
                                  as="a"
                                  id="dropdown-basic1"
                                >
                                  <i className="material-icons">more_vert</i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="dropdown-menu-right">
                                  <Dropdown.Item
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#edit_employee"
                                  >
                                    <i className="fa fa-pencil m-r-5"></i> Edit
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#delete_employee"
                                  >
                                    <i className="fa fa-trash-o m-r-5"></i>{" "}
                                    Delete
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <span className="avatar">
                                  <img
                                    alt=""
                                    src={require("../assets/img/profiles/avatar-13.jpg")}
                                  />
                                </span>
                                <span>Sai Paturi</span>
                              </h2>
                            </td>
                            <td>sai.paturi@evolutyz.com</td>
                            <td>Spot Award</td>
                            <td>1000</td>
                            <td>24-02-2022</td>
                            <td>Great work done by Anki</td>
                            <td className="text-right">
                              <Dropdown className="dropdown-action" as="div">
                                <Dropdown.Toggle
                                  className="action-icon"
                                  as="a"
                                  id="dropdown-basic1"
                                >
                                  <i className="material-icons">more_vert</i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="dropdown-menu-right">
                                  <Dropdown.Item
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#edit_employee"
                                  >
                                    <i className="fa fa-pencil m-r-5"></i> Edit
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#delete_employee"
                                  >
                                    <i className="fa fa-trash-o m-r-5"></i>{" "}
                                    Delete
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
        <Modal
          show={modal}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          size="lg"
          centered
        >
          <div className="modal-content p-2">
            <div className="modal-heading">
              <h2>Sridhar Kambala </h2>
              <span className="popDown" onClick={handleClose}>
                <span aria-hidden="true">&times;</span>
              </span>
            </div>
            <div className="modalBody">
              <div className="profile">
                <img
                  src={require("../assets/img/profiles/avatar-02.jpg")}
                  alt="EITS1616"
                />
                <h5>
                  <strong>
                    <i className="fa fa-address-card"></i> EITS1616
                  </strong>
                </h5>
              </div>
              <div className="infos">
                <ul className="personal-info">
                  <li>
                    <div className="text">
                      <i className="fa fa-envelope"></i>{" "}
                      sridhar.kambala@evolutyz.com
                    </div>
                  </li>
                  <li>
                    <div className="text">
                      <i className="fa fa-mobile"></i> 8767960625
                    </div>
                  </li>
                  <li>
                    <div className="text">
                      <i className="fa fa-trophy"></i> Spot Award
                    </div>
                  </li>
                  <li>
                    <div className="text">
                      <i className="la la-award"></i> 500
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Modal>
        <Footer />
        <Theme />
      </div>
      {/* <Modal
        show={modal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
        className="custom-modal"
      >
        <div className="modal-content">
          <div className="modal-body">
            <div className="form-header">
              <h3>Notification</h3>
              <p>Clicking Yes would signify the completion of the activity.</p>
              <p>Are you sure you want to go ahead?</p>
            </div>
            <div className="modal-btn delete-action">
              <div className="row">
                <div className="col-6">
                  <a
                    href="javascript:void(0);"
                    className="btn btn-primary continue-btn"
                  >
                    Yes
                  </a>
                </div>
                <div className="col-6">
                  <a
                    href="javascript:void(0);"
                    onClick={handleClose}
                    className="btn btn-primary cancel-btn"
                  >
                    No
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal> */}
    </>
  );
}

export default ViewProfiles;
