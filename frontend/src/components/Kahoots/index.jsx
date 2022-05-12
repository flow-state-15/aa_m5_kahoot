import LibraryBar from "../Library/LibraryBar";
import SingleKahootListItem from "./SingleKahootListItem";
import { NavLink } from "react-router-dom";


export default function Kahoots() {
  let kahoots = [
    "kahoot1",
    "kahoot2",
    "kahoot3",
    "kahoot4",
    "kahoot5",
    "kahoot6",
  ];
  return (
    <div className="answers">
      <LibraryBar />
      {kahoots.map((kahoot) => (
        <NavLink key={kahoot} to={`/kahoots/${kahoot}`}> <SingleKahootListItem kahoot={kahoot} /> </NavLink>
      ))}
    </div>
  );
}
