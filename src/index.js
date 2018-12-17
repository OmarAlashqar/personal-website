import React from 'react';
import ReactDOM from 'react-dom';
import './reset.scss';

import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';

import data from './data';

const Site = () => (
  <>
    <Header name={data.name} />
    <Projects />
  </>
)

ReactDOM.render(<Site />, document.getElementById('root'));