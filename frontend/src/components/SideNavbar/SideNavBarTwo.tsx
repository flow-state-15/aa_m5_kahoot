import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import {useState } from 'react';
import SideNavMain from "./SideNavMain";


const Wrapper = styled("div")({
  background: "white",
  position: "fixed",
  top: 70,
  left: 70,
  width: "200px",
  height: "100%",
  borderRadius: "1px",
  border: "solid transparent 1px",
  boxShadow: "rgba(0, 0, 0, 0.3) 0px 3px 8px",
});

const MenuItem = styled("h3")({
  padding: "10px",
  verticalAlign: " middle",
  cursor: "pointer",
});

export default function SideNavBarTwo() {

  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <div>
        <MenuItem onClick={() => setOpen(!open)}>
          <MenuIcon  fontSize="small" style={{marginRight: '10px'}}/>
          Kahoots
        </MenuItem>
        {open && <SideNavMain />}
        <MenuItem>
          <LibraryBooksIcon fontSize="small" style={{marginRight: '10px'}}/>
          Courses
        </MenuItem>
      </div>
    </Wrapper>
  );
}
