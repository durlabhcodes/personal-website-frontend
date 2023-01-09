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
                      <div className="resume-body__personal-info__body">
                          <div className="resume-body__personal-info__body__contact">
                              <div className="resume-body__personal-info__contact__header">Contact</div>
                              <div className="resume-body__personal-info__contact__phone">+91-8800-339-872</div>
                              <div className="resume-body__personal-info__contact__phone">+91-8800-339-872</div>
                              <div className="resume-body__personal-info__contact__email">sharma.durlabh.93@gmail.com</div>
                          </div>

                          <div className="resume-body__personal-info__body__education">
                              <div className="resume-body__personal-info__education__header">Education</div>
                              <div className="resume-body__personal-info__education__course">B.Tech Computer Science</div>
                              <div className="resume-body__personal-info__education__year">2014</div>
                              <div className="resume-body__personal-info__education__uni">Rajasthan Technical University, Kota</div>
                          </div>

                          <div className="resume-body__personal-info__body__skills">
                              <div className="resume-body__personal-info__skills__header">Skills</div>
                              <ul className="resume-body__personal-info__skills__list">
                                  <li>
                                      <span>Languages: Java, Javascript, Python, Go</span>
                                  </li>
                                  <li>
                                      <span>Frameworks: Spring Framework, Hibernate ORM, Struts Framework</span>
                                  </li>
                                  <li>
                                      <span>Servers: Tomcat, Pramati, JBoss</span>
                                  </li>
                                  <li>
                                      <span>Build Tools: Maven, Ant & Gradle</span>
                                  </li>
                                  <li>
                                      <span>Databases: Mysql, Mongo, Cassandra, Redis, Aerospike</span>
                                  </li>
                              </ul>
                          </div>

                          <div className="resume-body__personal-info__body__certifications">
                              <div className="resume-body__personal-info__body__certifications__header">Certifications & Achievements</div>
                              <ul className="resume-body__personal-info__body__certifications__list">
                                  <li>
                                      <span>IELTS – Academic Score: 7.5 bands and CEFR Level: C1</span>
                                  </li>
                                  <li>
                                      <span>Completed a certification by Google – Power Searching with Google</span>
                                  </li>
                                  <li>
                                      <span>Certified Information Security Professional under the guidance of Mr. Hitesh Choudhary, Security Expert</span>
                                  </li>
                              </ul>
                          </div>

                      </div>
                  </div>

                  <div className="resume-body__experience">
                      <span>TEST</span>
                  </div>
              </section>
          </div>
      </section>
  );
}

export default App;
