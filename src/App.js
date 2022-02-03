import React from 'react';

function App() {
  return (
    <div className='card'>
      <header className='profile'>
        <img src={require('./img/profile_laura.png')} alt="" className='profile--photo' />
        <h1 className="profile--name">Laura Smith</h1>
        <h2 className="profile--title">Frontend Developer</h2>
        <p className="profile--website">laurasmith.website</p>
      </header>
      <div className="cta">
        <button className="cta--email">
          <i class="fa-solid fa-envelope"></i> Email
        </button>
        <button className="cta--linkedin">
          <i class="fa-brands fa-linkedin"></i> Linkedin
        </button>
      </div>
      <section className="about">
        <div className="about--header">About</div>
        <div className="about--description">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</div>
        <div className="about--header">Interests</div>
        <div className="about--description">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</div>
      </section>
      <footer className="footer">
        <div className="footer--wrapper">
          <i class="footer--icon fa-brands fa-twitter-square"></i>
          <i class="footer--icon fa-brands fa-facebook-square"></i>
          <i class="footer--icon fa-brands fa-instagram-square"></i>
          <i class="footer--icon fa-brands fa-github-square"></i>
        </div>
      </footer>
    </div>
  );
}

export default App;
