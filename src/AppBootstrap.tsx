import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import "./AppBootstrap.css";
import Experience from "./components/experience";
export default function AppBootstrap() {
    const [experiences, setExperiences] = React.useState([{}]);

    React.useEffect(() => {
        fetch('data/Experience.json').then(res => res.json()).then(data => setExperiences(data))
    }, []);

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
                    {experiences.map((experience:any) => <Experience
                        key={experience.company}
                        title={experience.title}
                        company={experience.company}
                        from={experience.from}
                        to={experience.to}
                        description={experience.description}></Experience>)}
                </Col>
            </Row>
        </Container>
    )
}
