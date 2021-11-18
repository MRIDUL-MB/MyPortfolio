import React from 'react';

export default function Navbar() {
  const [isToggle, setIsToggle] = React.useState(false);

  return (
    <nav style={{ backgroundColor: isToggle ? 'black' : 'transparent' }}>
      <div className='toggle-btn'>
        <div onClick={() => setIsToggle(!isToggle)}>
          <i
            className={isToggle ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}
          ></i>
        </div>
      </div>

      <div
        style={{ display: isToggle ? 'block' : 'none' }}
        className='nav-links'
      >
        <ul>
          <li>
            <a href='about'>About</a>
          </li>
          <li>
            <a href='projects'>Projects</a>
          </li>
          <li>
            <a href='contact'>Contact Me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}