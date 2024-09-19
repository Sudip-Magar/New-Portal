import React, { useState, useEffect } from 'react';

function AApp() {
    const [news, setNews] = useState([]);
    const url = 'https://api.worldnewsapi.com/search-news?text=earth+quake&language=en&earliest-publish-date=2024-04-01';
    const apiKey = 'e02ffc0db43a46be8c1b475f572465f3';

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                'x-api-key': apiKey
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => setNews(data.news)) // Ensure you're accessing the right data structure
        .catch(error => console.error('There was a problem with the fetch operation:', error));
    }, []); // The empty array ensures this effect runs only once on mount

    return (
        <div>
            {news.map((article, index) => (
                <h3 key={index}>{article.name}</h3> // Use a key for mapped items
            ))}
        </div>
    );
}

export default AApp;
