import React from 'react';
import classes from './App.module.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import Resume from './containers/Resume/Resume';
import Projects from './containers/Projects/Projects';

function App() {
  return (
    <div className={classes.App}>
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/projects/" element={<Projects />} />
        <Route path="/*" element={<Navigate to="/"/>} />
      </Routes>
    </div>
  );
}

export default App;
