import React from "react";
import { Link } from "react-router-dom";

function NotificationList() {
  return (
    <>
      <aside className="control-sidebar control-sidebar-light">
        <div id="control-sidebar-home-tab">
          <h3 className="control-sidebar-heading">Recent Notification</h3>
          <div className="notifications">
            <div className="topnav-dropdown-header">
              <span className="notification-title">Notifications</span>
              <Link
                href="javascript:void(0)"
                className="clear-noti"
                data-toggle="close-noti"
              >
                {" "}
                Clear All{" "}
              </Link>
            </div>
            <div className="noti-content">
              <ul className="notification-list">
                <li className="notification-message">
                  <Link
                    href="#delete_employee"
                    data-toggle="modal"
                    data-target="#delete_employee"
                  >
                    <div className="media">
                      <span className="avatar">
                        <img
                          alt=""
                          src={require("../assets/img/profiles/avatar-04.jpg")}
                        />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">
                            Dungi Pravalika Reddy
                          </span>{" "}
                          reached <span className="noti-title">500 points</span>{" "}
                          in{" "}
                          <span className="noti-title">
                            Social-Media Leadboard
                          </span>{" "}
                          in just <span className="noti-title">6 months</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">3 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="notification-message">
                  <Link
                    href="#delete_employee"
                    data-toggle="modal"
                    data-target="#delete_employee"
                  >
                    <div className="media">
                      <span className="avatar">
                        <img
                          alt=""
                          src={require("../assets/img/profiles/avatar-10.jpg")}
                        />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Srikanth Guttula</span>{" "}
                          completes <span className="noti-title">4 Years</span>{" "}
                          work anniversary at Evolutyz Vizag
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">12 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="notification-message">
                  <Link
                    href="#delete_employee"
                    data-toggle="modal"
                    data-target="#delete_employee"
                  >
                    <div className="media">
                      <span className="avatar">
                        <img
                          alt=""
                          src={require("../assets/img/profiles/avatar-12.jpg")}
                        />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Srikanth Konduru</span>{" "}
                          winner of{" "}
                          <span className="noti-title">Emoji Quiz</span> weekly
                          activity
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">4 days ago</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="notification-message">
                  <Link
                    href="#delete_employee"
                    data-toggle="modal"
                    data-target="#delete_employee"
                  >
                    <div className="media">
                      <span className="avatar">
                        <img
                          alt=""
                          src={require("../assets/img/profiles/avatar-16.jpg")}
                        />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Solman Tanuku</span>{" "}
                          runner up <span className="noti-title">5k Run</span>{" "}
                          event held at Tenneti Beach
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">1 week ago</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="notification-message">
                  <Link
                    href="#delete_employee"
                    data-toggle="modal"
                    data-target="#delete_employee"
                  >
                    <div className="media">
                      <span className="avatar">
                        <img
                          alt=""
                          src={require("../assets/img/profiles/avatar-01.jpg")}
                        />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Arushi Patro</span>{" "}
                          promoted from{" "}
                          <span className="noti-title">Intern</span> to{" "}
                          <span className="noti-title">Business Analyst</span>{" "}
                          for ELP Project
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">1 year ago</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="topnav-dropdown-footer">
              <Link className="" to="activities.html">
                View all Notifications
              </Link>
            </div>
          </div>
        </div>
      </aside>
      <div className="control-sidebar-bg"></div>
    </>
  );
}

export default NotificationList;
