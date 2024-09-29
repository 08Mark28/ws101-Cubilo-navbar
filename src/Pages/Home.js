import React from 'react';
import './Home.css';

export default function Home() {
    return (
        <div className="home-container">
            <section className="home-section">
                <h1 className="home-title">"Conserving the World"</h1>
                <p className="home-description">
                "Environmental conservation has become a crucial aspect of today's world, 
                focusing on protecting nature and promoting sustainability. It's not just 
                about planting trees; it's about nurturing ecosystems, preserving biodiversity, 
                and ensuring a greener future for generations to come."
                </p>
                <button className="btn">
                    <h1>Explore</h1>
                </button>
            </section>
        </div>
    );
}
