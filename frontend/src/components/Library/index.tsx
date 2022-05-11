import { Link, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import SideNavBar from "../SideNavbar/SideNavBar";

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

      <Routes>
        <Route
          path="all"
          element={
            <Wrapper>
              <h1>This is library home</h1>
            </Wrapper>
          }
        ></Route>
        <Route
          path="courses"
          element={
            <Wrapper>
              <h1>This is courses home</h1>
            </Wrapper>
          }
        ></Route>
      </Routes>
    </div>
  );
}

/* <Routes>
                <Route path="/all" element={<Recent />} />
                <Route path="/drafts" element={<Drafts />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/shared" element={<Shared />} />
            </Routes> */

/* Recent shows all in the URL on Kahoot */

// <Link to='all'> Recent</Link>
// <Link to='drafts'> Drafts</Link>
// <Link to='favorites'> Favorites</Link>
// <Link to='shared'> Shared with me</Link>
// <input
//     type="text"
//     placeholder="Search"
//     onChange={handleChange}
//     value={searchInput} />

// <div>
//     <h1>Content will go here based on the link chosen</h1>
// </div>
