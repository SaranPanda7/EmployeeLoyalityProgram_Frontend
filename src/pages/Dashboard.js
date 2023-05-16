import { useState, useEffect } from "react";
import { useMsal } from "@azure/msal-react";
import Footer from "../components/footer";
import Theme from "../components/theme";
import Carousel from "react-grid-carousel";
import { Link } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const ProfileData = (props) => {
    console.log(props.graphData);
  };

  const { accounts } = useMsal();
  // eslint-disable-next-line no-unused-vars
  const [graphData, setGraphData] = useState(null);

  const name = accounts[0] && accounts[0].name;

  // eslint-disable-next-line no-unused-vars
  const [rewardCount, setrewardCount] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        var config = {
          method: "get",
          url: `${process.env.REACT_APP_BACKEND_URL}/dashbaord/assignedRewardCount?page=1&size=50`,
          headers: {},
        };

        axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));

            setrewardCount(response.data.items);
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
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ProfileData graphData={graphData} />
                <h3 className="page-title">Welcome {name} ,</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item active">
                    <i className="la la-home"></i> Home
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Carousel
            cols={2}
            rows={1}
            gap={15}
            loop
            slide="false"
            indicators="false"
            controls="false"
            nextIcon='<span aria-hidden="true" className="carousel-control-next-icon"></span>'
          >
            {rewardCount.map((req) => (
              <Carousel.Item key={req.id}>
                <div className="card dash-widget">
                  <div className="card-body">
                    <span className="dash-widget-icon">
                      <i className="fa fa-list-alt"></i>
                    </span>
                    <div className="dash-widget-info">
                      <h2>{req.count}</h2>
                      <h4>
                        {req.title
                          .split("-")
                          .slice(0, req.title.split("-").length - 1)}
                      </h4>
                      <h6 className="text-muted">
                        {req.title
                          .split("-")
                          .slice(
                            req.title.split("-").length - 1,
                            req.title.split("-").length
                          )}
                      </h6>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>

          <div className="row">
            <div className="col-md-12 col-lg-6 col-xl-3 d-flex">
              <div className="card flex-fill">
                <div className="card-body">
                  <h4 className="card-title">
                    Top Performers{" "}
                    <span className="badge bg-inverse-danger ml-2">5</span>
                  </h4>
                  <div className="leave-info-box">
                    <div className="media align-items-center">
                      <Link href="profile.html" className="avatar">
                        <img
                          alt=""
                          src={require("../assets/img/user.jpg")}
                        ></img>
                      </Link>
                      <div className="media-body">
                        <div className="text-sm my-0 font-weight-bold">
                          Pravalika Reddy
                        </div>
                        <span className="badge bg-inverse-warning">500</span>
                        <span className="text-xs font-weight-light text-muted">
                          Points
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="leave-info-box">
                    <div className="media align-items-center">
                      <Link href="profile.html" className="avatar">
                        <img
                          alt=""
                          src={require("../assets/img/user.jpg")}
                        ></img>
                      </Link>
                      <div className="media-body">
                        <div className="text-sm my-0 font-weight-bold">
                          Avinash GM
                        </div>
                        <span className="badge bg-inverse-success">800</span>
                        <span className="text-xs font-weight-light text-muted">
                          Points
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="load-more text-center">
                    <Link className="text-dark" href="javascript:void(0);">
                      Load More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 col-xl-3 d-flex">
              <div className="card flex-fill">
                <div className="card-body">
                  <h4 className="card-title">
                    Recent Awardees{" "}
                    <span className="badge bg-inverse-danger ml-2">2</span>
                  </h4>
                  <div className="leave-info-box">
                    <div className="media align-items-center">
                      <Link href="profile.html" className="avatar">
                        <img
                          alt=""
                          src={require("../assets/img/user.jpg")}
                        ></img>
                      </Link>
                      <div className="media-body">
                        <div className="text-sm my-0 font-weight-bold">
                          Venkat Chaitanya
                        </div>
                        <span className="text-xs font-weight-light text-muted">
                          Permanent
                        </span>
                      </div>
                    </div>
                    <div className="row align-items-center mt-3">
                      <div className="col-6">
                        <h6 className="mb-0">4 Sep 2019</h6>
                        <span className="text-sm text-muted">5k Run</span>
                      </div>
                      <div className="col-6 text-right">
                        <span className="badge bg-inverse-warning">
                          runner-up
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="leave-info-box">
                    <div className="media align-items-center">
                      <Link href="profile.html" className="avatar">
                        <img
                          alt=""
                          src={require("../assets/img/user.jpg")}
                        ></img>
                      </Link>
                      <div className="media-body">
                        <div className="text-sm my-0 font-weight-bold">
                          Alekhya
                        </div>
                        <span className="text-xs font-weight-light text-muted">
                          Intern
                        </span>
                      </div>
                    </div>
                    <div className="row align-items-center mt-3">
                      <div className="col-6">
                        <h6 className="mb-0">4 Sep 2019</h6>
                        <span className="text-sm text-muted">5k Run</span>
                      </div>
                      <div className="col-6 text-right">
                        <span className="badge bg-inverse-success">Winner</span>
                      </div>
                    </div>
                  </div>
                  <div className="load-more text-center">
                    <Link className="text-dark" href="javascript:void(0);">
                      Load More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 col-xl-6 d-flex">
              <div className="card card-table flex-fill">
                <div className="card-header">
                  <h3 className="card-title mb-0">Active Reward Programs</h3>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table custom-table mb-0">
                      <thead>
                        <tr>
                          <th>Program Name </th>
                          <th>Progress</th>
                          <th className="text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h2>
                              <Link href="project-view.html">Emoji Quiz</Link>
                            </h2>
                            <small className="block text-ellipsis">
                              <span>16</span>{" "}
                              <span className="text-muted"> Participants.</span>
                            </small>
                          </td>
                          <td>
                            <ul className="team-members">
                              <li>
                                <Link
                                  href="#"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="John Doe"
                                >
                                  <img
                                    alt=""
                                    src={require("../assets/img/profiles/avatar-02.jpg")}
                                  ></img>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Richard Miles"
                                >
                                  <img
                                    alt=""
                                    src={require("../assets/img/profiles/avatar-09.jpg")}
                                  ></img>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="John Smith"
                                >
                                  <img
                                    alt=""
                                    src={require("../assets/img/profiles/avatar-10.jpg")}
                                  ></img>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Mike Litorus"
                                >
                                  <img
                                    alt=""
                                    src={require("../assets/img/profiles/avatar-05.jpg")}
                                  ></img>
                                </Link>
                              </li>
                              <li className="dropdown avatar-dropdown">
                                <Link
                                  href="#"
                                  className="all-users dropdown-toggle"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  +15
                                </Link>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <div className="avatar-group">
                                    <Link className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-02.jpg")}
                                      ></img>
                                    </Link>
                                    <Link className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-09.jpg")}
                                      ></img>
                                    </Link>
                                    <Link className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-10.jpg")}
                                      ></img>
                                    </Link>
                                    <Link className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-05.jpg")}
                                      ></img>
                                    </Link>
                                    <Link className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-11.jpg")}
                                      ></img>
                                    </Link>
                                    <Link className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-12.jpg")}
                                      ></img>
                                    </Link>
                                    <Link className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-13.jpg")}
                                      ></img>
                                    </Link>
                                    <Link className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-01.jpg")}
                                      ></img>
                                    </Link>
                                    <Link className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-16.jpg")}
                                      ></img>
                                    </Link>
                                  </div>
                                  <div className="avatar-pagination">
                                    <ul className="pagination">
                                      <li className="page-item">
                                        <Link
                                          className="page-link"
                                          href="#"
                                          aria-label="Previous"
                                        >
                                          <span aria-hidden="true">«</span>
                                          <span className="sr-only">
                                            Previous
                                          </span>
                                        </Link>
                                      </li>
                                      <li className="page-item">
                                        <Link className="page-link" href="#">
                                          1
                                        </Link>
                                      </li>
                                      <li className="page-item">
                                        <Link className="page-link" href="#">
                                          2
                                        </Link>
                                      </li>
                                      <li className="page-item">
                                        <Link
                                          className="page-link"
                                          href="#"
                                          aria-label="Next"
                                        >
                                          <span aria-hidden="true">»</span>
                                          <span className="sr-only">Next</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <Link
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="material-icons">more_vert</i>
                              </Link>
                              <div className="dropdown-menu dropdown-menu-right">
                                <Link
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-pencil m-r-5"></i> Edit
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-trash-o m-r-5"></i> Delete
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2>
                              <Link href="project-view.html">
                                Friendship Day Event
                              </Link>
                            </h2>
                            <small className="block text-ellipsis">
                              <span>21</span>{" "}
                              <span className="text-muted">Participants.</span>
                            </small>
                          </td>
                          <td className="pro-teams">
                            <div className="avatar-group">
                              <div className="avatar">
                                <img
                                  className="avatar-img rounded-circle border border-white"
                                  alt="User Img"
                                  src={require("../assets/img/profiles/avatar-11.jpg")}
                                ></img>
                              </div>
                              <div className="avatar">
                                <img
                                  className="avatar-img rounded-circle border border-white"
                                  alt="User Img"
                                  src={require("../assets/img/profiles/avatar-01.jpg")}
                                ></img>
                              </div>
                              <div className="avatar">
                                <img
                                  className="avatar-img rounded-circle border border-white"
                                  alt="User Img"
                                  src={require("../assets/img/profiles/avatar-16.jpg")}
                                ></img>
                              </div>
                              <div className="avatar">
                                <Link
                                  href=""
                                  className="avatar-title rounded-circle border border-white"
                                  data-toggle="modal"
                                  data-target="#assign_leader"
                                >
                                  <i className="fa fa-plus"></i>
                                </Link>
                              </div>
                            </div>
                          </td>

                          {/* <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <Link
                                  href="#"
                                  className="action-icon dropdown-toggle"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="material-icons">more_vert</i>
                                </Link>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <Link
                                    className="dropdown-item"
                                    href="javascript:void(0)"
                                  >
                                    <i className="fa fa-pencil m-r-5"></i> Edit
                                  </Link>
                                  <Link
                                    className="dropdown-item"
                                    href="javascript:void(0)"
                                  >
                                    <i className="fa fa-trash-o m-r-5"></i> Delete
                                  </Link>
                                </div>
                              </div>
                            </td> */}

                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <Link
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="material-icons">more_vert</i>
                              </Link>
                              <div className="dropdown-menu dropdown-menu-right">
                                <Link
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-pencil m-r-5"></i> Edit
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-trash-o m-r-5"></i> Delete
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2>
                              <Link href="project-view.html">
                                Icream co-worker bonding
                              </Link>
                            </h2>
                            <small className="block text-ellipsis">
                              <span>09</span>{" "}
                              <span className="text-muted">Participants.</span>
                            </small>
                          </td>
                          <td>
                            <ul className="team-members">
                              <li>
                                <Link
                                  href="#"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="John Doe"
                                >
                                  <img
                                    alt=""
                                    src={require("../assets/img/profiles/avatar-02.jpg")}
                                  ></img>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Richard Miles"
                                >
                                  <img
                                    alt=""
                                    src={require("../assets/img/profiles/avatar-09.jpg")}
                                  ></img>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="John Smith"
                                >
                                  <img
                                    alt=""
                                    src={require("../assets/img/profiles/avatar-10.jpg")}
                                  ></img>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Mike Litorus"
                                >
                                  <img
                                    alt=""
                                    src={require("../assets/img/profiles/avatar-05.jpg")}
                                  ></img>
                                </Link>
                              </li>
                              <li className="dropdown avatar-dropdown">
                                <Link
                                  href="#"
                                  className="all-users dropdown-toggle"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  +15
                                </Link>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <div className="avatar-group">
                                    <Link className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-02.jpg")}
                                      ></img>
                                    </Link>
                                    <Link className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-09.jpg")}
                                      ></img>
                                    </Link>
                                    <Link className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-10.jpg")}
                                      ></img>
                                    </Link>
                                    <Link className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-05.jpg")}
                                      ></img>
                                    </Link>
                                    <Link className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-11.jpg")}
                                      ></img>
                                    </Link>
                                    <Link className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-12.jpg")}
                                      ></img>
                                    </Link>
                                    <Link className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-13.jpg")}
                                      ></img>
                                    </Link>
                                    <Link className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-01.jpg")}
                                      ></img>
                                    </Link>
                                    <Link className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-16.jpg")}
                                      ></img>
                                    </Link>
                                  </div>
                                  <div className="avatar-pagination">
                                    <ul className="pagination">
                                      <li className="page-item">
                                        <Link
                                          className="page-link"
                                          href="#"
                                          aria-label="Previous"
                                        >
                                          <span aria-hidden="true">«</span>
                                          <span className="sr-only">
                                            Previous
                                          </span>
                                        </Link>
                                      </li>
                                      <li className="page-item">
                                        <Link className="page-link" href="#">
                                          1
                                        </Link>
                                      </li>
                                      <li className="page-item">
                                        <Link className="page-link" href="#">
                                          2
                                        </Link>
                                      </li>
                                      <li className="page-item">
                                        <Link
                                          className="page-link"
                                          href="#"
                                          aria-label="Next"
                                        >
                                          <span aria-hidden="true">»</span>
                                          <span className="sr-only">Next</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <Link
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="material-icons">more_vert</i>
                              </Link>
                              <div className="dropdown-menu dropdown-menu-right">
                                <Link
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-pencil m-r-5"></i> Edit
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-trash-o m-r-5"></i> Delete
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2>
                              <Link href="project-view.html">5k Run</Link>
                            </h2>
                            <small className="block text-ellipsis">
                              <span>18</span>{" "}
                              <span className="text-muted"> Participants.</span>
                            </small>
                          </td>
                          <td className="pro-teams">
                            <div className="avatar-group">
                              <div className="avatar">
                                <img
                                  className="avatar-img rounded-circle border border-white"
                                  alt="User Img"
                                  src={require("../assets/img/profiles/avatar-11.jpg")}
                                ></img>
                              </div>
                              <div className="avatar">
                                <img
                                  className="avatar-img rounded-circle border border-white"
                                  alt="User Img"
                                  src={require("../assets/img/profiles/avatar-01.jpg")}
                                ></img>
                              </div>
                              <div className="avatar">
                                <img
                                  className="avatar-img rounded-circle border border-white"
                                  alt="User Img"
                                  src={require("../assets/img/profiles/avatar-16.jpg")}
                                ></img>
                              </div>
                              <div className="avatar">
                                <Link
                                  href=""
                                  className="avatar-title rounded-circle border border-white"
                                  data-toggle="modal"
                                  data-target="#assign_leader"
                                >
                                  <i className="fa fa-plus"></i>
                                </Link>
                              </div>
                            </div>
                          </td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <Link
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="material-icons">more_vert</i>
                              </Link>
                              <div className="dropdown-menu dropdown-menu-right">
                                <Link
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-pencil m-r-5"></i> Edit
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-trash-o m-r-5"></i> Delete
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2>
                              <Link href="project-view.html">Independence Day</Link>
                            </h2>
                            <small className="block text-ellipsis">
                              <span>27</span>{" "}
                              <span className="text-muted"> Participants.</span>
                            </small>
                          </td>
                          <td>
                            <ul className="team-members">
                              <li>
                                <Link
                                  href="#"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="John Doe"
                                >
                                  <img
                                    alt=""
                                    src={require("../assets/img/profiles/avatar-02.jpg")}
                                  ></img>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Richard Miles"
                                >
                                  <img
                                    alt=""
                                    src={require("../assets/img/profiles/avatar-09.jpg")}
                                  ></img>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="John Smith"
                                >
                                  <img
                                    alt=""
                                    src={require("../assets/img/profiles/avatar-10.jpg")}
                                  ></img>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Mike Litorus"
                                >
                                  <img
                                    alt=""
                                    src={require("../assets/img/profiles/avatar-05.jpg")}
                                  ></img>
                                </Link>
                              </li>
                              <li className="dropdown avatar-dropdown">
                                <Link
                                  href="#"
                                  className="all-users dropdown-toggle"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  +15
                                </Link>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <div className="avatar-group">
                                    <Link className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-02.jpg")}
                                      ></img>
                                    </Link>
                                    <Link className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-09.jpg")}
                                      ></img>
                                    </Link>
                                    <Link className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-10.jpg")}
                                      ></img>
                                    </Link>
                                    <Link className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-05.jpg")}
                                      ></img>
                                    </Link>
                                    <Link className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-11.jpg")}
                                      ></img>
                                    </Link>
                                    <Link className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-12.jpg")}
                                      ></img>
                                    </Link>
                                    <Link className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-13.jpg")}
                                      ></img>
                                    </Link>
                                    <Link className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-01.jpg")}
                                      ></img>
                                    </Link>
                                    <Link className="avatar avatar-xs" href="#">
                                      <img
                                        alt=""
                                        src={require("../assets/img/profiles/avatar-16.jpg")}
                                      ></img>
                                    </Link>
                                  </div>
                                  <div className="avatar-pagination">
                                    <ul className="pagination">
                                      <li className="page-item">
                                        <Link
                                          className="page-link"
                                          href="#"
                                          aria-label="Previous"
                                        >
                                          <span aria-hidden="true">«</span>
                                          <span className="sr-only">
                                            Previous
                                          </span>
                                        </Link>
                                      </li>
                                      <li className="page-item">
                                        <Link className="page-link" href="#">
                                          1
                                        </Link>
                                      </li>
                                      <li className="page-item">
                                        <Link className="page-link" href="#">
                                          2
                                        </Link>
                                      </li>
                                      <li className="page-item">
                                        <Link
                                          className="page-link"
                                          href="#"
                                          aria-label="Next"
                                        >
                                          <span aria-hidden="true">»</span>
                                          <span className="sr-only">Next</span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <Link
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="material-icons">more_vert</i>
                              </Link>
                              <div className="dropdown-menu dropdown-menu-right">
                                <Link
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-pencil m-r-5"></i> Edit
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-trash-o m-r-5"></i> Delete
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card-footer">
                  <Link href="projects.html">View all activities</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 d-flex">
              <div className="card card-table flex-fill">
                <div className="card-header">
                  <h3 className="card-title mb-0">Social-Media Leadboard</h3>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table custom-table mb-0">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Status</th>
                          <th className="text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <Link href="#" className="avatar">
                                <img
                                  alt=""
                                  src={require("../assets/img/profiles/avatar-19.jpg")}
                                ></img>
                              </Link>
                              <Link href="client-profile.html">
                                Sudeep Sehgal <span>Fullstack</span>
                              </Link>
                            </h2>
                          </td>
                          <td>Sudeep.Sehgal@evolutyz.com</td>
                          <td>
                            <Link className="btn btn-white btn-sm btn-rounded">
                              <i className="fa fa-dot-circle-o text-success"></i>{" "}
                              Online
                            </Link>
                          </td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <Link
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="material-icons">more_vert</i>
                              </Link>
                              <div className="dropdown-menu dropdown-menu-right">
                                <Link
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-pencil m-r-5"></i> Edit
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-trash-o m-r-5"></i> Delete
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <Link href="#" className="avatar">
                                <img
                                  alt=""
                                  src={require("../assets/img/profiles/avatar-19.jpg")}
                                ></img>
                              </Link>
                              <Link href="client-profile.html">
                                Sanjay Ramadugu <span>Devops</span>
                              </Link>
                            </h2>
                          </td>
                          <td>Sanjay.Ramadugu@evolutyz.com</td>
                          <td>
                            <Link className="btn btn-white btn-sm btn-rounded">
                              <i className="fa fa-dot-circle-o text-danger"></i>{" "}
                              Offline
                            </Link>
                          </td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <Link
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="material-icons">more_vert</i>
                              </Link>
                              <div className="dropdown-menu dropdown-menu-right">
                                <Link
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-pencil m-r-5"></i> Edit
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-trash-o m-r-5"></i> Delete
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <Link href="client-profile.html" className="avatar">
                                <img
                                  alt=""
                                  src={require("../assets/img/profiles/avatar-07.jpg")}
                                ></img>
                              </Link>
                              <Link href="client-profile.html">
                                Florence Masih <span>HR | Noida</span>
                              </Link>
                            </h2>
                          </td>
                          <td>Florence.Masih@evolutyz.com</td>
                          <td>
                            <Link className="btn btn-white btn-sm btn-rounded">
                              <i className="fa fa-dot-circle-o text-danger"></i>{" "}
                              Offline
                            </Link>
                          </td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <Link
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="material-icons">more_vert</i>
                              </Link>
                              <div className="dropdown-menu dropdown-menu-right">
                                <Link
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-pencil m-r-5"></i> Edit
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-trash-o m-r-5"></i> Delete
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <Link href="client-profile.html" className="avatar">
                                <img
                                  alt=""
                                  src={require("../assets/img/profiles/avatar-06.jpg")}
                                ></img>
                              </Link>
                              <Link href="client-profile.html">
                                {" "}
                                Rajnikant Sharma <span>Delivery Manager</span>
                              </Link>
                            </h2>
                          </td>
                          <td>Rajnikant.Sharma@evolutyz.com</td>
                          <td>
                            <div className="dropdown action-label">
                              <Link
                                className="btn btn-white btn-sm btn-rounded "
                                href="#"
                                // data-toggle="dropdown"
                                // aria-expanded="false"
                              >
                                <i className="fa fa-dot-circle-o text-success"></i>{" "}
                                Online
                              </Link>
                              {/* <div className="dropdown-menu dropdown-menu-right">
                                <Link className="dropdown-item" href="#">
                                  <i className="fa fa-dot-circle-o text-success"></i>{" "}
                                  Online
                                </Link>
                                <Link className="dropdown-item" href="#">
                                  <i className="fa fa-dot-circle-o text-danger"></i>{" "}
                                  Offline
                                </Link>
                              </div> */}
                            </div>
                          </td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <Link
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="material-icons">more_vert</i>
                              </Link>
                              <div className="dropdown-menu dropdown-menu-right">
                                <Link
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-pencil m-r-5"></i> Edit
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-trash-o m-r-5"></i> Delete
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <Link href="client-profile.html" className="avatar">
                                <img
                                  alt=""
                                  src="assets/img/profiles/avatar-14.jpg"
                                ></img>
                              </Link>
                              <Link href="client-profile.html">
                                {" "}
                                Voonna Sowmya <span>QA Automation</span>
                              </Link>
                            </h2>
                          </td>
                          <td>Sowmya.Voonna@evolutyz.com</td>
                          <td>
                            <Link className="btn btn-white btn-sm btn-rounded">
                              <i className="fa fa-dot-circle-o text-danger"></i>{" "}
                              Offline
                            </Link>
                          </td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <Link
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="material-icons">more_vert</i>
                              </Link>
                              <div className="dropdown-menu dropdown-menu-right">
                                <Link
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-pencil m-r-5"></i> Edit
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  href="javascript:void(0)"
                                >
                                  <i className="fa fa-trash-o m-r-5"></i> Delete
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card-footer">
                  <Link href="clients.html">complete leading board</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <Theme />
      </div>
    </>
  );
}

export default Dashboard;
