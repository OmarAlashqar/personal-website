import React from 'react';
import './header.scss'

import data from '../../data';

const Header = () => {
  const {
    name,
    urlGithub,
    urlResume,
    urlLinkedin,
  } = data;

  return (
    <div className='header'>
      <div className='header-left'></div>
      <div className='header-right'>

          <div className='header-name'>
            <h1>{name}</h1>
            <div className='header-link-wrapper'>
              {urlResume && <a className='header-link' href={urlResume}>Resume</a>}
              {urlGithub && <a className='header-link' href={urlGithub}>Github</a>}
              {urlLinkedin && <a className='header-link' href={urlLinkedin}>Linkedin</a>}
            </div>
          </div>
        }
        
        <div className='header-deco'></div>
      </div>
    </div>
  );
}

export default Header;