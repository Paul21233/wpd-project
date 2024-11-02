import React from 'react';
import './MainContent.css';
import buildIngImg from '../assets/building-exterior.jpg';

const MainContent = () => (
    <main className="main_content">
        <div className="text_content">
            <h2>A commitment to innovation and sustainability</h2>
            <p>
                Études is a pioneering firm that seamlessly merges
                creativity and functionality to redefine architectural excellence.
            </p>
            <button className="about_btn">About Us</button>
        </div>
        <img src={buildIngImg} alt="building" className="home_img" />
    </main>
);