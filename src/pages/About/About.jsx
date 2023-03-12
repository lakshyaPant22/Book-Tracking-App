import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Bookshala</h2>
            <p className='fs-17'> Book Tracker is a handy app that helps users keep track of their reading habits and progress. With this app, users can easily log the books they've read, including the title, author, genre, and other details like the date they started and finished reading the book. They can also rate the book and write a short review to help them remember their thoughts on the book later on.</p>
            <p className='fs-17'>Overall, Book Tracker is a useful tool for book lovers who want to keep track of their reading habits and stay motivated to reach their reading goals.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
