import { useState, useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Theme from "../components/theme";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function InstantReward() {

  const notify = () => {

    toast.success("Submit uccessfully", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }

  const [data, setData] = useState({
    user_id: "",
    comment: "",
    reward_id: " ",
    citation_id: "",
    certificate: "",
    is_uploaded: false,
  });


  // //Assign reward
  const AssignRequest = (payload) => {


    var data = JSON.stringify({
      certificate: payload.certificate,
      citation_id: payload.citation_id,
      comment: payload.comment,
      is_uploaded: payload.is_uploaded,
      reward_id: payload.reward_id,
      user_id: payload.user_id,
    });

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_BACKEND_URL}/user/assignreward`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        // addToast('Saved Successfully', { appearance: 'success' });
        toast(response.data.message, {position: toast.POSITION.BOTTOM_RIGHT})
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  console.log(data);

  const changeHandler = (e) => {
    e.target.style.opacity = 1;
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // window.location.href = "/instantreward";
    

    console.log();
    AssignRequest(data);
    // window.location.href = "/reward";
  };
  const textSelect = (k) => {
    console.log(k);
    k.target.nextSibling.style.display = "block";
    //k.target.nextSibling.style.opacity=1;
  };

  //Get all rewards
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

  // Get all users
  const [Userdata, setUserData] = useState([]);
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
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="page-header mb-2">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">Reward Association</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home">
                        <span>
                          <i className="la la-home"></i> Home
                        </span>
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">
                      <i className="la la-award"></i> Instant(User)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <Tabs defaultActiveKey="individual" className="nav-tabs-bottom">
              <Tab eventKey="individual" title="Individual">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title mb-0">Instant</h4>
                  </div>
                  <div className="card-body">
                    <form onSubmit={submitHandler}>
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="form-group row">
                            <label className="col-lg-3 col-form-label">
                              Employee
                            </label>
                            <div className="col-lg-9">
                              <div className="top-nav-search position-relative">
                                <input
                                  type="text"
                                  className="form-control"
                                  onChange={(e) => textSelect(e)}
                                />
                                <select
                                  className="form-control txtSelect"
                                  placeholder="Search Employee by Name.."
                                  name="user_id"
                                  onChange={changeHandler}
                                  //style={{ display: "none", position:"absolute", top:0, opacity:0, appearance:"none" }}
                                >
                                  <option> Search Employee by Name..</option>
                                  {Array.isArray(Userdata.items) &&
                                    Userdata.items.map((req) => (
                                      <>
                                        <option value={req.id}>
                                          {req.employee_id}
                                        </option>
                                      </>
                                    ))}
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="form-group row">
                            <label className="col-lg-3 col-form-label">
                              Award/Recognition
                            </label>
                            <div className="col-lg-9">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Award/Recognition"
                                onChange={(e) => textSelect(e)}
                              />
                              <select
                                className="form-control txtSelect"
                                aria-label="Select Award"
                                name="reward_id"
                                onChange={changeHandler}
                              >
                                <option>-- Select Award --</option>
                                {Array.isArray(userReward.items) &&
                                  userReward.items.map((req) => (
                                    <>
                                      <option value={req.id}>
                                        {req.title}
                                      </option>
                                    </>
                                  ))}
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-lg-3 col-form-label">
                          Write Citation
                          <i className="text-danger small">*</i>
                        </label>
                        <div className="col-lg-9">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Citation"
                            onChange={(e) => textSelect(e)}
                          />
                          <select
                            type="text"
                            className="form-control shr txtSelect"
                            // required
                            name="citation_id"
                            onChange={changeHandler}
                            // {...req.employee_id}
                          >
                            <option> Search Employee by Id..</option>
                            {Array.isArray(Userdata.items) &&
                              Userdata.items.map((req) => (
                                <>
                                  <option value={req.id}>
                                    {req.employee_id}
                                  </option>
                                </>
                              ))}
                          </select>
                          <small>
                            (special charecters not allowed except , -_-&%! )
                          </small>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-lg-3 col-form-label">
                          Add Business Justification
                          <i className="text-danger small">*</i>
                        </label>
                        <div className="col-lg-9">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Only for Review"
                            // required
                            name="comment"
                            onChange={changeHandler}
                          />
                        </div>
                      </div>

                      <div className="row">
                        <label className="col-lg-3 col-form-label">
                          Single File Upload
                        </label>
                        <div className="col-lg-9">
                          <div
                            className="custom-file-container"
                            data-upload-id="myFirstImage"
                          >
                            <label className="mb-0">
                              Upload (Single File)
                              <Link
                                href="javascript:void(0)"
                                className="custom-file-container__image-clear"
                                title="Clear Image"
                              >
                                x
                              </Link>
                            </label>
                            <label className="custom-file-container__custom-file">
                              <input
                                type="file"
                                className="custom-file-container__custom-file__custom-file-input"
                                accept="image/*"
                              />
                              <input
                                type="hidden"
                                name="MAX_FILE_SIZE"
                                value="10485760"
                                // required
                                // name="is_uploaded"
                                onChange={changeHandler}
                              />
                              <span className="custom-file-container__custom-file__custom-file-control">
                                {" "}
                                Choose File...
                              </span>
                              <span className="custom-file-container__custom-file__custom-file-control__button">
                                Browse
                              </span>
                            </label>
                            <div className="custom-file-container__image-preview">
                              <img
                                src={require("../assets/img/fileupload.png" ) } alt=""
                              ></img>
                            </div>
                          </div>
                          <div
                            className="custom-file-container d-none"
                            data-upload-id="mySecondImage"
                          >
                            <label>
                              Upload (Allow Multiple)
                              <Link
                                href="javascript:void(0)"
                                className="custom-file-container__image-clear"
                                title="Clear Image"
                              >
                                x
                              </Link>
                            </label>
                            <label className="custom-file-container__custom-file">
                              <input
                                type="file"
                                className="custom-file-container__custom-file__custom-file-input"
                                multiple
                              />
                              <input
                                type="hidden"
                                name="MAX_FILE_SIZE"
                                value="10485760"
                              />
                              <span className="custom-file-container__custom-file__custom-file-control"></span>
                            </label>
                            <div className="custom-file-container__image-preview"></div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <button type="submit" onClick={notify}  className="btn btn-primary">
                          Submit
                        </button>
                        
                        <ToastContainer />
                      </div>
                    </form>
                  </div>
                </div>
                <label className="custom-file-container__custom-file">
                  <input
                    type="file"
                    className="custom-file-container__custom-file__custom-file-input"
                    accept="image/*"
                  />
                  <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
                </label>
              </Tab>

              <Tab eventKey="bulkupdate" title="Bulk Update">
                <div
                  className="tab-pane"
                  id="BulkUpload"
                  role="tabpanel"
                  aria-labelledby="bulkupload-tab"
                >
                  <div className="faq-card">
                    <form>
                      <div className="form-group row">
                        <label className="col-lg-3 col-form-label">
                          Upload Document
                        </label>
                        <div className="col-lg-7">
                          <input
                            type="file"
                            className="form-control"
                            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                            required
                            name="is_uploaded"
                            onChange={changeHandler}
                          />
                          <span className="form-text text-muted">
                            Recommended image size is 200px x 40px
                          </span>
                        </div>
                        <div className="col-lg-2">
                          <div className="img-thumbnail float-right">
                            <img
                              src={require("../assets/img/logo.png")}
                              className="img-fluid"
                              alt=""
                              width="140"
                              height="40"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          Template format{" "}
                          <Link href="#"> Click here(.xls )</Link>
                        </div>
                      </div>
                      <div className="submit-section">
                        <button onClick={notify} className="btn btn-primary submit-btn">
                          Save
                        </button>
                       
                      </div>
                    </form>
                    <div className="card mt-3">
                      <div className="card-header">
                        <h4 className="card-title mb-0">
                          <a
                            className=""
                            aria-expanded="true"
                            data-toggle="collapse"
                            href="#collapseOne"
                          >
                            Caution:
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseOne"
                        className="card-collapse collapse show"
                      >
                        <div className="card-body">
                          <ol>
                            <li>
                              Employee ID and Name should be mentioned in
                              alphanumeric characters only.
                            </li>
                            <li>
                              Reward Program Name is to be selected from a
                              drop-down menu and must be the same as mentioned
                              in the database.
                            </li>
                            <li>
                              For the writing citation section, state the reason
                              as to why the concerned employee’s being given
                              this award.
                            </li>
                            <li>
                              For reviewing it, please state the email ID of the
                              manager they’re working under.
                            </li>
                            <li>
                              In the Concerned People Ops section, care should
                              be taken to note the email ID of the People Ops
                              employee that’s responsible for assigning the
                              reward.
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
      <Footer></Footer>
      <Theme></Theme>
    </div>
  );
}

export default InstantReward;
