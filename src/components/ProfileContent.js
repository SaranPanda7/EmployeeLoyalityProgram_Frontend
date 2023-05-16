import React from "react";
import { useState } from "react";
import { loginRequest } from "../authConfig";
import Button from "react-bootstrap/Button";
import { ProfileData } from "./ProfileData";
import { callMsGraph } from "../graph";
import { useMsal } from "@azure/msal-react";
import "../css/dashboard.css";

function ProfileContent(props) {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);

  const name = accounts[0] && accounts[0].name;

  function RequestProfileData() {
    const request = {
      ...loginRequest,
      account: accounts[0],
    };

    instance
      .acquireTokenSilent(request)
      .then((response) => {
        callMsGraph(response.accessToken).then((response) =>
          setGraphData(response)
          
        );
      })
      .catch((e) => {
        instance.acquireTokenPopup(request).then((response) => {
          callMsGraph(response.accessToken).then((response) =>
            setGraphData(response)
          );
        });
      });
  }

  return (
    <>
      {graphData ? (
        <ProfileData graphData={graphData} />
      ) : (
        <>
          <div
            className="card-title"
            style={{
              marginLeft: "1000px",
              marginTop: "-500px",
              color: "white",
            }}
          >
            <Button variant="secondary" onClick={RequestProfileData}>
              Request Profile Information
            </Button>{" "}
            <h5>Welcome {name}</h5>
          </div>
        </>
      )}
    </>
  );
}

export default ProfileContent;
