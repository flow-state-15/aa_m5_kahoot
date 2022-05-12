import { useParams } from "react-router-dom";
import SideNavBar from "../SideNavbar/SideNavBar";

export default function SingleKahootPage() {
  const { kahootId } = useParams();

  return (
    <>
      <h1>Hello from {kahootId} </h1>
    </>
  );
}
