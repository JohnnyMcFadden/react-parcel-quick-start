import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

if (process.env.NODE_ENV !== 'production') {
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

const App = () => (
  <main>
    <header>
      <h1>React Parcel Quick Start</h1>
      <h2>A lightweight project using React & Parcel.</h2>
      <h3>Fork this repo & build on.</h3>
    </header>
    <section>
      <p>
        A few extra niceties have been added & configured, feel free to remove.
      </p>
      <ul>
        <li>
          React-axe: accessibility auditing & guidance during development (
          <strong>not required or instantiated for production</strong>).
        </li>
        <li>Node sass</li>
      </ul>
    </section>
    <footer>
      For more information or questions, check out:{' '}
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.thejoecodes.com/'
      >
        The Joe Codes.
      </a>
    </footer>
  </main>
);

const root = document.getElementById('root');

ReactDOM.render(<App />, root);
