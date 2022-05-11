import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import {useState } from 'react';
import { Link } from "react-router-dom";


const Wrapper = styled("div")({
  background: "white",
  position: "fixed",
  top: 60,
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

export default function SideNavBarTwo({location}) {

  // const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <div>
        <MenuItem>
          <MenuIcon  fontSize="small" style={{marginRight: '10px'}}/>
           <Link to='/library/all'>Kahoots </Link>
        </MenuItem>
        <MenuItem>
          <LibraryBooksIcon fontSize="small" style={{marginRight: '10px'}}/>
          <Link to='/library/courses'>Courses </Link>
        </MenuItem>
        <h3>Current: {location}</h3>
      </div>
    </Wrapper>
  );
}
