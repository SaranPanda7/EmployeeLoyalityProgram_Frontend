import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Theme from "../components/theme";
import Pagination from "../components/Pagination";
import axios from "axios";
import { Dropdown } from "react-bootstrap";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function Addreward() {
  const [data, setData] = useState({
    txt_title: "",
    sel_reward_mode: "",
    reward_description: "",
    reward_points: "",
    reward_applicable_from: "",
    reward_applicable_till: "",
    sel_reward_applicable: "",
    // rewards_applicable_for: {
    //   employees_on_probation: false,
    //   interns: false,
    //   consultants: false,
    //   confirmed_employees: false,
    //   trainees: false,
    //   permanent: false,
    // },
  });

  const notify = () => {

    toast.success("Submit Successfully", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }

  console.log(data);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    SendRequest();
    // window.location.href = "/reward";
  };

  const SendRequest = (payload) => {
    const URL = `${process.env.REACT_APP_BACKEND_URL}/reward/create`;
    return axios(URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      data: payload,
    })
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  };

  // Get all rewards
  const [userReward, setRewardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        var config = {
          method: "get",
          url: `${process.env.REACT_APP_BACKEND_URL}/reward/all?page=1&size=50`,
          headers: {},
        };

        axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));

            setRewardData(response.data);
          })
          .catch(function (error) {});
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);


  // Get all modes
  const [rewardMode, setRewardMode] = useState([]);

  useEffect(() => {
    const rewardModes = async () => {
      try {
        var config = {
          method: "get",
          url: `${process.env.REACT_APP_BACKEND_URL}/core/modes_all?page=1&size=50`,
          headers: {},
        };

        axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            setRewardMode(response.data.items);
          })
          .catch(function (error) {
            console.log(error);
          });
      } catch (error) {
        console.error(error.message);
      }
    };

    rewardModes();
  }, []);



  // Get all groups
  const [rewardGroup, setRewardGroup] = useState([]);

  useEffect(() => {
    const rewardGroups = async () => {
      try {
        var config = {
          method: "get",
          url: `${process.env.REACT_APP_BACKEND_URL}/core/groups_all?page=1&size=50`,
          headers: {},
        };

        axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            setRewardGroup(response.data.items);
          })
          .catch(function (error) {
            console.log(error);
          });
      } catch (error) {
        console.error(error.message);
      }
    };

    rewardGroups();
  }, []);

 

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row">
            <div className="col">
              <h3 className="page-title">Rewards </h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  {/* <a href="index.html">Dashboard</a> */}
                  <Link to="/home">
                    <span>
                      <i className="la la-home"></i> Home
                    </span>
                  </Link>
                </li>
                <li className="breadcrumb-item active">
                  <i className="la la-tasks"></i> Reward
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card mb-0">
              <div className="card-header">
                <h4 className="card-title mb-0">Reward</h4>
              </div>
              <div className="card-body">
                <form onSubmit={submitHandler}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group form-border">
                        <label>Title:</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Title"
                          required
                          name="txt_title"
                          onChange={changeHandler}
                        />
                      </div>
                      <div className="form-group form-border">
                        <label>Reward Mode:</label>
                        <select
                          className="form-control"
                          required
                          name="sel_reward_mode"
                          onChange={changeHandler}
                        >
                          <option value="">Select Mode</option>
                          {rewardMode.map((mode) => (
                            <>
                              <option value={mode.description}>
                                {mode.name}
                              </option>
                            </>
                          ))}
                        </select>
                      </div>
                      <div className="form-group form-border">
                        <label>Reward Description:</label>
                        <textarea
                          rows="5"
                          cols="5"
                          className="form-control"
                          placeholder="Enter Description"
                          required
                          name="reward_description"
                          onChange={changeHandler}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group form-border">
                            <label>Points:</label>
                            <input type="number" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-border">
                            <label>Reward applicable from:</label>
                            <input
                              type="date"
                              className="form-control"
                              onFocus="this.max=new Date().toISOString().split('T')[0]"
                              required
                              name="reward_applicable_from"
                              onChange={changeHandler}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-border">
                            <label>Reward applicable till:</label>
                            <input
                              type="date"
                              className="form-control"
                              onFocus="this.min=new Date().toISOString().split('T')[0]"
                              required
                              name="reward_applicable_till"
                              onChange={changeHandler}
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="form-group form-border">
                            <label>Rewards applicable for:</label>
                            <select
                              className="form-control"
                              required
                              name="sel_reward_applicable"
                              onChange={changeHandler}
                            >
                              <option value="">Select Applicable</option>
                              {rewardGroup.map((group) => (
                                <>
                                  <option value={group.description}>
                                    {group.name}
                                  </option>
                                </>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                      {/* <div className="form-group row">
                        <label className="col-form-label col-md-12">
                          Rewards applicable for:
                        </label>
                        <div className="row">
                        {rewardGroup.map((group) => (
                                <>
                                <div className="col-md-5 offset-md-1">
                                <div className="checkbox">
                                  <label>
                                    <input type="checkbox" name={`rewards_applicable_for.${group.description}`} onChange={changeHandler} required value={group.description} />
                                    &nbsp;{group.name}
                                  </label>
                                </div>
                                </div>
                                </>
                              ))}
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div className="text-right">
                    <button type="submit" onClick={notify}  className="btn btn-primary">
                      Submit
                    </button>
                    <ToastContainer />
                  </div>
                </form>
                <div className="row">
                  <div className="col-md-12 my-2">
                    {/* <div className="table-responsive"> */}
                    <table className="table table-striped custom-table mb-0 datatable">
                      <thead>
                        <tr>
                          <th>Reward Title</th>
                          <th>Start Date</th>
                          <th>End Date</th>
                          <th>Reward Points</th>
                          <th>Description</th>
                          <th>Applicable for</th>
                          <th className="text-right no-sort">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.isArray(userReward.items) &&
                          userReward.items.map((req) => (
                            <>
                              <tr>
                                <td>{req.title}</td>
                                <td>{req.valid_from}</td>
                                <td>{req.valid_till}</td>
                                <td>{String(req.points)}</td>
                                <td>{req.description}</td>
                                {/* <td>
                            {req.employement.map((k) => (
                              <span>{k.name}</span>,
                            ))}
                            </td> */}
                                <td>{req.employement.name}</td>
                                <td className="text-right">
                                  <Dropdown
                                    className="dropdown-action"
                                    as="div"
                                  >
                                    <Dropdown.Toggle
                                      className="action-icon"
                                      as="a"
                                      id="dropdown-basic1"
                                    >
                                      <i className="material-icons">
                                        more_vert
                                      </i>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="dropdown-menu-right">
                                      <Dropdown.Item href="#">
                                        <i className="fa fa-pencil m-r-5"></i>{" "}
                                        Edit
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        href="#"
                                        // onClick={()=>delteReward(req.id)}
                                      >
                                        <i className="fa fa-trash-o m-r-5"></i>{" "}
                                        Delete
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </td>
                              </tr>
                            </>
                          ))}
                      </tbody>
                    </table>
                    {/* </div> */}
                  </div>
                </div>
              </div>
              <Pagination />
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
      <Theme></Theme>
    </div>
  );
}

export default Addreward;
