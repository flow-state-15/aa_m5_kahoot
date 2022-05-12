import LibraryBar from "../Library/LibraryBar";
import SingleKahoot from "./SingleKahoot";


export default function Kahoots() {
  let kahoots = ["kahoot1", "kahoot2", "kahoot3", "kahoot4", "kahoot5", "kahoot6"];
  return (
      <div className="answers">
        <LibraryBar />
          {kahoots.map((kahoot) => (
            <SingleKahoot kahoot={kahoot} />
          ))}
      </div>
  );
}
