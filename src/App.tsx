import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar";

function App() {
  return (
      <section className="main-container">
          <div className="resume-data">
              <section className="resume-data__header">
                  <div className="resume-data__header__nested_box_1">
                      <div className="resume-data__header__nested_box_2">
                          <span className="resume-data__header__name">Durlabh Sharma</span>
                          <span className="resume-data__header__role">Software Developer</span>
                      </div>
                  </div>
              </section>
              <section className="resume-body">
                  <div className="resume-body__personal-info">
                      ABC
                  </div>
                  <div className="resume-body__experience">
                      TEST
                  </div>
              </section>
          </div>
      </section>
  );
}

export default App;
