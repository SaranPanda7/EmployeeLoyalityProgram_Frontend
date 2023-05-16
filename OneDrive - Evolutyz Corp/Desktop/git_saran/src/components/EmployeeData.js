import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Modal, Dropdown } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

function EmployeeData() {
  const notify = () => {
    toast.success("Submit uccessfully", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const [modal, setModal] = useState(false);

  const handleClose = () => setModal(false);
  const handleShow = () => setModal(true);

  // eslint-disable-next-line no-unused-vars
  const [userData, setUserData] = useState([]);

  const changeHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTimeout(function(){ window.location.href ="/syncuser"} , 5000);  
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        var config = {
          method: "get",
          url: `${process.env.REACT_APP_BACKEND_URL}/user/all?page=1&size=50`,
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

  //Get all Employement_types

  // eslint-disable-next-line no-unused-vars
  const [EmployementType, setEmployementType] = useState([]);

  useEffect(() => {
    const EmployementType = async () => {
      try {
        var config = {
          method: "get",
          url: `${process.env.REACT_APP_BACKEND_URL}/core/employements_all?page=1&size=50\n`,
          headers: {},
        };

        axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));

            setEmployementType(response.data);
          })
          .catch(function (error) {});
      } catch (error) {
        console.error(error.message);
      }
    };

    EmployementType();
  }, []);

  // Get All Groups
  // eslint-disable-next-line no-unused-vars
  const [GroupType, setGroupType] = useState([]);

  useEffect(() => {
    const GroupType = async () => {
      try {
        var config = {
          method: "get",
          url: `${process.env.REACT_APP_BACKEND_URL}/core/groups_all?page=1&size=50\n`,
          headers: {},
        };

        axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));

            setGroupType(response.data);
          })
          .catch(function (error) {});
      } catch (error) {
        console.error(error.message);
      }
    };

    GroupType();
  }, []);

  return (
    <>
      {Array.isArray(userData.items) &&
        userData.items.map((req) => (
          <>
            <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
              <div className="profile-widget">
                <div>
                  <div className="profile-img">
                    <span className="avatar">
                      <img
                        src={require("../assets/img/profiles/avatar-02.jpg")}
                        alt=""
                      ></img>
                    </span>
                  </div>
                  <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                    {req.first_name} {req.last_name}
                  </h4>
                  {/* <h5>{req.employee_id}</h5> */}
                  <div className="small text-muted">{req.designation}</div>
                </div>
                <Dropdown className="profile-action" as="div">
                  <Dropdown.Toggle
                    className="nav-link action-icon"
                    as="a"
                    id="dropdown-basic1"
                  >
                    <i className="material-icons">more_vert</i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu-right">
                    <Dropdown.Item href="#" onClick={handleShow}>
                      <i className="fa fa-pencil m-r-5"></i> Edit
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </>
        ))}

      <Modal
        show={modal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="modal-right"
      >
        <div className="modal-header">
          <h5 className="modal-title">Assign Group &amp; Role</h5>
          <button
            type="button"
            className="close"
            onClick={handleClose}
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <form className="fullStretch" onSubmit={submitHandler}>
            <div className="form-group">
              <label>&nbsp;</label>
              <div className="form-group form-focus select-focus">
                <select
                  className="select form-control"
                  required
                  onChange={changeHandler}
                >
                  <option>Select Group</option>
                  {Array.isArray(GroupType.items) &&
                    GroupType.items.map((req) => (
                      <>
                        <option value={req.id}> {req.name} </option>
                      </>
                    ))}
                </select>
                <label className="focus-label">User Group</label>
              </div>
            </div>
            <div className="form-group">
              <label>&nbsp;</label>
              <div className="form-group form-focus select-focus">
                <select className="select form-control">
                  <option>Select Employement Type</option>
                  {Array.isArray(EmployementType.items) &&
                    EmployementType.items.map((req) => (
                      <>
                        <option value={req.id}>{req.name}</option>
                      </>
                    ))}
                </select>
                <label className="focus-label">Employement Type</label>
              </div>
            </div>
            <div className="modal-footer text-center">
              {/* <button className="btn btn-primary submit-btn" onClick={notify} >Save</button> */}
              <button
                type="submit"
                onClick={notify}
                className="btn btn-primary"
              >
                Save
              </button>
              <ToastContainer />
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default EmployeeData;
