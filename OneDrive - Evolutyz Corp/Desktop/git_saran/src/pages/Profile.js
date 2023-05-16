import React , {useState, useEffect}from "react";
import { Link } from "react-router-dom";
// import { Tab, Tabs } from "react-bootstrap";

import axios from "axios"

function Profile() {

  // eslint-disable-next-line no-unused-vars
  const [itsme, setMe] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        var config = {
          method: "get",
          url:`${process.env.REACT_APP_BACKEND_URL}/user/me/e0b5c47f-4c32-4b50-933b-c11fcbeda77a`,   
          headers: {},
        };
        axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));

            setMe(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
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
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Profile</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/home">
                      <span>
                        <i className="la la-home"></i> Home
                      </span>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active">
                    <i className="la la-user"></i> Profile
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card mb-0">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="profile-view">
                    <div className="profile-img-wrap">
                      <div className="profile-img">
                        <Link href="#">
                          <img
                            alt=""
                            src={require("../assets/img/profiles/avatar-02.jpg")}
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="profile-basic">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="profile-info-left">
                            <h3 className="user-name m-t-0 mb-0">
                            {itsme.first_name}  {itsme.last_name}
                            </h3>
                            <h6 className="text-muted">{itsme.designation}</h6>
                            <div className="staff-id">
                              Employee ID : {itsme.employee_id}
                            </div>
                            <div className="small doj text-muted">
                              Date of Birth : {itsme.dob}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7">
                          <ul className="personal-info">
                            <li>
                              <div className="title">Phone:</div>
                              <div className="text">
                                <Link href="tel:+918767960625">
                                  {itsme.phone_number}
                                </Link>
                              </div>
                            </li>
                            <li>
                              <div className="title">Email:</div>
                              <div className="text">
                                <Link href="mailto:sridhar.kambala@evolutyz.com?subject = Good Morning&body = Hi Sridhar,">
                                 {itsme.email_id}
                                </Link>
                              </div>
                            </li>
                            <li>
                              <div className="title">Birthday:</div>
                              <div className="text">{itsme.dob}</div>
                            </li>
                            <li>
                              <div className="title">Address:</div>
                              <div className="text">
                                Sai Sadan Apartments, 2nd Floor, 53 26-11, KRM
                                Colony, Seethammadara, Visakhapatnam, Andhra
                                Pradesh 530013
                              </div>
                            </li>
                            <li>
                              <div className="title">Gender:</div>
                              <div className="text">{itsme.gender}</div>
                            </li>
                            <li>
                              <div className="title">Reports to:</div>
                              <div className="text">
                                <div className="avatar-box">
                                  <div className="avatar avatar-xs">
                                    <img
                                      src={require("../assets/img/profiles/avatar-16.jpg")}
                                      alt=""
                                    />
                                  </div>
                                </div>
                                Srinivas Arasada
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="pro-edit">
                      <Link
                        data-target="#profile_info"
                        data-toggle="modal"
                        className="edit-icon"
                        href="#"
                      >
                        <i className="fa fa-pencil"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Tabs defaultActiveKey="profile" className="nav-tabs-bottom">
            <Tab eventKey="profile" title="Profile">
              <div className="tab-content">
                <div
                  id="emp_profile"
                  className="pro-overview tab-pane fade show active"
                >
                  <div className="row">
                    <div className="col-md-6 d-flex">
                      <div className="card profile-box flex-fill">
                        <div className="card-body">
                          <h3 className="card-title">Personal Informations </h3>
                          <ul className="personal-info">
                            <li>
                              <div className="title">Passport No.</div>
                              <div className="text">9876543210</div>
                            </li>
                            <li>
                              <div className="title">Passport Exp Date.</div>
                              <div className="text">9876543210</div>
                            </li>
                            <li>
                              <div className="title">Tel</div>
                              <div className="text">
                                <Link href="">9876543210</Link>
                              </div>
                            </li>
                            <li>
                              <div className="title">Nationality</div>
                              <div className="text">Indian</div>
                            </li>
                            <li>
                              <div className="title">Religion</div>
                              <div className="text">Christian</div>
                            </li>
                            <li>
                              <div className="title">Marital status</div>
                              <div className="text">Married</div>
                            </li>
                            <li>
                              <div className="title">Employment of spouse</div>
                              <div className="text">No</div>
                            </li>
                            <li>
                              <div className="title">No. of children</div>
                              <div className="text">2</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex">
                      <div className="card profile-box flex-fill">
                        <div className="card-body">
                          <h3 className="card-title">Emergency Contact </h3>
                          <h5 className="section-title">Primary</h5>
                          <ul className="personal-info">
                            <li>
                              <div className="title">Name</div>
                              <div className="text">John Doe</div>
                            </li>
                            <li>
                              <div className="title">Relationship</div>
                              <div className="text">Father</div>
                            </li>
                            <li>
                              <div className="title">Phone </div>
                              <div className="text">9876543210, 9876543210</div>
                            </li>
                          </ul>
                          <hr />
                          <h5 className="section-title">Secondary</h5>
                          <ul className="personal-info">
                            <li>
                              <div className="title">Name</div>
                              <div className="text">Karen Wills</div>
                            </li>
                            <li>
                              <div className="title">Relationship</div>
                              <div className="text">Brother</div>
                            </li>
                            <li>
                              <div className="title">Phone </div>
                              <div className="text">9876543210, 9876543210</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 d-flex">
                      <div className="card profile-box flex-fill">
                        <div className="card-body">
                          <h3 className="card-title">Bank information</h3>
                          <ul className="personal-info">
                            <li>
                              <div className="title">Bank name</div>
                              <div className="text">ICICI Bank</div>
                            </li>
                            <li>
                              <div className="title">Bank account No.</div>
                              <div className="text">159843014641</div>
                            </li>
                            <li>
                              <div className="title">IFSC Code</div>
                              <div className="text">ICI24504</div>
                            </li>
                            <li>
                              <div className="title">PAN No</div>
                              <div className="text">TC000Y56</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex">
                      <div className="card profile-box flex-fill">
                        <div className="card-body">
                          <h3 className="card-title">Family Informations </h3>
                          <div className="table-responsive">
                            <table className="table table-nowrap">
                              <thead>
                                <tr>
                                  <th>Name</th>
                                  <th>Relationship</th>
                                  <th>Date of Birth</th>
                                  <th>Phone</th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Leo</td>
                                  <td>Brother</td>
                                  <td>Feb 16th, 2019</td>
                                  <td>9876543210</td>
                                  <td className="text-right"></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 d-flex">
                      <div className="card profile-box flex-fill">
                        <div className="card-body">
                          <h3 className="card-title">
                            Education Informations{" "}
                          </h3>
                          <div className="experience-box">
                            <ul className="experience-list">
                              <li>
                                <div className="experience-user">
                                  <div className="before-circle"></div>
                                </div>
                                <div className="experience-content">
                                  <div className="timeline-content">
                                    <span className="name">
                                      International College of Arts and Science
                                      (UG)
                                    </span>
                                    <div>Bsc Computer Science</div>
                                    <span className="time">2000 - 2003</span>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="experience-user">
                                  <div className="before-circle"></div>
                                </div>
                                <div className="experience-content">
                                  <div className="timeline-content">
                                    <span className="name">
                                      International College of Arts and Science
                                      (PG)
                                    </span>
                                    <div>Msc Computer Science</div>
                                    <span className="time">2000 - 2003</span>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex">
                      <div className="card profile-box flex-fill">
                        <div className="card-body">
                          <h3 className="card-title">Experience </h3>
                          <div className="experience-box">
                            <ul className="experience-list">
                              <li>
                                <div className="experience-user">
                                  <div className="before-circle"></div>
                                </div>
                                <div className="experience-content">
                                  <div className="timeline-content">
                                    <span className="name">
                                      Web Designer at Zen Corporation
                                    </span>
                                    <span className="time">
                                      Jan 2013 - Present (5 years 2 months)
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="experience-user">
                                  <div className="before-circle"></div>
                                </div>
                                <div className="experience-content">
                                  <div className="timeline-content">
                                    <span className="name">
                                      Web Designer at Ron-tech
                                    </span>
                                    <span className="time">
                                      Jan 2013 - Present (5 years 2 months)
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="experience-user">
                                  <div className="before-circle"></div>
                                </div>
                                <div className="experience-content">
                                  <div className="timeline-content">
                                    <span className="name">
                                      Web Designer at Dalt Technology
                                    </span>
                                    <span className="time">
                                      Jan 2013 - Present (5 years 2 months)
                                    </span>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </Tab>
            <Tab eventKey="projects" title="Projects">
              <div className="row">
                <div className="col-md-12">
                  <div className="activity">
                    <div className="activity-box">
                      <ul className="activity-list">
                        <li>
                          <div className="activity-user">
                            <Link
                              href="profile.html"
                              title="Lesley Grauer"
                              data-toggle="tooltip"
                              className="avatar"
                            >
                              <img
                                src={require("../assets/img/profiles/avatar-01.jpg")}
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="activity-content">
                            <div className="timeline-content">
                              <Link href="profile.html" className="name">
                                Lesley Grauer
                              </Link>
                              added new task
                              <Link href="#">Hospital Administration</Link>
                              <span className="time">4 mins ago</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="activity-user">
                            <Link
                              href="profile.html"
                              className="avatar"
                              title="Jeffery Lalor"
                              data-toggle="tooltip"
                            >
                              <img
                                src={require("../assets/img/profiles/avatar-16.jpg")}
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="activity-content">
                            <div className="timeline-content">
                              <Link href="profile.html" className="name">
                                Jeffery Lalor
                              </Link>
                              added
                              <Link href="profile.html" className="name">
                                Loren Gatlin
                              </Link>
                              and
                              <Link href="profile.html" className="name">
                                Tarah Shropshire
                              </Link>
                              to project
                              <Link href="#">Patient appointment booking</Link>
                              <span className="time">6 mins ago</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="activity-user">
                            <Link
                              href="profile.html"
                              title="Catherine Manseau"
                              data-toggle="tooltip"
                              className="avatar"
                            >
                              <img
                                src={require("../assets/img/profiles/avatar-08.jpg")}
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="activity-content">
                            <div className="timeline-content">
                              <Link href="profile.html" className="name">
                                Catherine Manseau
                              </Link>
                              completed task
                              <Link>
                                Appointment booking with payment gateway
                              </Link>
                              <span className="time">12 mins ago</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="activity-user">
                            <Link
                              href="#"
                              title="Bernardo Galaviz"
                              data-toggle="tooltip"
                              className="avatar"
                            >
                              <img
                                src={require("../assets/img/profiles/avatar-13.jpg")}
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="activity-content">
                            <div className="timeline-content">
                              <Link href="profile.html" className="name">
                                Bernardo Galaviz
                              </Link>
                              changed the task name
                              <Link href="#">Doctor available module</Link>
                              <span className="time">1 day ago</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="activity-user">
                            <Link
                              href="profile.html"
                              title="Mike Litorus"
                              data-toggle="tooltip"
                              className="avatar"
                            >
                              <img
                                src={require("../assets/img/profiles/avatar-05.jpg")}
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="activity-content">
                            <div className="timeline-content">
                              <Link href="profile.html" className="name">
                                Mike Litorus
                              </Link>
                              added new task
                              <Link href="#">
                                Patient and Doctor video conferencing
                              </Link>
                              <span className="time">2 days ago</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="activity-user">
                            <Link
                              href="profile.html"
                              title="Jeffery Lalor"
                              data-toggle="tooltip"
                              className="avatar"
                            >
                              <img
                                src={require("../assets/img/profiles/avatar-16.jpg")}
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="activity-content">
                            <div className="timeline-content">
                              <Link href="profile.html" className="name">
                                Jeffery Lalor
                              </Link>
                              added
                              <Link href="profile.html" className="name">
                                Jeffrey Warden
                              </Link>
                              and
                              <Link href="profile.html" className="name">
                                Bernardo Galaviz
                              </Link>
                              to the task of{" "}
                              <Link href="#">Private chat module</Link>
                              <span className="time">7 days ago</span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="bank" title="Bank & Statutory (Admin only)">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Basic Salary Information</h3>
                  <form>
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label className="col-form-label">
                            Salary basis
                            <span className="text-danger">*</span>
                          </label>
                          <select className="select">
                            <option>Select salary basis type</option>
                            <option>Hourly</option>
                            <option>Daily</option>
                            <option>Weekly</option>
                            <option>Monthly</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label className="col-form-label">
                            Salary amount
                            <small className="text-muted">per month</small>
                          </label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">$</span>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Type your salary amount"
                              value="0.00"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label className="col-form-label">Payment type</label>
                          <select className="select">
                            <option>Select payment type</option>
                            <option>Bank transfer</option>
                            <option>Check</option>
                            <option>Cash</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <h3 className="card-title">PF Information</h3>
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label className="col-form-label">
                            PF contribution
                          </label>
                          <select className="select">
                            <option>Select PF contribution</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label className="col-form-label">
                            PF No. <span className="text-danger">*</span>
                          </label>
                          <select className="select">
                            <option>Select PF contribution</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label className="col-form-label">
                            Employee PF rate
                          </label>
                          <select className="select">
                            <option>Select PF contribution</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label className="col-form-label">
                            Additional rate
                            <span className="text-danger">*</span>
                          </label>
                          <select className="select">
                            <option>Select additional rate</option>
                            <option>0%</option>
                            <option>1%</option>
                            <option>2%</option>
                            <option>3%</option>
                            <option>4%</option>
                            <option>5%</option>
                            <option>6%</option>
                            <option>7%</option>
                            <option>8%</option>
                            <option>9%</option>
                            <option>10%</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label className="col-form-label">Total rate</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="N/A"
                            value="11%"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label className="col-form-label">
                            Employee PF rate
                          </label>
                          <select className="select">
                            <option>Select PF contribution</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label className="col-form-label">
                            Additional rate
                            <span className="text-danger">*</span>
                          </label>
                          <select className="select">
                            <option>Select additional rate</option>
                            <option>0%</option>
                            <option>1%</option>
                            <option>2%</option>
                            <option>3%</option>
                            <option>4%</option>
                            <option>5%</option>
                            <option>6%</option>
                            <option>7%</option>
                            <option>8%</option>
                            <option>9%</option>
                            <option>10%</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label className="col-form-label">Total rate</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="N/A"
                            value="11%"
                          />
                        </div>
                      </div>
                    </div>
                    <hr />
                    <h3 className="card-title">ESI Information</h3>
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label className="col-form-label">
                            ESI contribution
                          </label>
                          <select className="select">
                            <option>Select ESI contribution</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label className="col-form-label">
                            ESI No. <span className="text-danger">*</span>
                          </label>
                          <select className="select">
                            <option>Select ESI contribution</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label className="col-form-label">
                            Employee ESI rate
                          </label>
                          <select className="select">
                            <option>Select ESI contribution</option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label className="col-form-label">
                            Additional rate
                            <span className="text-danger">*</span>
                          </label>
                          <select className="select">
                            <option>Select additional rate</option>
                            <option>0%</option>
                            <option>1%</option>
                            <option>2%</option>
                            <option>3%</option>
                            <option>4%</option>
                            <option>5%</option>
                            <option>6%</option>
                            <option>7%</option>
                            <option>8%</option>
                            <option>9%</option>
                            <option>10%</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label className="col-form-label">Total rate</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="N/A"
                            value="11%"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="submit-section">
                      <button
                        className="btn btn-primary submit-btn"
                        type="submit"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Tab>
          </Tabs> */}
        </div>
      </div>
    </>
  );
}

export default Profile;
