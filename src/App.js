import React from "react";
import ReactDOM from "react-dom/client";
import KeywordsCard from "./components/KeywordsCard";
import { keywords } from "./utils/data";

const App = () => {
    return (
        <main className="main">
            <h1 className="title">React JS - Keywords Alert</h1>
            <section className="section">
                {keywords.map((keyword, index) => {
                    return (
                        <KeywordsCard key={index} keyword={keyword} />
                    )
                })}
            </section>
        </main>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);