import React from "react";
import { Banner } from "./Banner";
import { Content } from "./Content";
import { useNavigate } from "react-router-dom";

export const HomePageView = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Banner />
      <Content />
      <button onClick={() => navigate("/todo")}>todo list</button>
    </div>
  );
};
