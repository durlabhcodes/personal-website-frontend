import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import "./AppBootstrap.css";
export default function AppBootstrap() {
    return (
        <Container fluid className="justify-content-center border border-3 border-dark p-0">
            <Container fluid className="py-3 px-5 mt-0" style={{backgroundColor:"#a9bbd2"}}>
                <Container fluid className="p-3 bg-white">
                    <Container className="border border-2 border-dark p-5">
                        <Row className="justify-content-center fw-bold" style={{fontFamily:"Merriweather, serif", fontSize:"4.5rem"}}>
                            Durlabh Sharma
                        </Row>
                        <Row className="justify-content-center fs-5">
                            Software Developer
                        </Row>
                    </Container>

                </Container>

            </Container>
            <Row className="justify-content-center">
                <Col style={{backgroundColor:"#d9e2ec"}}>
                    <Row className="personal-info-section">
                        <div className="section-title">
                            <span>Contact</span>
                        </div>
                        <div>
                            <i className="bi bi-telephone-forward"></i>
                            <span>+91-8800339872</span>
                        </div>
                        <div>
                            <i className="bi bi-telephone-forward"></i>
                            <span>+91-8290377370</span>
                        </div>
                        <div>
                            <i className="bi bi-envelope-at"></i>
                            <span>sharma.durlabh.93@gmail.com</span>
                        </div>
                    </Row>
                    <Row className="personal-info-section">
                        <div className="section-title">
                            <span>Education</span>
                        </div>
                        <div>
                            <div className="fw-bolder education-degree fs-5">B.Tech, Computer Science</div>
                            <div className="fw-lighter education-degree">2014</div>
                        </div>
                        <div>
                            <div>Rajasthan Technical University, Kota</div>
                        </div>
                    </Row>
                    <Row className="personal-info-section">
                        <div className="section-title">
                            <span>Skills</span>
                        </div>
                        <Row>
                            <ul className="m-0">
                                <li><span className="fw-bold">Languages:</span> Java, Javascript, Python, Go</li>
                                <li><span className="fw-bold">Frameworks:</span> Spring Framework, Hibernate ORM, Struts Framework</li>
                                <li><span className="fw-bold">Servers:</span> Tomcat, Pramati, JBoss</li>
                                <li><span className="fw-bold">Build Tools:</span> Maven, Ant & Gradle</li>
                                <li><span className="fw-bold">Databases:</span> Mysql, Mongo, Cassandra, Redis, Aerospike</li>
                            </ul>
                        </Row>
                    </Row>
                    <Row className="personal-info-section">
                        <div className="section-title">
                            <span>Certifications & Achievements</span>
                        </div>
                        <Row>
                            <ul>
                                <li><span className="fw-bold">IELTS</span> – Academic Score: 7.5 bands and CEFR Level: C1</li>
                                <li><span className="fw-bold">Power Searching with Google</span></li>
                                <li><span className="fw-bold">Certified Information Security Professional</span>, Hitesh Choudhary</li>
                            </ul>
                        </Row>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <div>Experience</div>
                    </Row>
                    <Row>
                        <div>Senior Manager | Morgan Stanley</div>
                        <div>June 2020 – Present</div>
                        <div>Working on Client Onboarding Project which initiates the onboarding of clients and handles various levels of checks and reviews from various teams driven by workflow management tool as its primary driving engine. Tech stack on Angular 8 and Spring Boot with Mongo as database.</div>
                    </Row>
                    <Row>
                        <div>Software Engineer | Priceline, Booking Holdings</div>
                        <div>Nov 2018 – June 2020</div>
                        <div>Involved in development of various tools and features for Hotels Team of Priceline.com. Current project involves creating a tool in React-Spring Boot stack which will be used by the team to handle the pricing and managing deals for Priceline Hotels.</div>
                    </Row>
                    <Row>
                        <div>Software Engineer | Paytm, One97</div>
                        <div>Jan 2017 – Nov 2018</div>
                        <div>Worked with core development team of Paytm Payments Bank. Debit Card issuance, Offline Cash in/Cash Out, Super Liquid Fixed Deposit, Add Money to Paytm Account via Debit card are few of the various projects I’ve worked upon at Paytm Payments Bank.</div>
                    </Row>
                    <Row>
                        <div>Software Engineer | Pratham Software</div>
                        <div>May 2016 – Jan 2017</div>
                        <div>Worked with client named Dataflow Group, Noida which deals in background verification and authentication services. Key responsibilities included managing Savvion BPM software which included designing custom workflows, development, deployment and post-delivery maintenance of the workflows.</div>
                    </Row>
                    <Row>
                        <div>Software Engineer | CarDekho, Girnarsoft</div>
                        <div>Jun 2014 – May 2016</div>
                        <div>Cardekho.com provides its visitors with explained car details, car reviews and e-commerce services to help them reach out to the automobile dealers. Major projects I’ve worked upon are Car Ranking algorithm, Trustmark Certification and general upgrades to performance and features of CarDekho Portal.</div>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
