import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import "../../styles/FactViewer.scss"


export default function FactViewer() {
    const [fact, setFact] = useState(null);
    const [language, setLanguage] = useState('en');

    const fetchFact = async (mode) => {
        let url = '';
        if (mode === 'today') {
            url = `https://uselessfacts.jsph.pl/api/v2/facts/today?language=${language}`;
        } else if (mode === 'random') {
            url = `https://uselessfacts.jsph.pl/api/v2/facts/random?language=${language}`;
        }

        try {
            const response = await axios.get(url);
            setFact(response.data);
        } catch (error) {
            console.error('Error fetching fact:', error);
        }
    };

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };
  return (
    <div className="fact-viewer">
    <h2>Random Fact Viewer</h2>
    <select value={language} onChange={handleLanguageChange} className="factLanguage">
        <option value="en">English</option>
        <option value="de">German</option>
    </select>

    <div className="button-container">
        <button onClick={() => fetchFact('today')}>Fact of the Day</button>
        <button onClick={() => fetchFact('random')}>Random Fact</button>
    </div>

    {fact && (
        <div className="fact-card">
            <h3>Fact Details</h3>
            <div className="fact-details">
                <p>Text: {fact.text}</p>
                <p>Source URL: <a href={fact.source_url}>{fact.source_url}</a></p>
                <p>Language: {fact.language}</p>
            </div>
        </div>
    )}
</div>
  )
}
export const useClient = true;