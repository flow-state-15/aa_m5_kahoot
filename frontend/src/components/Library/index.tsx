import { Link, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import SideNavBar from "../SideNavbar/SideNavBar";
import Courses from "../Courses";
import Kahoots from "../Kahoots";
import LibraryBar from "./LibraryBar";

const Wrapper = styled("div")({
  background: "white",
  position: "fixed",
  top: 60,
  left: 272,
  width: "100%",
  height: "100%",
  borderRadius: "1px",
  border: "solid transparent 1px",
  boxShadow: "rgba(0, 0, 0, 0.3) 0px 3px 8px",
  paddingLeft: "10px",
});

export default function Library() {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <div className="library">
      <SideNavBar />
      <h1>test</h1>
      <Wrapper>
        <Routes>
          <Route path="all" element={<Kahoots />}></Route>
          <Route path="courses" element={<Courses />}></Route>
        </Routes>
      </Wrapper>
    </div>
  );
}
