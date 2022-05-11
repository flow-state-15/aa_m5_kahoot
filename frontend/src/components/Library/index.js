import { Link, Route, Routes } from "@types/react-dom";
import { useState } from "react";

export default function Library() {

    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    return (
        <div className="library">
            {/* Recent shows all in the URL on Kahoot */}
            <Link to='/all'> Recent</Link>
            <Link to='/drafts'> Drafts</Link>
            <Link to='/favorites'> Favorites</Link>
            <Link to='/shared'> Shared with me</Link>
            <input
                type="text"
                placeholder="Search"
                onChange={handleChange}
                value={searchInput} />
            <div>
                <h1>Content will go here based on the link chosen</h1>
            </div>
        </div>
    );

    <Routes>
        <Route path="/all" element={<Recent />} />
        <Route path="/drafts" element={<Recent />} />
        <Route path="/favorites" element={<Recent />} />
        <Route path="/shared" element={<Recent />} />
    </Routes>
}
