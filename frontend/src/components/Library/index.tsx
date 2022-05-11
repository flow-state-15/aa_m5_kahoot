import { Link, Route, Routes } from "react-router-dom";
import React, { useState } from "react";

export default function Library() {

    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    return (
        <div className="library">

            {/* <Routes>
                <Route path="/all" element={<Recent />} />
                <Route path="/drafts" element={<Drafts />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/shared" element={<Shared />} />
            </Routes> */}

            {/* Recent shows all in the URL on Kahoot */}
            <Link to='all'> Recent</Link>
            <Link to='drafts'> Drafts</Link>
            <Link to='favorites'> Favorites</Link>
            <Link to='shared'> Shared with me</Link>
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
}
