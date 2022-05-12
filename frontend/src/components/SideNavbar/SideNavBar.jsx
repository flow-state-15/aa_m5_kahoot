import { styled } from "@mui/material/styles";
import { useState } from "react";
import SideNavBarTwo from "./SideNavBarTwo";

const Wrapper = styled("div")({
  background: "white",
  position: "fixed",
  top: 0,
  left: 0,
  width: "70px",
  height: "100%",
  zIndex: "100",
  // padding: "20px 0",
});

const Sidebar = styled("div")({
  // background: "rgb(5, 68, 104)",
  position: "fixed",
  top: 0,
  left: 0,
  width: "70px",
  height: "100%",
  padding: "10px 0",
});

const ButtonOne = styled("button")({
  border: "1px outset blue",
  backgroundColor: "white",
  height: "50px",
  width: "50px",
  cursor: "pointer",
  left: "0",
  margin: ".5rem .5rem",
});

export default function SideNavBar() {
  const [open, setOpen] = useState("FT");

  return (
    <>
      <Wrapper>
        <Sidebar>
          <ButtonOne onClick={() => setOpen("FT")}>FT</ButtonOne>
          {open === 'FT' && <SideNavBarTwo location={open} />}
          <ButtonOne onClick={() => setOpen("PT")} >PT</ButtonOne>
          {open === 'PT' && <SideNavBarTwo location={open} />}
          <ButtonOne onClick={() => setOpen("NY")} >NY</ButtonOne>
          {open === 'NY' && <SideNavBarTwo location={open} />}
          <ButtonOne onClick={() => setOpen("SF")} >SF</ButtonOne>
          {open === 'SF' && <SideNavBarTwo location={open} />}
        </Sidebar>
      </Wrapper>
    </>
  );
}
