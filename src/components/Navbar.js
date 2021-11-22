import React from 'react';

export default function Navbar() {
  const [isToggle, setIsToggle] = React.useState(false);

  return (
    <nav>
      <div className='toggle-btn'>
        <div onClick={() => setIsToggle(!isToggle)} className='toggle'>
          <i
            className={
              isToggle
                ? 'fa-solid fa-xmark navbar-icon'
                : 'fa-solid fa-bars navbar-icon'
            }
          ></i>
        </div>
      </div>

      <div
        className='nav-links'
        style={{ transform: isToggle ? 'scale(0.75)' : '' }}
      >
        <ul>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#contact'>Contact Me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
