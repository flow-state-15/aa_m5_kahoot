import React from "react";
import ModuleCard from './ModuleCard'
import HowToUse from "./HowToUse";

export default function Home(): JSX.Element {
    return (
        <div className="home-root">
            <h2>This is the Home Component</h2>
            <div className="card-container">
                <ModuleCard content='Module 1' />
                <ModuleCard content='Module 2' />
                <ModuleCard content='Module 3' />
                <ModuleCard content='Module 4' />
                <ModuleCard content='Module 5' />
                <ModuleCard content='Module 6' />
                <ModuleCard content='Module 7' />
            </div>
            <HowToUse />
        </div>
    );
}
