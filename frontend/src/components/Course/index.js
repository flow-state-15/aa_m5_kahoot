import { Routes, Route } from 'react-router-dom';
import Folders from '../Folders';

export default function Course() {
    return (
        <>
            <div className="course">
                <h2>This is the Course Component</h2>
            </div>
            <Routes>
                <Route path="/folders" element={<Folders />} />
            </Routes>
        </>
    );
}