import React from "react";

export const ProfileData = (props) => {

  console.log(props.graphData)
  
  return (
    <div
      id="profile-div"
      style={{ marginLeft: "900px", marginTop: "-500px", color: "white" }}
    >
      <p>
        <strong>First Name: </strong> {props.graphData.givenName}
      </p>
      <p>
        <strong>Last Name: </strong> {props.graphData.surname}
      </p>
    </div>
  );
};
