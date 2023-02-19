import React from "react";
import {Col, Container, Row} from "react-bootstrap";
export default function AppBootstrap() {
    return (
        <Container fluid className="justify-content-center border border-3 border-dark">
            <Container fluid className="bg-dark p-3">
                <Container className="p-3 bg-white">
                    <Container className="border border-2 border-dark p-5">
                        <Row className="justify-content-center fs-1 fw-bold">
                            Durlabh Sharma
                        </Row>
                        <Row className="justify-content-center fs-5">
                            Software Developer
                        </Row>
                    </Container>

                </Container>

            </Container>
            <Row className="justify-content-center">
                <Col>
                    <Row>
                        <div>Contact</div>
                    </Row>
                    <Row>
                        <div>+91-8800339872</div>
                    </Row>
                    <Row>
                        <div>+91-8290377370</div>
                    </Row>
                    <Row>
                        <div>sharma.durlabh.93@gmail.com</div>
                    </Row>
                    <Row>
                        <div>Education</div>
                    </Row>
                    <Row>
                        <div>B.Tech, Computer Science</div>
                        <div>2014</div>
                    </Row>
                    <Row>
                        <div>Rajasthan Technical University</div>
                    </Row>
                    <Row>
                        <div>Skills</div>
                    </Row>
                    <Row>
                        <ul>
                            <li>Languages: Java, Javascript, Python, Go</li>
                            <li>Frameworks: Spring Framework, Hibernate ORM, Struts Framework</li>
                            <li>Servers: Tomcat, Pramati, JBoss</li>
                            <li>Build Tools: Maven, Ant & Gradle</li>
                            <li>Databases: Mysql, Mongo, Cassandra, Redis, Aerospike</li>
                        </ul>
                    </Row>
                    <Row>
                        <div>Certifications & Achievements</div>
                    </Row>
                    <Row>
                        <ul>
                            <li>IELTS – Academic Score: 7.5 bands and CEFR Level: C1</li>
                            <li>Power Searching with Google</li>
                            <li>Certified Information Security Professional, Hitesh Choudhary</li>
                        </ul>
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
