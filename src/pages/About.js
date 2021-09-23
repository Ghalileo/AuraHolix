import React from 'react'
import {Row, Col} from 'react-bootstrap'

const About = () => {
    return (
        <>
            <section>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Row className="aboutRowOne">
                <Col xs={6} style={{position: "relative", left: "80px"}}>
                    <h2 style={{textAlign: "left"}}>Introducing Aura</h2>
                    <p style={{textAlign: "left", color: "blue"}}>I'm an artist and astrologer who helps any and every one find their authentic self and inner sense of purpose.  Whether it's through art therapy, 1-on-1 consultations, or spiritual guidebooks, I enjoy working with people from all over the world, and I would love to help embrace your gifts!</p>
                </Col>
                <Col xs={6}>
                    <div>
                        Placeholder
                    </div>
                </Col>
                </Row>
            </section>
        </>
    )
}

export default About;