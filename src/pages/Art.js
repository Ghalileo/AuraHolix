import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {Card} from 'antd';
import orgoniteone from '../assets/orgonitesingle.jpg'
import mic from '../assets/mic.jpg'
import zodiacs from '../assets/zodiacs.jpg'
const { Meta } = Card;

const Art = () => {

    return(
        <>
            <br/>
            <br/>
            <br/>
            <br/>
            <h2 style={{textAlign:"center"}}>ART ADDICT</h2>
            <Container style={{position: "relative", left:"50px"}}>
                <Row>
                    <Col>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={orgoniteone} />}
                            >
                        <h5>Orgonite Pyramids</h5>
                        <p>"Orgone", is the life energy found everwhere.  These custom pyramids are not only beautiful but they can also transform negative, harmful energy into postive, productive energy.</p>
                        </Card>
                    </Col>
                    <Col>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={mic} />}
                            >
                                <br/>
                        <h5>Music</h5>
                        <ul style={{position: "relative", right:"15px"}}>
                            <li>Spotify</li>
                            <li>Pandora</li>
                            <li>Youtube</li>
                            <li>Itunes</li>
                        </ul>
                        </Card>
                    </Col>
                    <Col>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={zodiacs} />}
                            >
                        <h5>Zodiac NoteBooks</h5>
                        <p>Customized Zodiac journals make the perfect gift for evert one - from Aries to Pisces.</p>
                        </Card>
                    </Col>
                </Row>   
            

            </Container>
            
        </>
    )
}

export default Art;