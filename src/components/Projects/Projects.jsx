import React from 'react';
import './projects.scss';

import Card from '../Card/Card';
import data from '../../data';

const Projects = props => {
  return (
    <div className='section'>

      <h2>Projects</h2>
      <div className='projects'>
      {
        data.projects.map(proj => <Card {...proj} />)
      }
      </div>

    </div>
  );
}

export default Projects;