
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import SubCourses from "./SubCourses";
import { useState } from "react";

export default function Course() {
  const [openCourses, setOpenCourses] = useState(false);
  console.log(openCourses);

  return (
    <>
    <List sx={{ width: "20%", maxWidth: 360, bgcolor: "background.paper", cursor: "pointer" }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon onClick={() => setOpenCourses(!openCourses)} />
          </Avatar>
          {openCourses && <SubCourses />}
        </ListItemAvatar>
        <ListItemText primary="FT" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="PT" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="NY" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="SF" />
      </ListItem>
    </List>
    </>
  );
};
