import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Link } from "react-router-dom";

export default function LibraryBar() {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      style={{marginLeft: "5rem", marginTop: "2rem", marginBottom: "2rem"}}
    >
      <ToggleButton value="recent">
        {" "}
        <Link to="all"> Recent</Link>{" "}
      </ToggleButton>
      <ToggleButton value="drafts">Drafts</ToggleButton>
      <ToggleButton value="favorites">Favorites</ToggleButton>
      <ToggleButton value="shared">Shared with me</ToggleButton>
    </ToggleButtonGroup>
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
