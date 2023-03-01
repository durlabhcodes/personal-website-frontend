import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import "./AppBootstrap.css";
export default function AppBootstrap() {
    return (
        <Container fluid className="justify-content-center border border-3 border-dark p-0">
            <Container fluid className="py-3 px-5 mt-0" style={{backgroundColor:"#a9bbd2"}}>
                <Container fluid className="p-3 bg-white">
                    <Container className="border border-2 border-dark p-5">
                        <Row className="d-none d-md-flex justify-content-center fw-bold hero-title">
                            Durlabh Sharma
                        </Row>
                        <Row className="d-flex d-md-none justify-content-center fs-1 fw-bold hero-title">
                            Durlabh
                        </Row>
                        <Row className="d-flex d-md-none justify-content-center fs-1 fw-bold hero-title">
                            Sharma
                        </Row>
                        <Row className="d-none d-md-flex justify-content-center fs-5 text-uppercase ">
                            Software Developer
                        </Row>
                    </Container>

                </Container>

            </Container>
            <Row className="justify-content-center border-top border-dark">
                <Col md={12} lg={6} className="border border-0 border-bottom border-dark pt-5 info-section" style={{backgroundColor:"#d9e2ec"}}>
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
                            <span className="d-none d-md-flex">Certifications & Achievements</span>
                            <span className="d-flex d-md-none">Certifications</span>
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
                <Col className="pt-5">
                    <Row>
                        <div className="section-title" style={{marginBottom:"3rem"}}>Experience</div>
                    </Row>
                    <Row className="mb-4 experience-item">
                        <div className="experience-title">Senior Manager | Morgan Stanley</div>
                        <div className="fw-lighter">June 2020 – Present</div>
                        <div className="lh-base fw-bold">Working on Client Onboarding Project which initiates the onboarding of clients and handles various levels of checks and reviews from various teams driven by workflow management tool as its primary driving engine. Tech stack on Angular 8 and Spring Boot with Mongo as database.</div>
                    </Row>
                    <Row className="mb-4 experience-item">
                        <div className="experience-title">Software Engineer | Priceline, Booking Holdings</div>
                        <div className="fw-lighter">Nov 2018 – June 2020</div>
                        <div className="lh-base fw-bold">Involved in development of various tools and features for Hotels Team of Priceline.com. Current project involves creating a tool in React-Spring Boot stack which will be used by the team to handle the pricing and managing deals for Priceline Hotels.</div>
                    </Row>
                    <Row className="mb-4 experience-item">
                        <div className="experience-title">Software Engineer | Paytm, One97</div>
                        <div className="fw-lighter">Jan 2017 – Nov 2018</div>
                        <div className="lh-base fw-bold">Worked with core development team of Paytm Payments Bank. Debit Card issuance, Offline Cash in/Cash Out, Super Liquid Fixed Deposit, Add Money to Paytm Account via Debit card are few of the various projects I’ve worked upon at Paytm Payments Bank.</div>
                    </Row>
                    <Row className="mb-4 experience-item">
                        <div className="experience-title">Software Engineer | Pratham Software</div>
                        <div className="fw-lighter">May 2016 – Jan 2017</div>
                        <div className="lh-base fw-bold">Worked with client named Dataflow Group, Noida which deals in background verification and authentication services. Key responsibilities included managing Savvion BPM software which included designing custom workflows, development, deployment and post-delivery maintenance of the workflows.</div>
                    </Row>
                    <Row className="mb-4 experience-item">
                        <div className="experience-title">Software Engineer | CarDekho, Girnarsoft</div>
                        <div className="fw-lighter">Jun 2014 – May 2016</div>
                        <div className="lh-base fw-bold">Cardekho.com provides its visitors with explained car details, car reviews and e-commerce services to help them reach out to the automobile dealers. Major projects I’ve worked upon are Car Ranking algorithm, Trustmark Certification and general upgrades to performance and features of CarDekho Portal.</div>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
