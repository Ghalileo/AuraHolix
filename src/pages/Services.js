import React from 'react';
import {Col, Row, Container} from 'react-bootstrap';

const Services = () => {
    return (
        <>
            <Container style={{position: "relative", left: "800px"}}>
            <Row >
                <Col>
                    <h2 style={{color:"pink"}}>What we do</h2>
                    <br/>
                    <h3 style={{color:"pink"}}>Art</h3>
                    <ul style={{color:"green"}}>
                        <li>Custom Orgonite Pyramids</li>
                        <li>Music Prduction & Vocals</li>
                        <li>Custom Zodiac Notebooks</li>
                    </ul>
                    <br/>
                    <h3 style={{color:"pink"}}>Astrology</h3>
                    <ul style={{color:"green"}}>
                        <li>Life & Career Path Readings</li>
                        <li>Soulmate & Life Partner Readings</li>
                        <li>Astrocartography (Location) Readings</li>
                    </ul>
                    <br/>
                    <h3 style={{color:"pink"}}>Activism</h3>
                    <ul style={{color:"green"}}>
                        <li>For Every Human Foundation</li>
                        <li>Pretty Cool Person™ Merchendise</li>
                        <li>Mediate for Peace</li>
                    </ul>
                </Col>
            </Row>
            </Container>
        </>
    )
}

export default Services; 