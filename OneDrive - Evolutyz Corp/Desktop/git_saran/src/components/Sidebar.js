import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useMsal } from "@azure/msal-react";
import { SignOutButton } from "./SignOutButton";
import { Accordion } from "react-bootstrap";
import axios from "axios";

function Sidebar() {
  const ProfileData = (props) => {
    console.log(props.graphData);
  };
  
  let navigate = useNavigate(); 
  const routeHome = () =>{ 
    let path = `/home`; 
    navigate(path);
  }
  const routeUsers = () =>{ 
    let path = `/syncuser`; 
    navigate(path);
  }
  

  // const { accounts } = useMsal();
  // eslint-disable-next-line no-unused-vars
  const [graphData, setGraphData] = useState(null);

  // const name = accounts[0] && accounts[0].name;

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const [notify, setNotify] = useState("");

  const toggleNotifi = () => {
    if (notify === "") {
      setNotify("notify-sidebar-open");
    } else {
      setNotify("");
    }
  };

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

  useEffect(() => {
    document.body.className = notify;
    //document.querySelectorAll("aside.control-sidebar.control-sidebar-light")[0] = notify;
  }, [notify]);

  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner">
        <Accordion id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li>
              <Link to="/Profile" className="p-0 table-avatar d-flex align-items-center justify-content-center mt-2">
                <div className="avatar p-0 mr-0">
                  <img
                    src={require("../assets/img/profiles/avatar-21.jpg")}
                    alt=""
                    height="38"
                  />
                </div>
                <ProfileData graphData={graphData} />
                <span className="h4 ml-2 mb-0">
                  {" "}
                  {itsme.first_name} {itsme.last_name}
                  <span className="d-block text-muted h6 mb-0">
                    {itsme.designation}
                  </span>
                </span>
              </Link>
            </li>
            <li className="menu-title">
              <span>Main</span>
            </li>
            <Accordion.Item as="li" className="submenu" eventKey="0">
              <Accordion.Button as="a" onClick={routeHome}>
                <i className="la la-dashboard"></i> <span>Home</span>
              </Accordion.Button>
              </Accordion.Item>
            <Accordion.Item as="li" className="submenu" eventKey="1">
              <Accordion.Button as="a" onClick={routeUsers}>
                <i className="la la-users"></i> <span>Users</span>
              </Accordion.Button>
              </Accordion.Item>
            {/* <Accordion.Item as="li" className="submenu" eventKey="0">
              <Accordion.Button as="a">
                <i className="la la-users"></i> <span>Users</span>{" "}
                <span className="menu-arrow"></span>
              </Accordion.Button>
              <Accordion.Body as="ul" style={{ display: "block" }}>
                <li>
                  <Link to="/syncuser">
                    <i className="la la-users-cog"></i>
                    <span> Synchronize</span>
                  </Link>
                </li>
                <li>
                  <Link to="/viewprofile">
                    <i className="la la-user-check"></i>
                    <span> View Profiles</span>
                  </Link>
                </li>
              </Accordion.Body>
            </Accordion.Item> */}
            <Accordion.Item as="li" className="submenu" eventKey="2">
              <Accordion.Button as="a">
                <i className="la la-award"></i> <span>Rewards Programs</span>
                <span className="menu-arrow"></span>
              </Accordion.Button>
              <Accordion.Body as="ul" style={{ display: "block" }}>
                <li>
                  <Link to="/reward">
                    <i className="la la-edit"></i> <span>Create Reward</span>
                  </Link>
                </li>
                <li>
                  <Link to="/instantreward">
                    <i className="la la-tasks"></i> <span>Assign Reward</span>
                  </Link>
                </li>
              </Accordion.Body>
            </Accordion.Item>
          </ul>
        </Accordion>
        <div className="sidebar-menu">
          <div className="alert-secondary mx-2">
            <hr />
          </div>
          <ul className="logout-mode">
            <li className="menu-title">
              <span>Main</span>
            </li>
            <li>
              <Link
                to="#"
                data-toggle="control-sidebar"
                className="position-relative"
                onClick={toggleNotifi}
              >
                <i className="fa fa-bell-o"></i>
                <strong className="badge badge-pill bg-inverse-danger">
                  3
                </strong>
                <span>Notification</span>
              </Link>
            </li>

            <li className="mode">
              <Link to="#">
                <i className="la la-moon"></i>
                <div className="d-flex justify-content-between w-100">
                  <span className="link-name">Dark Mode</span>
                  <div className="status-toggle position-relative">
                    <input
                      type="checkbox"
                      className={`App_${theme}`}
                      onClick={toggleTheme}
                    />
                    <label htmlFor="theme_module" className="checktoggle">
                      checkbox
                    </label>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <SignOutButton />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
