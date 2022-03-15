import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

function RouteComponent({ Component, updateState, setUserName }) {
  const navigate = useNavigate();  
  return <Component navigator={navigate} updateState={updateState}  setUserName={setUserName} />;
}

export default RouteComponent;
