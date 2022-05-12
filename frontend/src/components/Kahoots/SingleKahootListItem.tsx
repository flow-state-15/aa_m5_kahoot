import { styled } from "@mui/material/styles";

const Wrapper = styled("div")({
  display: "flex",
  background: "white",
  width: "70%",
  marginLeft: "50px",
  marginBottom: "1rem",
  height: "100px",
  borderRadius: "1px",
  border: "solid transparent 1px",
  boxShadow: "rgba(0, 0, 0, 0.3) 0px 3px 8px",
  cursor: "pointer",

  "&:hover":{
    transition: "all 0.2s ease-in-and-out",
    height: "95px",
}
});

interface SingleKahootProp {
  kahoot: string;
}

export default function SingleKahootListItem(props: SingleKahootProp) {
  return (
    <Wrapper>
      <img
        src="https://kahoot.com/files/2019/02/BrandAssets-Logo-CoverImage.png"
        alt="kahoot"
        style={{ height: "100%", width: "125px" }}
      ></img>
      <h3 style={{ marginLeft: "15px"}}>{props.kahoot}</h3>
    </Wrapper>
  );
}
