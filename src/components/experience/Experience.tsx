import React from "react";
import {Row} from "react-bootstrap";

export default function Experience(props: any) {
    const {title, company, from, to, description} = props;
    return (
        <Row className="mb-4 experience-item">
            <div className="experience-title">{title} | {company}</div>
            <div className="fw-lighter">{from} – {to}</div>
            <div className="lh-base fw-bold">{description}</div>
        </Row>
    );
}
