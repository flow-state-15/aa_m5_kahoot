import { styled } from "@mui/material/styles";

const Wrapper = styled("div")({
  background: "white",
  position: "fixed",
  top: 70,
  left: 260,
  width: "100%",
  height: "100%",
  borderRadius: "1px",
  border: "solid transparent 1px",
  boxShadow: "rgba(0, 0, 0, 0.3) 0px 3px 8px",
});

export default function SideNavMain() {

  return (
    <Wrapper>
      <h1>This is the side nav bar main</h1>
    </Wrapper>
  );
}
