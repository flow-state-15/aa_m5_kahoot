import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import SubKahoots from "./SubKahoots";
import { useState } from "react";

export default function SubCourses() {
  const [openCourses, setOpenCourses] = useState(false);
  console.log(openCourses);

  return (
    <List
      sx={{
        width: "20%",
        maxWidth: 360,
        bgcolor: "background.paper",
        marginLeft: 4,
        marginTop: 4,
        cursor: "pointer"
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon onClick={() => setOpenCourses(!openCourses)} />
          </Avatar>
          {openCourses && <SubKahoots />}
        </ListItemAvatar>
        <ListItemText primary="Mod 1" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Mod 2" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Mod 3" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Mod 4" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Mod 5" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Mod 6" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Mod 7" />
      </ListItem>
    </List>
  );
}
